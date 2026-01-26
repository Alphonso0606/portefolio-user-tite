import { Project } from '@/types';

/**
 * Données des projets
 * À remplacer par vos vrais projets avec images
 */

export const projects: Project[] = [
    {
        id: '1',
        slug: 'villa-duplex-haut-standing',
        title: 'Villa Duplex de Haut Standing',
        description: 'Construction et supervision complète d\'une villa duplex moderne avec finitions luxueuses. Coordination de tous les corps de métiers et respect strict des délais.',
        category: 'building',
        location: 'Fès, Maroc',
        year: 2024,
        client: 'Client Privé',
        thumbnail: '/images/projects/villa-duplex-thumb.jpg',
        images: [
            '/images/projects/villa-duplex-1.jpg',
            '/images/projects/villa-duplex-2.jpg',
            '/images/projects/villa-duplex-3.jpg',
        ],
        model3D: '/models/villa-duplex.glb',
        surface: 350,
        duration: 5,
        team: 8,
        skills: [
            'Suivi de chantier',
            'Coordination technique',
            'Contrôle qualité',
            'Gestion de planning'
        ],
        software: ['AutoCAD', 'REVIT', 'Excel', 'MS Project'],
        content: `
## Description du projet

Construction d'une villa duplex moderne avec des standards élevés de qualité et de finition. 
Le projet incluait la supervision complète depuis les fondations jusqu'aux finitions.

### Missions réalisées

- Suivi quotidien de l'avancement des travaux
- Coordination entre les différents corps de métiers (maçonnerie, électricité, plomberie, finitions)
- Contrôle de la conformité aux plans et spécifications techniques
- Gestion du planning et respect des délais contractuels
- Reporting régulier au maître d'ouvrage

### Défis relevés

- Coordination de 8 entreprises sous-traitantes simultanément
- Adaptation aux modifications clients en cours de chantier
- Respect du budget tout en maintenant la qualité premium
    `,
        featured: true,
        publishedAt: new Date('2024-07-15'),
    },
    {
        id: '2',
        slug: 'trace-routier-autopiste-17',
        title: 'Tracé Routier Autopiste 17',
        description: 'Étude et conception du tracé routier sur Covadis Autopiste 17. Analyse topographique, calculs de terrassement et élaboration des plans d\'exécution.',
        category: 'road',
        location: 'Région Fès-Meknès, Maroc',
        year: 2025,
        client: 'ESMOR - Bureau d\'Études',
        thumbnail: '/images/projects/autopiste-17-thumb.jpg',
        images: [
            '/images/projects/autopiste-17-1.jpg',
            '/images/projects/autopiste-17-2.jpg',
        ],
        duration: 2,
        team: 4,
        skills: [
            'Tracé routier',
            'Topographie',
            'Calcul de terrassement',
            'Plans d\'exécution'
        ],
        software: ['Covadis Autopiste 17', 'AutoCAD', 'Excel'],
        content: `
## Description du projet

Réalisation du tracé routier complet pour le projet Autopiste 17 au sein du bureau d'études ESMOR.
Utilisation de Covadis pour l'optimisation du tracé en plan et en profil.

### Missions réalisées

- Analyse des données topographiques existantes
- Conception du tracé optimal tenant compte des contraintes techniques et environnementales
- Calculs de cubatures (déblai/remblai)
- Dimensionnement de la chaussée
- Élaboration des plans d'exécution détaillés

### Compétences développées

- Maîtrise approfondie de Covadis Autopiste 17
- Compréhension des normes routières marocaines
- Optimisation des coûts de terrassement
    `,
        featured: true,
        publishedAt: new Date('2025-08-29'),
    },
    {
        id: '3',
        slug: 'etude-structure-batiment-r2',
        title: 'Étude de Structure - Bâtiment R+2',
        description: 'Calcul et dimensionnement de la structure d\'un bâtiment résidentiel R+2. Modélisation sur Robot Structural Analysis et plans de ferraillage.',
        category: 'study',
        location: 'Fès, Maroc',
        year: 2024,
        thumbnail: '/images/projects/structure-r2-thumb.jpg',
        images: [
            '/images/projects/structure-r2-1.jpg',
            '/images/projects/structure-r2-2.jpg',
        ],
        surface: 280,
        skills: [
            'Calcul de structures',
            'Modélisation BIM',
            'Ferraillage',
            'Notes de calcul'
        ],
        software: ['Robot Structural Analysis', 'REVIT', 'AutoCAD', 'RDM6'],
        content: `
## Description du projet

Projet académique de calcul complet d'une structure en béton armé pour un bâtiment R+2.
Réalisation de la modélisation, calculs et plans d'exécution.

### Livrables

- Note de calcul détaillée
- Modèle 3D de la structure
- Plans de coffrage
- Plans de ferraillage (semelles, poteaux, poutres, dalles)
- Métrés et quantitatifs

### Logiciels utilisés

- Robot Structural Analysis pour l'analyse structurelle
- REVIT pour la modélisation BIM
- AutoCAD pour les plans 2D
    `,
        featured: false,
        publishedAt: new Date('2024-06-01'),
    },
];

export const projectCategories = {
    building: 'Bâtiment',
    bridge: 'Pont',
    road: 'Route',
    infrastructure: 'Infrastructure',
    study: 'Étude Technique'
};

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter(p => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
    return projects.filter(p => p.category === category);
}

export function getLatestProjects(count: number = 3): Project[] {
    return [...projects]
        .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
        .slice(0, count);
}