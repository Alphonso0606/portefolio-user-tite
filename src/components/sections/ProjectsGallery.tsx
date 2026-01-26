'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { projects, projectCategories } from '@/data/projects';
import { ProjectCategory } from '@/types';

export default function ProjectsGallery() {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const categories = [
        { value: 'all' as const, label: 'Tous' },
        ...Object.entries(projectCategories).map(([key, label]) => ({
            value: key as ProjectCategory,
            label
        }))
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Mes Projets
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Découvrez une sélection de mes réalisations en génie civil,
                        de la conception à la réalisation.
                    </p>
                </motion.div>

                {/* Filtres */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setSelectedCategory(cat.value)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${
                                selectedCategory === cat.value
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                                    : 'bg-white text-slate-700 hover:bg-slate-100'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Grille de projets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                    {/* Image */}
                                    <div className="relative h-64 bg-gradient-to-br from-primary-400 to-blue-600 overflow-hidden">
                                        {/* Placeholder gradient - remplacer par vraie image */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-white text-center p-6">
                                                <Briefcase className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                                <p className="text-sm opacity-75">Image à venir</p>
                                            </div>
                                        </div>

                                        {/* Badge catégorie */}
                                        <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 text-sm font-medium rounded-full">
                        {projectCategories[project.category]}
                      </span>
                                        </div>

                                        {/* Badge featured */}
                                        {project.featured && (
                                            <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                          ★ FEATURED
                        </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Contenu */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-slate-600 mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Métadonnées */}
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                                <MapPin className="w-4 h-4" />
                                                <span>{project.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                                <Calendar className="w-4 h-4" />
                                                <span>{project.year}</span>
                                            </div>
                                            {project.client && (
                                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span>{project.client}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Tags compétences */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.software.slice(0, 3).map((soft) => (
                                                <span
                                                    key={soft}
                                                    className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                                                >
                          {soft}
                        </span>
                                            ))}
                                            {project.software.length > 3 && (
                                                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                          +{project.software.length - 3}
                        </span>
                                            )}
                                        </div>

                                        {/* Bouton voir plus */}
                                        <a
                                            href={`/projects/${project.slug}`}
                                            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group/link"
                                        >
                                            Voir le projet
                                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Message si aucun projet */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-slate-500 text-lg">
                            Aucun projet dans cette catégorie pour le moment.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}