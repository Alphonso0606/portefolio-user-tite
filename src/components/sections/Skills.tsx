'use client';

import { motion } from 'framer-motion';
import { Wrench, Calculator, Palette, FileText, CheckCircle } from 'lucide-react';
import { skills, skillCategories, technicalSkills } from '@/data/skills';

const categoryIcons = {
    cao: Wrench,
    calcul: Calculator,
    render: Palette,
    office: FileText,
    technical: CheckCircle,
};

const categoryColors = {
    cao: 'from-blue-500 to-cyan-500',
    calcul: 'from-purple-500 to-pink-500',
    render: 'from-orange-500 to-red-500',
    office: 'from-green-500 to-emerald-500',
    technical: 'from-indigo-500 to-blue-500',
};

export default function Skills() {
    // Grouper les compétences par catégorie
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Compétences
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-6" />
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Maîtrise des outils et logiciels essentiels du génie civil moderne
                    </p>
                </motion.div>

                {/* Compétences logicielles */}
                <div className="max-w-6xl mx-auto mb-16">
                    {Object.entries(skillsByCategory).map(([category, categorySkills], catIndex) => {
                        const Icon = categoryIcons[category as keyof typeof categoryIcons];
                        const colorClass = categoryColors[category as keyof typeof categoryColors];

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                className="mb-12"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {skillCategories[category as keyof typeof skillCategories]}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {categorySkills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            className="bg-slate-50 rounded-xl p-4 hover:shadow-lg transition-shadow"
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <h4 className="font-semibold text-slate-900">
                                                    {skill.name}
                                                </h4>
                                                <span className="text-sm text-primary-600 font-medium">
                          {skill.level}/5
                        </span>
                                            </div>

                                            {/* Barre de progression */}
                                            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: index * 0.05 }}
                                                    className={`h-full bg-gradient-to-r ${colorClass} rounded-full`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Compétences techniques */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                            Compétences Techniques
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {technicalSkills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Certifications (si vous en avez) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto mt-12 text-center"
                >
                    <p className="text-slate-600">
                        En constante formation sur les nouvelles technologies et normes du génie civil
                    </p>
                </motion.div>
            </div>
        </section>
    );
}