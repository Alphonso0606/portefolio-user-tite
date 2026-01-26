'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react';
import { personal } from '@/data/personal';
import { education, associations } from '@/data/experience';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        À Propos de Moi
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto" />
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Bio avec Photo */}
                    <motion.div {...fadeInUp} className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            {/* Photo de profil */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-1"
                            >
                                <div className="relative">
                                    <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-400 to-blue-600 shadow-2xl relative">
                                        <Image
                                            src="/images/profile.jpg"
                                            alt={personal.name}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                                        <div className="text-primary-600 font-bold text-lg">4ème</div>
                                        <div className="text-slate-600 text-xs">Année</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Texte Bio */}
                            <div className="lg:col-span-2">
                                <div className="bg-slate-50 rounded-2xl p-8 md:p-12 h-full">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                                        Qui suis-je ?
                                    </h3>
                                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                        {personal.bio}
                                    </p>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        Actuellement en {personal.currentYear} à l&#39;{personal.university},
                                        je me spécialise dans la conception structurelle, la modélisation BIM
                                        et le tracé routier. Passionné par l&#39;innovation dans le domaine du
                                        génie civil, je cherche constamment à allier théorie et pratique à
                                        travers des projets concrets.
                                    </p>

                                    {/* Stats rapides */}
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-3xl font-bold text-primary-600">2</div>
                                            <div className="text-sm text-slate-600">Stages effectués</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-3xl font-bold text-primary-600">10+</div>
                                            <div className="text-sm text-slate-600">Logiciels maîtrisés</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formation */}
                    <motion.div {...fadeInUp} className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Formation</h3>
                        </div>
                        <div className="space-y-4">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="border-l-4 border-primary-500 pl-6 py-2"
                                >
                                    <h4 className="text-lg font-semibold text-slate-900">
                                        {edu.degree}
                                        {edu.current && (
                                            <span className="ml-2 text-sm px-2 py-1 bg-primary-100 text-primary-700 rounded">
                        En cours
                      </span>
                                        )}
                                    </h4>
                                    <p className="text-slate-600">{edu.institution}</p>
                                    <p className="text-sm text-slate-500">{edu.year}</p>
                                    {edu.level && (
                                        <p className="text-sm text-primary-600 mt-1">{edu.level}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Vie Associative */}
                    <motion.div {...fadeInUp} className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                                <Award className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Vie Associative
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {associations.map((assoc, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-slate-50 rounded-xl p-6"
                                >
                                    <h4 className="text-lg font-semibold text-slate-900">
                                        {assoc.role}
                                    </h4>
                                    <p className="text-primary-600">{assoc.organization}</p>
                                    <p className="text-sm text-slate-500 mt-1">{assoc.period}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Centres d'intérêt */}
                    <motion.div {...fadeInUp}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                                <Heart className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Centres d&#39;Intérêt
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {personal.interests.map((interest, index) => (
                                <motion.span
                                    key={interest}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full"
                                >
                                    {interest}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Qualités */}
                    <motion.div {...fadeInUp} className="mt-12">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                            Mes Atouts
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {personal.qualities.map((quality, index) => (
                                <motion.div
                                    key={quality}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="text-center p-4 bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg"
                                >
                                    <p className="font-medium text-slate-800">{quality}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}