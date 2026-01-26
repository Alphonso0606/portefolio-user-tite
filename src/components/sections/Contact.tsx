'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { personal } from '@/data/personal';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

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
            // Simulation d'envoi (à remplacer par EmailJS ou API)
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Simuler succès
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Réinitialiser après 5 secondes
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
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
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
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
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
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
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
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
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                                    placeholder="Votre message..."
                                />
                            </div>

                            {/* Messages de statut */}
                            {status === 'success' && (
                                <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Message envoyé avec succès !</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
                                    <AlertCircle className="w-5 h-5" />
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/30"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Envoyer le message
                                    </>
                                )}
                            </button>

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