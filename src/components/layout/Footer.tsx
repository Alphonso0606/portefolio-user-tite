'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';
import { personal } from '@/data/personal';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Colonne 1 : À propos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-4">
                            {personal.name}
                        </h3>
                        <p className="text-slate-400 mb-4">
                            {personal.title}
                        </p>
                        <p className="text-sm text-slate-500">
                            {personal.currentYear} - {personal.university}
                        </p>
                    </motion.div>

                    {/* Colonne 2 : Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            {[
                                { href: '#about', label: 'À propos' },
                                { href: '#projects', label: 'Projets' },
                                { href: '#skills', label: 'Compétences' },
                                { href: '#experience', label: 'Expérience' },
                                { href: '#contact', label: 'Contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-primary-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Colonne 3 : Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                <a
                                    href={`mailto:${personal.contact.email}`}
                                    className="text-slate-400 hover:text-primary-400 transition-colors break-all"
                                >
                                    {personal.contact.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                <div className="text-slate-400">
                                    <div>{personal.contact.phone.morocco}</div>
                                    <div className="text-sm text-slate-500">
                                        {personal.contact.phone.ivoryCoast}
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-400">{personal.location.full}</span>
                            </li>
                        </ul>

                        {/* Réseaux sociaux */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href={personal.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-primary-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="/cv-kouakou-tite.pdf"
                                download
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-primary-600 transition-colors"
                                aria-label="Télécharger CV"
                            >
                                <FileText className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Séparateur */}
                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500">
                            © {currentYear} {personal.name}. Tous droits réservés.
                        </p>
                        <p className="text-sm text-slate-500">
                            Conçu avec par Alphonse Sorel
                            {/*<span className="text-red-500">❤</span> et{' '}*/}
                            {/*<span className="text-primary-400">Next.js</span>*/}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}