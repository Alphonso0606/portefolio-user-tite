'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2, CheckCircle } from 'lucide-react';
import { experiences } from '@/data/experience';
import { formatPeriod } from '@/lib/utils';
import type { Experience } from '@/types';

interface ExperienceCardProps {
    exp: Experience;
    period: string;
    align?: 'left' | 'right';
}

function ExperienceCard({ exp, period, align = 'left' }: ExperienceCardProps) {
    return (
        <>
            {/* Date badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{period}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                {exp.role}
            </h3>

            <div className={`flex items-center gap-2 text-primary-600 font-medium mb-2 ${align === 'right' ? 'justify-end' : ''}`}>
                <Building2 className="w-5 h-5" />
                <span>{exp.company}</span>
            </div>

            <div className={`flex items-center gap-2 text-slate-500 mb-4 ${align === 'right' ? 'justify-end' : ''}`}>
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
            </div>

            <p className="text-slate-600 mb-4 leading-relaxed">
                {exp.description}
            </p>

            {/* Missions */}
            {exp.tasks && exp.tasks.length > 0 && (
                <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-3">
                        Missions réalisées :
                    </h4>
                    <ul className="space-y-2">
                        {exp.tasks.map((task, taskIndex) => (
                            <li
                                key={taskIndex}
                                className={`flex items-start gap-2 text-slate-700 ${align === 'right' ? 'flex-row-reverse text-right' : ''}`}
                            >
                                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                                <span>{task}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Projets associés */}
            {exp.projects && exp.projects.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">
                        Projet(s) :
                    </h4>
                    <div className={`flex flex-wrap gap-2 ${align === 'right' ? 'justify-end' : ''}`}>
                        {exp.projects.map((project, projIndex) => (
                            <span
                                key={projIndex}
                                className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                            >
                                {project}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Expérience Professionnelle
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Parcours professionnel et stages réalisés dans le domaine du génie civil
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Ligne verticale */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200" />

                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            const period = formatPeriod(exp.startDate, exp.endDate);

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`relative mb-12 md:mb-16 ${
                                        isEven ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                                    }`}
                                >
                                    {/* Point sur la timeline */}
                                    <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 -ml-2 rounded-full bg-primary-600 border-4 border-white shadow-lg z-10" />

                                    {/* Carte d'expérience */}
                                    <div className={`ml-16 md:ml-0 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                                            {/* Date badge */}
                                            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-4 ${
                                                isEven ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                                            }`}>
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm font-medium">{period}</span>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 clear-both">
                                                {exp.role}
                                            </h3>

                                            <div className="flex items-center gap-2 text-primary-600 font-medium mb-2">
                                                <Building2 className="w-5 h-5" />
                                                <span>{exp.company}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-slate-500 mb-4">
                                                <MapPin className="w-4 h-4" />
                                                <span>{exp.location}</span>
                                            </div>

                                            <p className="text-slate-600 mb-4 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Missions */}
                                            {exp.tasks && exp.tasks.length > 0 && (
                                                <div className="mb-4">
                                                    <h4 className="font-semibold text-slate-900 mb-3">
                                                        Missions réalisées :
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {exp.tasks.map((task, taskIndex) => (
                                                            <motion.li
                                                                key={taskIndex}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.3, delay: taskIndex * 0.05 }}
                                                                className="flex items-start gap-2 text-slate-700"
                                                            >
                                                                <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                                                                <span>{task}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Projets associés */}
                                            {exp.projects && exp.projects.length > 0 && (
                                                <div className="mt-4 pt-4 border-t border-slate-200">
                                                    <h4 className="font-semibold text-slate-900 mb-2">
                                                        Projet(s) :
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.projects.map((project, projIndex) => (
                                                            <span
                                                                key={projIndex}
                                                                className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                                                            >
                                {project}
                              </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mt-12"
                    >
                        <p className="text-slate-600 mb-4">
                            Intéressé par mon profil ? Consultez mon CV complet
                        </p>
                        <a
                            href="/cv-kouakou-tite.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-black rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/30"
                        >
                            Télécharger mon CV
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}