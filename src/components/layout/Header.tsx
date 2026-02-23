'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Download, Eye, ChevronDown } from 'lucide-react';
import { personal } from '@/data/personal';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#projects', label: 'Projets' },
    { href: '#skills', label: 'Compétences' },
    { href: '#experience', label: 'Expérience' },
    { href: '#contact', label: 'Contact' },
];

const CV_PATH = '/cv-kouakou-tite.pdf';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showCvMenu, setShowCvMenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Ferme le menu CV si clic ailleurs
    useEffect(() => {
        if (!showCvMenu) return;
        const close = () => setShowCvMenu(false);
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, [showCvMenu]);

    // Cache le header sur les pages détail de projet
    const isProjectDetail = pathname.startsWith('/projects/') && pathname !== '/projects';
    if (isProjectDetail) return null;

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled || isMobileMenuOpen
                        ? 'bg-slate-900/98 backdrop-blur-lg shadow-lg'
                        : 'bg-transparent'
                }`}
            >
                <nav className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">

                        {/* ── Logo ── */}
                        <motion.a
                            href="/"
                            className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors flex-shrink-0"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {/* Icône portique minimaliste */}
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <rect x="3" y="14" width="3" height="11" rx="1" fill="#2563eb"/>
                                <rect x="22" y="14" width="3" height="11" rx="1" fill="#2563eb"/>
                                <rect x="2" y="12" width="24" height="3" rx="1" fill="#2563eb"/>
                                <line x1="6" y1="14" x2="22" y2="24" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                            </svg>
                            <span className="font-bold text-lg tracking-wide">
                                {personal.name.split(' ').slice(-1)[0]}
                            </span>
                        </motion.a>

                        {/* ── Navigation Desktop ── */}
                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                    className="text-slate-300 hover:text-white transition-colors text-sm relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full" />
                                </motion.a>
                            ))}

                            {/* Bouton CV Desktop */}
                            <div className="relative">
                                <motion.button
                                    onClick={(e) => { e.stopPropagation(); setShowCvMenu(v => !v); }}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.45 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    <FileText size={15} />
                                    CV
                                    <ChevronDown size={13} className={`transition-transform duration-200 ${showCvMenu ? 'rotate-180' : ''}`} />
                                </motion.button>

                                <AnimatePresence>
                                    {showCvMenu && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -6, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -6, scale: 0.96 }}
                                            transition={{ duration: 0.15 }}
                                            onClick={e => e.stopPropagation()}
                                            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
                                        >
                                            <a
                                                href={CV_PATH}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setShowCvMenu(false)}
                                                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm"
                                            >
                                                <Eye size={15} className="text-primary-500" />
                                                Visualiser le CV
                                            </a>
                                            <div className="h-px bg-slate-100" />
                                            <a
                                                href={CV_PATH}
                                                download="CV-KOUAKOU-Tite.pdf"
                                                onClick={() => setShowCvMenu(false)}
                                                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm"
                                            >
                                                <Download size={15} className="text-primary-500" />
                                                Télécharger le CV
                                            </a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* ── Bouton burger mobile ── */}
                        <button
                            onClick={() => setIsMobileMenuOpen(v => !v)}
                            className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <X size={22} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <Menu size={22} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </nav>

                {/* ── Menu Mobile ── */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="md:hidden overflow-hidden border-t border-white/10"
                        >
                            <div className="container mx-auto px-4 py-4 space-y-1">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center text-slate-200 hover:text-white hover:bg-white/8 px-4 py-3 rounded-lg transition-colors text-sm font-medium"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}

                                {/* Séparateur */}
                                <div className="h-px bg-white/10 my-3" />

                                {/* CV mobile — deux boutons côte à côte */}
                                <div className="grid grid-cols-2 gap-2 pt-1">
                                    <a
                                        href={CV_PATH}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 px-3 py-2.5 border border-primary-500 text-primary-400 hover:bg-primary-500/10 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        <Eye size={15} />
                                        Voir CV
                                    </a>
                                    <a
                                        href={CV_PATH}
                                        download="CV-KOUAKOU-Tite.pdf"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 px-3 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
                                    >
                                        <Download size={15} />
                                        Télécharger
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Overlay sombre derrière le menu mobile */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/40 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}