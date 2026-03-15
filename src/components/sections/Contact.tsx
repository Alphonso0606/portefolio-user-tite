'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { personal } from '@/data/personal';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    // Détecte l'autofill du navigateur
    useEffect(() => {
        const interval = setInterval(() => {
            setFormData(prev => ({
                name: nameRef.current?.value || prev.name,
                email: emailRef.current?.value || prev.email,
                subject: subjectRef.current?.value || prev.subject,
                message: messageRef.current?.value || prev.message,
            }));
        }, 500);
        const timeout = setTimeout(() => clearInterval(interval), 3000);
        return () => { clearInterval(interval); clearTimeout(timeout); };
    }, []);

    const isFormFilled =
        formData.name.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.subject.trim() !== '' &&
        formData.message.trim() !== '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') e.preventDefault();
    };

    const handleSend = async () => {
        if (!isFormFilled || status === 'sending') return;
        setStatus('sending');
        setErrorMessage('');
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus('error');
            setErrorMessage("Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.");
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const inputClass = "w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed";

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Contactez-moi
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Une question ? Un projet ? N&#39;hésitez pas à me contacter,
                        je serais ravi d&#39;échanger avec vous.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Informations de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gradient-to-br from-primary-600 to-blue-700 rounded-2xl p-8 md:p-10 text-white h-full">
                            <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Email</h4>
                                        <a href={`mailto:${personal.contact.email}`} className="text-white/90 hover:text-white transition-colors break-all">
                                            {personal.contact.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Téléphone</h4>
                                        <div className="text-white/90">
                                            <a href={`tel:${personal.contact.phone.morocco.replace(/\s/g, '')}`} className="block hover:text-white transition-colors">
                                                {personal.contact.phone.morocco}
                                            </a>
                                            <a href={`tel:${personal.contact.phone.ivoryCoast.replace(/\s/g, '')}`} className="block hover:text-white transition-colors">
                                                {personal.contact.phone.ivoryCoast}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Localisation</h4>
                                        <p className="text-white/90">
                                            {personal.location.address}<br />
                                            {personal.location.full}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Retrouvez-moi sur</h4>
                                <div className="flex gap-4">
                                    <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer"
                                       className="w-12 h-12 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nom complet</label>
                                <input ref={nameRef} type="text" id="name" name="name"
                                       value={formData.name} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown}
                                       disabled={status === 'sending'} className={inputClass}
                                       placeholder="Votre nom" autoComplete="name" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input ref={emailRef} type="email" id="email" name="email"
                                       value={formData.email} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown}
                                       disabled={status === 'sending'} className={inputClass}
                                       placeholder="votre@email.com" autoComplete="email" />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Sujet</label>
                                <input ref={subjectRef} type="text" id="subject" name="subject"
                                       value={formData.subject} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown}
                                       disabled={status === 'sending'} className={inputClass}
                                       placeholder="Objet de votre message" autoComplete="off" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea ref={messageRef} id="message" name="message"
                                          value={formData.message} onChange={handleChange} onBlur={handleBlur}
                                          rows={6} disabled={status === 'sending'}
                                          className={`${inputClass} resize-none`}
                                          placeholder="Votre message..." />
                            </div>

                            {/* Messages de statut */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div key="success" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                                className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                        <span>Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</span>
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div key="error" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                                className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <span>{errorMessage}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* ✅ Bouton avec style inline — jamais purgé par Tailwind */}
                            <div className="space-y-2">
                                <motion.button
                                    type="button"
                                    onClick={handleSend}
                                    disabled={status === 'sending' || !isFormFilled}
                                    whileHover={isFormFilled && status !== 'sending' ? { scale: 1.02 } : {}}
                                    whileTap={isFormFilled && status !== 'sending' ? { scale: 0.97 } : {}}
                                    style={{
                                        backgroundColor: isFormFilled && status !== 'sending' ? '#2563eb' : '#f1f5f9',
                                        color: isFormFilled && status !== 'sending' ? '#ffffff' : '#94a3b8',
                                        cursor: isFormFilled && status !== 'sending' ? 'pointer' : 'not-allowed',
                                        boxShadow: isFormFilled && status !== 'sending' ? '0 10px 25px -5px rgba(37,99,235,0.3)' : 'none',
                                        border: isFormFilled && status !== 'sending' ? 'none' : '1px solid #e2e8f0',
                                    }}
                                    className="relative w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 overflow-hidden"
                                >
                                    {/* Shimmer animé */}
                                    {isFormFilled && status !== 'sending' && (
                                        <motion.span
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                                                transform: 'skewX(-12deg)',
                                            }}
                                            initial={{ x: '-100%' }}
                                            animate={{ x: '200%' }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
                                        />
                                    )}

                                    <AnimatePresence mode="wait">
                                        {status === 'sending' ? (
                                            <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                         className="flex items-center gap-3">
                                                <div className="w-5 h-5 border-2 border-slate-300 border-t-blue-500 rounded-full animate-spin" />
                                                Envoi en cours...
                                            </motion.span>
                                        ) : (
                                            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                         className="flex items-center gap-3">
                                                <Send className="w-5 h-5" />
                                                Envoyer le message
                                                {isFormFilled && (
                                                    <motion.span initial={{ x: -6, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.25 }}>
                                                        <ArrowRight className="w-4 h-4" />
                                                    </motion.span>
                                                )}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>

                                <AnimatePresence>
                                    {!isFormFilled && status === 'idle' && (
                                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                                                  className="text-xs text-center" style={{ color: '#94a3b8' }}>
                                            Remplissez tous les champs pour activer l&#39;envoi
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <p className="text-sm text-slate-500 text-center">
                                Vous pouvez aussi me contacter directement par{' '}
                                <a href={`mailto:${personal.contact.email}`} className="text-primary-600 hover:underline">
                                    email
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}