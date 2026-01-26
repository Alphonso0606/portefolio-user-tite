'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { personal } from '@/data/personal';
import { ChevronDown } from 'lucide-react';

// Modèle 3D simple d'un bâtiment
function BuildingModel() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Base du bâtiment */}
            <mesh position={[0, 0, 0]} castShadow>
                <boxGeometry args={[2, 3, 2]} />
                <meshStandardMaterial
                    color="#0ea5e9"
                    metalness={0.3}
                    roughness={0.4}
                />
            </mesh>

            {/* Toit */}
            <mesh position={[0, 1.8, 0]} castShadow>
                <coneGeometry args={[1.5, 0.8, 4]} />
                <meshStandardMaterial
                    color="#0284c7"
                    metalness={0.5}
                    roughness={0.3}
                />
            </mesh>

            {/* Fenêtres */}
            {[-0.6, 0, 0.6].map((y, i) => (
                <group key={i}>
                    <mesh position={[1.01, y, 0]} castShadow>
                        <boxGeometry args={[0.02, 0.4, 0.3]} />
                        <meshStandardMaterial
                            color="#ffffff"
                            emissive="#fbbf24"
                            emissiveIntensity={0.3}
                        />
                    </mesh>
                    <mesh position={[-1.01, y, 0]} castShadow>
                        <boxGeometry args={[0.02, 0.4, 0.3]} />
                        <meshStandardMaterial
                            color="#ffffff"
                            emissive="#fbbf24"
                            emissiveIntensity={0.3}
                        />
                    </mesh>
                </group>
            ))}

            {/* Porte */}
            <mesh position={[0, -1.2, 1.01]} castShadow>
                <boxGeometry args={[0.4, 0.8, 0.02]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
        </group>
    );
}

// Scene 3D
function Scene3D() {
    return (
        <Canvas shadows className="w-full h-full">
            <PerspectiveCamera makeDefault position={[5, 3, 5]} />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
                autoRotate
                autoRotateSpeed={0.5}
            />

            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#38bdf8" />

            <Suspense fallback={null}>
                <BuildingModel />
                <Environment preset="sunset" />
            </Suspense>

            {/* Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#1e293b" />
            </mesh>
        </Canvas>
    );
}

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            {/* Canvas 3D en arrière-plan */}
            <div className="absolute inset-0 opacity-40">
                <Scene3D />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
                style={{ maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)' }}
            />

            {/* Contenu principal */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block mb-4 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm"
                        >
              <span className="text-primary-400 text-sm font-medium">
                {personal.currentYear}
              </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="block text-white drop-shadow-lg"
                            >
                                {personal.name.split(' ').slice(0, 2).join(' ')}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="block text-white drop-shadow-lg"
                                style={{ textShadow: '0 0 30px rgba(56, 189, 248, 0.5)' }}
                            >
                                {personal.name.split(' ').slice(2).join(' ')}
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-xl md:text-2xl text-white font-medium mb-4 drop-shadow-lg"
                        >
                            {personal.title}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto drop-shadow-md"
                        >
                            {personal.bio}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/30"
                            >
                                Voir mes projets
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors backdrop-blur-sm border border-white/20"
                            >
                                Me contacter
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={scrollToAbout}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Défiler vers le bas"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </motion.button>
        </section>
    );
}