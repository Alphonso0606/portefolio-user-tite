'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Briefcase, Users, Clock, Play, Box, ChevronLeft, ChevronRight, X, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/types';

interface ProjectContentProps {
    project: Project;
}

function parseInline(text: string): React.ReactNode[] {
    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.*?)\*\*|`(.*?)`/g;
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
        if (match[1] !== undefined) {
            parts.push(<strong key={match.index} className="font-semibold text-slate-900">{match[1]}</strong>);
        } else if (match[2] !== undefined) {
            parts.push(<code key={match.index} className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">{match[2]}</code>);
        }
        lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts;
}

function renderMarkdown(content: string): React.ReactNode[] {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;
    while (i < lines.length) {
        const line = lines[i];
        if (line.startsWith('## ')) {
            elements.push(<h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4">{parseInline(line.slice(3))}</h2>);
            i++; continue;
        }
        if (line.startsWith('### ')) {
            elements.push(<h3 key={i} className="text-xl font-semibold text-slate-800 mt-6 mb-3">{parseInline(line.slice(4))}</h3>);
            i++; continue;
        }
        if (line.startsWith('#### ')) {
            elements.push(<h4 key={i} className="text-lg font-semibold text-slate-800 mt-4 mb-2">{parseInline(line.slice(5))}</h4>);
            i++; continue;
        }
        if (line.startsWith('- ') || line.startsWith('* ')) {
            const listItems: React.ReactNode[] = [];
            while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
                listItems.push(<li key={i} className="text-slate-700 mb-1">{parseInline(lines[i].slice(2))}</li>);
                i++;
            }
            elements.push(<ul key={`ul-${i}`} className="list-disc list-outside ml-6 my-3 space-y-1">{listItems}</ul>);
            continue;
        }
        if (line.trim() === '') { i++; continue; }
        elements.push(<p key={i} className="text-slate-700 leading-relaxed mb-4">{parseInline(line)}</p>);
        i++;
    }
    return elements;
}

export default function ProjectContent({ project }: ProjectContentProps) {
    const [selectedMedia, setSelectedMedia] = useState<'images' | '3d' | 'video'>('images');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const images = project.images && project.images.length > 0 ? project.images : null;

    const prevImage = () => setCurrentIndex((i) => (i - 1 + (images?.length ?? 1)) % (images?.length ?? 1));
    const nextImage = () => setCurrentIndex((i) => (i + 1) % (images?.length ?? 1));

    // Scroll progress + isScrolled
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
            setIsScrolled(scrollTop > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">

            {/* ── Barre de navigation sticky ── */}
            <motion.div
                initial={{ y: -60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-md'
                        : 'bg-white/80 backdrop-blur-sm shadow-sm'
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-14">

                        {/* Retour */}
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors group font-medium text-sm"
                        >
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 group-hover:bg-primary-100 group-hover:text-primary-600 transition-all">
                                <ArrowLeft className="w-4 h-4" />
                            </span>
                            <span className="hidden sm:inline">Retour aux projets</span>
                        </Link>

                        {/* Titre du projet (apparaît en scrollant) */}
                        <AnimatePresence>
                            {isScrolled && (
                                <motion.p
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    className="text-sm font-semibold text-slate-800 truncate max-w-xs md:max-w-md text-center"
                                >
                                    {project.title}
                                </motion.p>
                            )}
                        </AnimatePresence>

                        {/* Accueil */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors group text-sm"
                        >
                            <span className="hidden sm:inline">Accueil</span>
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 group-hover:bg-primary-100 group-hover:text-primary-600 transition-all">
                                <Home className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Barre de progression de lecture */}
                <div className="h-0.5 bg-slate-100">
                    <motion.div
                        className="h-full bg-primary-500 origin-left"
                        style={{ scaleX: scrollProgress / 100 }}
                        transition={{ duration: 0.05 }}
                    />
                </div>
            </motion.div>

            {/* ── Contenu principal ── */}
            <div className="pt-14 pb-20">
                <div className="container mx-auto px-4">

                    {/* En-tête */}
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="pt-10 mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{project.title}</h1>
                        <p className="text-xl text-slate-600 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-5 h-5 text-primary-600" /><span>{project.location}</span></div>
                            <div className="flex items-center gap-2 text-slate-600"><Calendar className="w-5 h-5 text-primary-600" /><span>{project.year}</span></div>
                            {project.client && <div className="flex items-center gap-2 text-slate-600"><Briefcase className="w-5 h-5 text-primary-600" /><span>{project.client}</span></div>}
                            {project.duration && <div className="flex items-center gap-2 text-slate-600"><Clock className="w-5 h-5 text-primary-600" /><span>{project.duration} mois</span></div>}
                            {project.team && <div className="flex items-center gap-2 text-slate-600"><Users className="w-5 h-5 text-primary-600" /><span>{project.team} personnes</span></div>}
                        </div>
                    </motion.div>

                    {/* Onglets */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
                        <div className="flex gap-4 border-b border-slate-200">
                            <button onClick={() => setSelectedMedia('images')} className={`px-6 py-3 font-medium transition-colors relative ${selectedMedia === 'images' ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'}`}>
                                Images
                                {selectedMedia === 'images' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600" />}
                            </button>
                            {project.model3D && (
                                <button onClick={() => setSelectedMedia('3d')} className={`px-6 py-3 font-medium transition-colors relative flex items-center gap-2 ${selectedMedia === '3d' ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'}`}>
                                    <Box className="w-4 h-4" />Modèle 3D
                                    {selectedMedia === '3d' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600" />}
                                </button>
                            )}
                            {project.videoDemo && (
                                <button onClick={() => setSelectedMedia('video')} className={`px-6 py-3 font-medium transition-colors relative flex items-center gap-2 ${selectedMedia === 'video' ? 'text-primary-600' : 'text-slate-600 hover:text-slate-900'}`}>
                                    <Play className="w-4 h-4" />Vidéo Demo
                                    {selectedMedia === 'video' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600" />}
                                </button>
                            )}
                        </div>
                    </motion.div>

                    {/* Médias */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12">

                        {selectedMedia === 'images' && (
                            <div className="space-y-4">
                                {images ? (
                                    <>
                                        <div
                                            className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden bg-slate-100 cursor-zoom-in group"
                                            onClick={() => setLightboxOpen(true)}
                                        >
                                            <Image
                                                src={images[currentIndex]}
                                                alt={`${project.title} - image ${currentIndex + 1}`}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, 80vw"
                                                priority
                                            />
                                            {images.length > 1 && (
                                                <>
                                                    <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <ChevronLeft className="w-6 h-6" />
                                                    </button>
                                                    <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <ChevronRight className="w-6 h-6" />
                                                    </button>
                                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 text-white text-sm px-3 py-1 rounded-full">
                                                        {currentIndex + 1} / {images.length}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        {images.length > 1 && (
                                            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                                                {images.map((src, i) => (
                                                    <div
                                                        key={i}
                                                        onClick={() => setCurrentIndex(i)}
                                                        className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all ${i === currentIndex ? 'ring-2 ring-primary-600' : 'opacity-60 hover:opacity-100'}`}
                                                    >
                                                        <Image src={src} alt={`miniature ${i + 1}`} fill className="object-cover" sizes="150px" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="relative h-96 md:h-[600px] bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl overflow-hidden flex items-center justify-center">
                                        <div className="text-center text-slate-500">
                                            <p className="text-lg font-medium">Aucune image disponible</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {selectedMedia === '3d' && project.model3D && (
                            <div className="relative h-96 md:h-[600px] bg-slate-900 rounded-2xl overflow-hidden">
                                <model-viewer
                                    src={project.model3D}
                                    alt={`Modèle 3D de ${project.title}`}
                                    auto-rotate
                                    camera-controls
                                    style={{ width: '100%', height: '100%', background: 'transparent' }}
                                />
                                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs">
                                    Glissez pour faire pivoter · Molette pour zoomer
                                </p>
                            </div>
                        )}

                        {selectedMedia === 'video' && project.videoDemo && (
                            <div className="relative rounded-2xl overflow-hidden bg-black">
                                <video
                                    src={project.videoDemo}
                                    controls
                                    className="w-full max-h-[600px] object-contain"
                                    poster={images?.[0]}
                                >
                                    Votre navigateur ne supporte pas la lecture vidéo.
                                </video>
                            </div>
                        )}
                    </motion.div>

                    {/* Lightbox */}
                    <AnimatePresence>
                        {lightboxOpen && images && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                                onClick={() => setLightboxOpen(false)}
                            >
                                <button className="absolute top-4 right-4 text-white hover:text-slate-300" onClick={() => setLightboxOpen(false)}>
                                    <X className="w-8 h-8" />
                                </button>
                                <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-300" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                                    <ChevronLeft className="w-10 h-10" />
                                </button>
                                <div className="relative w-full max-w-5xl max-h-[90vh] mx-16" onClick={(e) => e.stopPropagation()}>
                                    <Image
                                        src={images[currentIndex]}
                                        alt={`${project.title} - image ${currentIndex + 1}`}
                                        width={1600}
                                        height={900}
                                        className="object-contain w-full h-full max-h-[90vh]"
                                    />
                                </div>
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-300" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                                    <ChevronRight className="w-10 h-10" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">{currentIndex + 1} / {images.length}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Contenu texte */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="max-w-none">
                                {project.content ? renderMarkdown(project.content) : null}
                            </motion.div>

                            {/* Bouton retour en bas de page */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-16 pt-8 border-t border-slate-200">
                                <Link
                                    href="/#projects"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 hover:bg-primary-600 text-white rounded-xl font-medium transition-all duration-200 group"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    Voir tous les projets
                                </Link>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-1">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="sticky top-20 space-y-8">
                                <div className="bg-slate-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">Compétences mobilisées</h3>
                                    <div className="space-y-2">
                                        {project.skills.map((skill, index) => (
                                            <div key={index} className="flex items-start gap-2 text-slate-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                                                <span className="text-sm">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">Logiciels utilisés</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.software.map((soft, index) => (
                                            <span key={index} className="px-3 py-1.5 bg-white text-slate-700 text-sm rounded-lg border border-slate-200">{soft}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}