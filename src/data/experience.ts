export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    tasks: string[];
    projects?: string[];
}

export const experiences: Experience[] = [
    {
        id: "1",
        role: "Stagiaire Technicien - Bureau d'Études",
        company: "ESMOR",
        location: "Fès, Maroc",
        startDate: "2025-06-10",
        endDate: "2025-08-29",
        description: "Stage de 2 mois au sein du bureau d'études ESMOR, spécialisé en ingénierie routière et génie civil.",
        tasks: [
            "Tracé routier sur Covadis Autopiste 17",
            "Étude et conception de projets routiers",
            "Analyse topographique et terrassement",
            "Calculs techniques et dimensionnement",
            "Élaboration de plans d'exécution"
        ],
        projects: ["Projet Autopiste 17 - Tracé routier"]
    },
    {
        id: "2",
        role: "Technicien Génie Civil (Stage)",
        company: "NAGIRE SARL",
        location: "Fès, Maroc",
        startDate: "2024-02",
        endDate: "2024-07",
        description: "Stage de 5 mois axé sur le suivi et le contrôle des travaux de construction.",
        tasks: [
            "Suivi et contrôle des travaux de construction",
            "Coordination des tâches sur le chantier",
            "Supervision des différents corps de métiers",
            "Respect des délais et normes de qualité",
            "Gestion de la sécurité sur chantier"
        ],
        projects: ["Construction d'une villa duplex de haut standing"]
    }
];

export const education = [
    {
        degree: "Cycle Ingénieur en Génie Civil",
        institution: "Université Privée de Fès - (UPF)",
        year: "2024 - 2026 (En cours)",
        current: true,
        level: "4ème année (2ème année cycle ingénieur)"
    },
    {
        degree: "BTS Génie Civil option Bâtiment",
        institution: "ISTM, Plateau Abidjan, Côte d'Ivoire",
        year: "2022 - 2023"
    },
    {
        degree: "Baccalauréat Série D",
        institution: "Lycée Moderne de Guitry, Côte d'Ivoire",
        year: "2020 - 2021"
    },
    {
        degree: "BEPC",
        institution: "Lycée Moderne de Guitry, Côte d'Ivoire",
        year: "2017 - 2018"
    }
];

export const associations = [
    {
        role: "Président du Conseil Général",
        organization: "Collectif des Étudiants Internationaux (CEI)",
        period: "2024 - Présent"
    },
    {
        role: "Vice-Président",
        organization: "Club d'Intégration - Bureau des Étudiants (BDE)",
        period: "2024"
    }
];


console.log("Configuration générée avec succès !");
console.log("Suivez les instructions dans les commentaires pour compléter l'installation.");