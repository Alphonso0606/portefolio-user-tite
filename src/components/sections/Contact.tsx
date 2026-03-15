'use client';

import { useState } from 'react';
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

    const isFormFilled =
        formData.name.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.subject.trim() !== '' &&
        formData.message.trim() !== '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
            setErrorMessage(
                "Une erreur est survenue. Veuillez réessayer ou me contacter directement par email."
            );
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

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
                                        <a
                                            href={`mailto:${personal.contact.email}`}
                                            className="text-white/90 hover:text-white transition-colors break-all"
                                        >
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
                                            <a
                                                href={`tel:${personal.contact.phone.morocco.replace(/\s/g, '')}`}
                                                className="block hover:text-white transition-colors"
                                            >
                                                {personal.contact.phone.morocco}
                                            </a>
                                            <a
                                                href={`tel:${personal.contact.phone.ivoryCoast.replace(/\s/g, '')}`}
                                                className="block hover:text-white transition-colors"
                                            >
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

                            {/* Réseaux sociaux */}
                            <div>
                                <h4 className="font-semibold mb-4">Retrouvez-moi sur</h4>
                                <div className="flex gap-4">
                                    <a
                                        href={personal.contact.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulaire de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending'}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Votre nom"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending'}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="votre@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending'}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Objet de votre message"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    disabled={status === 'sending'}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Votre message..."
                                />
                            </div>

                            {/* Messages de statut */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200"
                                    >
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                        <span>Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</span>
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200"
                                    >
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <span>{errorMessage}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* ✅ Bouton Envoyer intuitif */}
                            <div className="space-y-2">
                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending' || !isFormFilled}
                                    whileHover={isFormFilled && status !== 'sending' ? { scale: 1.02 } : {}}
                                    whileTap={isFormFilled && status !== 'sending' ? { scale: 0.97 } : {}}
                                    className={`
                                        relative w-full flex items-center justify-center gap-3
                                        px-6 py-4 rounded-xl font-semibold text-base
                                        transition-all duration-300 overflow-hidden
                                        ${isFormFilled && status !== 'sending'
                                        ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/30 cursor-pointer'
                                        : 'bg-slate-100 text-slate-400 shadow-none cursor-not-allowed border border-slate-200'
                                    }
                                    `}
                                >
                                    {/* Shimmer animé quand le formulaire est prêt */}
                                    {isFormFilled && status !== 'sending' && (
                                        <motion.span
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 pointer-events-none"
                                            initial={{ x: '-100%' }}
                                            animate={{ x: '200%' }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
                                        />
                                    )}

                                    <AnimatePresence mode="wait">
                                        {status === 'sending' ? (
                                            <motion.span
                                                key="sending"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-5 h-5 border-2 border-slate-300 border-t-primary-500 rounded-full animate-spin" />
                                                Envoi en cours...
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="idle"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-3"
                                            >
                                                <Send className="w-5 h-5" />
                                                Envoyer le message
                                                {isFormFilled && (
                                                    <motion.span
                                                        initial={{ x: -6, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ duration: 0.25 }}
                                                    >
                                                        <ArrowRight className="w-4 h-4" />
                                                    </motion.span>
                                                )}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>

                                {/* Hint sous le bouton : guide l'utilisateur */}
                                <AnimatePresence>
                                    {!isFormFilled && status === 'idle' && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -4 }}
                                            className="text-xs text-slate-400 text-center"
                                        >
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
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}