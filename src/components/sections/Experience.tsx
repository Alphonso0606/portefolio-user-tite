'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2, CheckCircle, Download } from 'lucide-react';
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
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -ml-px" />

                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            const period = formatPeriod(exp.startDate, exp.endDate);

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative mb-12"
                                >
                                    <div className="md:grid md:grid-cols-2 md:gap-8 md:items-start">
                                        {isEven ? (
                                            <>
                                                <div className="hidden md:block md:text-right md:pr-8">
                                                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                                                        <ExperienceCard exp={exp} period={period} align="right" />
                                                    </div>
                                                </div>
                                                <div className="hidden md:block" />
                                            </>
                                        ) : (
                                            <>
                                                <div className="hidden md:block" />
                                                <div className="hidden md:block md:pl-8">
                                                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                                                        <ExperienceCard exp={exp} period={period} align="left" />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        <div className="md:hidden col-span-2">
                                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                                <ExperienceCard exp={exp} period={period} align="left" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 -ml-2 rounded-full bg-primary-600 border-4 border-white shadow-lg z-10" />
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mt-16"
                    >
                        <p className="text-slate-600 mb-6 text-lg">
                            Intéressé par mon profil ? Consultez mon CV complet
                        </p>
                        <a
                            href="/cv-kouakou-tite.pdf"
                            download
                            className="inline-flex items-center justify-center gap-3 px-8 py-4
             bg-primary-100 hover:bg-primary-600
             text-slate-900 hover:text-white
             rounded-xl font-semibold transition-all duration-300
             shadow-lg shadow-slate-200/60 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-1"
                        >
                            <Download className="w-5 h-5" />
                            <span>Télécharger mon CV</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}