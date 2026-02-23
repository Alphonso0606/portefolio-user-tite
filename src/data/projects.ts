import { Project } from '@/types';

/**
 * Données des projets réels
 */

export const projects: Project[] = [
    {
        id: '1',
        slug: 'batiment-r5-sous-sol',
        title: 'Étude Complète Bâtiment R+5 + Sous-sol',
        description: 'Modélisation 3D, descente de charges (BAEL 91 modifié 99), analyse modale et ferraillage. Contreventement mixte (portiques + voiles) sur radier général.',
        category: 'study',
        location: 'Projet Académique',
        year: 2025,
        client: 'Université Privée de Fès',
        thumbnail: '/images/projects/CAPTURE_R_5/batiment-r5-thumb.png',
        images: [
            '/images/projects/CAPTURE_R_5/batiment-r5-thumb.png',
            '/images/projects/CAPTURE_R_5/CAPT%20POTEAU.png',
            '/images/projects/CAPTURE_R_5/Capture%20BLM.png',
            '/images/projects/CAPTURE_R_5/Capture%20d%27%C3%A9cran%202026-01-19%20234028.png',
            '/images/projects/CAPTURE_R_5/Capture%20d%27%C3%A9cran%202026-01-23%20225952.png',
            '/images/projects/CAPTURE_R_5/Capture%20d%27%C3%A9cran%202026-01-23%20230809.png',
            '/images/projects/CAPTURE_R_5/Capture%20d%27%C3%A9cran%202026-01-23%20235856.png',
            '/images/projects/CAPTURE_R_5/Capture%20d%27%C3%A9cran%202026-01-24%20222809.png',
            '/images/projects/CAPTURE_R_5/Capture%20d%27%C3%A9cran%202026-01-24%20223342.png',
            '/images/projects/CAPTURE_R_5/Capture%20ecran05.png',
            '/images/projects/CAPTURE_R_5/Capture%20fe.png',
            '/images/projects/CAPTURE_R_5/Capture%20MOMENTS.png',
            '/images/projects/CAPTURE_R_5/Capture%20poutre%20ferr.png',
            '/images/projects/CAPTURE_R_5/Capture%20%20VENT.png',
        ],
        model3D: '/models/batiment-r5.glb',
        videoDemo: '/videos/CAPTURE_R_5/batiment-r5-demo.mp4',
        skills: [
            'Modélisation 3D',
            'Descente de charges BAEL 91/99',
            'Analyse modale',
            'Ferraillage optimisé',
            'Contreventement mixte',
            'Radier général'
        ],
        software: ['Robot Structural Analysis', 'AutoCAD', 'Excel', 'REVIT'],
        content: `
## Description du projet

Étude structurelle complète d'un bâtiment R+5 avec sous-sol, illustrant la maîtrise du workflow complet depuis la conception jusqu'aux plans de ferraillage détaillés.

### Caractéristiques techniques

- **Structure** : Contreventement mixte (portiques + voiles)
- **Fondations** : Radier général
- **Normes** : BAEL 91 modifié 99
- **Analyse** : Modale et dynamique

### Missions réalisées

- Modélisation 3D complète de la structure
- Descente de charges selon BAEL 91 modifié 99
- Analyse modale pour vérification sismique
- Dimensionnement et ferraillage de tous les éléments
- Plans de ferraillage détaillés
- Vérification de la constructibilité

### Points clés

Un projet qui démontre une approche méthodique et rigoureuse, avec un regard critique sur la constructibilité et l'optimisation des solutions structurelles.

### Compétences développées

- Maîtrise avancée de Robot Structural Analysis
- Compréhension approfondie du BAEL 91/99
- Analyse et interprétation des résultats
- Optimisation du ferraillage
- Production de livrables professionnels
    `,
        featured: true,
        publishedAt: new Date('2025-01-15'),
    },
    {
        id: '2',
        slug: 'reservoir-eau-intelligent',
        title: 'Réservoir d\'Eau Intelligent pour Irrigation',
        description: 'Conception d\'un réservoir circulaire semi-enterré de 2 513 m³ (Ø20m, H8m). Étude complète avec analyse hydrostatique, vérification géotechnique et ferraillage optimisé BAEL 91/99.',
        category: 'infrastructure',
        location: 'Projet Académique',
        year: 2025,
        client: 'Université Privée de Fès',
        thumbnail: '/images/projects/CAPTURE_RESERVOIRS/reservoir-1.png',
        images: [
            '/images/projects/CAPTURE_RESERVOIRS/reservoir-1.png',
            '/images/projects/CAPTURE_RESERVOIRS/3D%20CHARGE%203.png',
            '/images/projects/CAPTURE_RESERVOIRS/11.png',
            '/images/projects/CAPTURE_RESERVOIRS/APPLI%20HYDRO%204.png',
            '/images/projects/CAPTURE_RESERVOIRS/avec%20epaisseur.png',
            '/images/projects/CAPTURE_RESERVOIRS/Capture%20d%27%C3%A9cran%202026-01-26%20233128.png',
            '/images/projects/CAPTURE_RESERVOIRS/Capture%20d%27%C3%A9cran%202026-01-27%20000643.png',
            '/images/projects/CAPTURE_RESERVOIRS/Capture%20d%27%C3%A9cran%202026-01-27%20170959.png',
            '/images/projects/CAPTURE_RESERVOIRS/Capture%20d%27%C3%A9cran%202026-01-27%20180734.png',
            '/images/projects/CAPTURE_RESERVOIRS/Capture%20d%27%C3%A9cran%202026-01-27%20190233.png',
            '/images/projects/CAPTURE_RESERVOIRS/Capture%20d%27%C3%A9cran%202026-01-27%20190744.png',
            '/images/projects/CAPTURE_RESERVOIRS/Capture%20d%27%C3%A9cran%202026-01-27%20190937.png',
            '/images/projects/CAPTURE_RESERVOIRS/Capture%20d%27%C3%A9cran%202026-01-27%20200916.png',
            '/images/projects/CAPTURE_RESERVOIRS/Contrainte%20els.png',
            '/images/projects/CAPTURE_RESERVOIRS/CONTRAINTE%20SOL.png',
            '/images/projects/CAPTURE_RESERVOIRS/effort%20de%20membre%20.png',
            '/images/projects/CAPTURE_RESERVOIRS/Effort%20de%20traction%20xx.png',
            '/images/projects/CAPTURE_RESERVOIRS/effort%20max%20voile.png',
            '/images/projects/CAPTURE_RESERVOIRS/effort%20membre%20dans%20ladirection%20des%20xx.png',
            '/images/projects/CAPTURE_RESERVOIRS/flexion%20simple.png',
            '/images/projects/CAPTURE_RESERVOIRS/Maillage.png',
            '/images/projects/CAPTURE_RESERVOIRS/PRESSION%20EN%20BAS%20HYDRO.png',
            '/images/projects/CAPTURE_RESERVOIRS/PRESSION%20HYDRO.png',
            '/images/projects/CAPTURE_RESERVOIRS/REPERE%20LOCAL.png',
            '/images/projects/CAPTURE_RESERVOIRS/YYDRO%20SUR%20RADIER%205.png',
        ],
        model3D: '/models/CAPTURE_RESERVOIRS/reservoir.glb',
        videoDemo: '/videos/CAPTURE_RESERVOIRS/reservoir-demo.mp4',
        surface: 314,
        skills: [
            'Conception hydraulique',
            'Analyse hydrostatique',
            'Vérification géotechnique',
            'Dimensionnement BAEL 91/99',
            'Ferraillage optimisé',
            'Gestion de l\'eau'
        ],
        software: ['Robot Structural Analysis', 'AutoCAD', 'Excel'],
        content: `
## Description du projet

Conception complète d'un réservoir d'eau intelligent destiné à l'irrigation agricole. Structure circulaire semi-enterrée optimisée pour la durabilité et la performance.

### Caractéristiques du réservoir

- **Capacité** : 2 513 m³
- **Diamètre** : 20 mètres
- **Hauteur** : 8 mètres
- **Type** : Circulaire semi-enterré
- **Usage** : Irrigation intelligente

### Études réalisées

#### 1. Modélisation 3D
- Modélisation complète de la structure
- Intégration des équipements hydrauliques

#### 2. Analyses structurelles
- Efforts hydrostatiques (poussée de l'eau)
- Vérification géotechnique (contrainte sol < 3 bars)
- Dimensionnement selon BAEL 91/99

#### 3. Ferraillage
- Radier : ferraillage optimisé bi-directionnel
- Voile circulaire : armatures circonférentielles et verticales
- Coupole : ferraillage en réseau

### Choix techniques

- **Ferraillage manuel optimisé** pour économie et durabilité
- **Structure monolithique** pour étanchéité maximale
- **Conception parasismique** adaptée

### Impact du projet

Projet alliant durabilité, maîtrise technique et réponse concrète aux enjeux de gestion de l'eau en contexte agricole.
    `,
        featured: true,
        publishedAt: new Date('2025-02-01'),
    },
    {
        id: '3',
        slug: 'trace-routier-autopiste-17',
        title: 'Tracé Routier Autopiste 17',
        description: 'Étude et conception du tracé routier sur Covadis Autopiste 17. Analyse topographique, calculs de terrassement et élaboration des plans d\'exécution.',
        category: 'road',
        location: 'Région Fès-Meknès, Maroc',
        year: 2025,
        client: 'ESMOR - Bureau d\'Études',
        thumbnail: '/images/projects/Tracer_Routier/Tracer%20Routier%201.jpeg',
        images: [
            '/images/projects/Tracer_Routier/Tracer%20Routier%201.jpeg',
            '/images/projects/Tracer_Routier/Tracer%20Routier%202.jpeg',
            '/images/projects/Tracer_Routier/Tracer%20Routier%203.jpeg',
            '/images/projects/Tracer_Routier/Tracer%20Routier%204.jpeg',
            '/images/projects/Tracer_Routier/Tracer%20Routier%205.jpeg',
            '/images/projects/Tracer_Routier/Tracer%20Routier%206.jpeg',
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