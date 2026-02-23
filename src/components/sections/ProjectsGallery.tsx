'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Briefcase, ArrowRight, Building2, Landmark, Route, LayoutGrid, FlaskConical } from 'lucide-react';
import { projects, projectCategories } from '@/data/projects';
import { ProjectCategory } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

// Icône + couleur par catégorie
const categoryMeta: Record<string, { icon: React.ReactNode; color: string; bg: string; border: string }> = {
    all: {
        icon: <LayoutGrid className="w-4 h-4" />,
        color: 'text-slate-700',
        bg: 'bg-slate-800',
        border: 'border-slate-800',
    },
    building: {
        icon: <Building2 className="w-4 h-4" />,
        color: 'text-blue-700',
        bg: 'bg-blue-600',
        border: 'border-blue-600',
    },
    bridge: {
        icon: <Landmark className="w-4 h-4" />,
        color: 'text-emerald-700',
        bg: 'bg-emerald-600',
        border: 'border-emerald-600',
    },
    road: {
        icon: <Route className="w-4 h-4" />,
        color: 'text-orange-700',
        bg: 'bg-orange-500',
        border: 'border-orange-500',
    },
    infrastructure: {
        icon: <LayoutGrid className="w-4 h-4" />,
        color: 'text-purple-700',
        bg: 'bg-purple-600',
        border: 'border-purple-600',
    },
    study: {
        icon: <FlaskConical className="w-4 h-4" />,
        color: 'text-rose-700',
        bg: 'bg-rose-500',
        border: 'border-rose-500',
    },
};

function getCategoryMeta(key: string) {
    return categoryMeta[key] ?? categoryMeta['study'];
}

export default function ProjectsGallery() {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const categories = [
        { value: 'all' as const, label: 'Tous' },
        ...Object.entries(projectCategories).map(([key, label]) => ({
            value: key as ProjectCategory,
            label,
        })),
    ];

    return (
        <section id="projects" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">

                {/* En-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Mes Projets
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-6 rounded-full" />
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Découvrez une sélection de mes réalisations en génie civil,
                        de la conception à la réalisation.
                    </p>
                </motion.div>

                {/* ── Filtres améliorés ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-14"
                >
                    {categories.map((cat) => {
                        const meta = getCategoryMeta(cat.value);
                        const isActive = selectedCategory === cat.value;
                        return (
                            <button
                                key={cat.value}
                                onClick={() => setSelectedCategory(cat.value)}
                                className={`
                                    relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm
                                    border-2 transition-all duration-200
                                    ${isActive
                                    ? `${meta.bg} ${meta.border} text-white shadow-lg scale-105`
                                    : `bg-white ${meta.border} ${meta.color} hover:scale-105 hover:shadow-md`
                                }
                                `}
                            >
                                <span className={isActive ? 'text-white' : meta.color}>
                                    {meta.icon}
                                </span>
                                {cat.label}
                                {isActive && (
                                    <motion.span
                                        layoutId="activeFilter"
                                        className="absolute inset-0 rounded-full"
                                        style={{ zIndex: -1 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </motion.div>

                {/* ── Grille de projets ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => {
                            const meta = getCategoryMeta(project.category);
                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.35, delay: index * 0.08 }}
                                    className="group"
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100">

                                        {/* ── Thumbnail ── */}
                                        <div className="relative h-56 overflow-hidden bg-slate-100">
                                            {project.thumbnail ? (
                                                <Image
                                                    src={project.thumbnail}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            ) : (
                                                // Fallback gradient si pas de thumbnail
                                                <div className={`absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center`}>
                                                    <span className="text-slate-400 text-5xl opacity-40">
                                                        {meta.icon}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Overlay au hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Badge catégorie */}
                                            <div className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md ${meta.bg}`}>
                                                {meta.icon}
                                                {projectCategories[project.category]}
                                            </div>

                                            {/* Badge featured */}
                                            {project.featured && (
                                                <div className="absolute top-3 left-3">
                                                    <span className="px-2.5 py-1 bg-amber-400 text-white text-xs font-bold rounded-full shadow">
                                                        ★ Featured
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* ── Contenu ── */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                                                {project.title}
                                            </h3>

                                            <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
                                                {project.description}
                                            </p>

                                            {/* Métadonnées */}
                                            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                                                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    <span>{project.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    <span>{project.year}</span>
                                                </div>
                                                {project.client && (
                                                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                                        <Briefcase className="w-3.5 h-3.5" />
                                                        <span>{project.client}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Tags logiciels */}
                                            <div className="flex flex-wrap gap-1.5 mb-5">
                                                {project.software.slice(0, 3).map((soft) => (
                                                    <span key={soft} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                                                        {soft}
                                                    </span>
                                                ))}
                                                {project.software.length > 3 && (
                                                    <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-md">
                                                        +{project.software.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            {/* CTA */}
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className={`inline-flex items-center gap-2 text-sm font-semibold ${meta.color} group/link mt-auto`}
                                            >
                                                Voir le projet
                                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Message si aucun projet */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-slate-400 text-lg">
                            Aucun projet dans cette catégorie pour le moment.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}