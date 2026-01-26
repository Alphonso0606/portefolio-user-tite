export interface Skill {
    name: string;
    category: 'cao' | 'calcul' | 'render' | 'office' | 'technical';
    level: number; // 1-5
    icon?: string;
}

export const skills: Skill[] = [
    // Logiciels CAO/DAO
    { name: "AutoCAD", category: "cao", level: 5 },
    { name: "REVIT", category: "cao", level: 5 },
    { name: "ARCHICAD", category: "cao", level: 4 },

    // Calcul de structures
    { name: "Robot Structural Analysis", category: "calcul", level: 4 },
    { name: "RDM6", category: "calcul", level: 4 },

    // Rendu et visualisation
    { name: "Lumion", category: "render", level: 4 },
    { name: "Twinmotion", category: "render", level: 4 },

    // Suite Office
    { name: "Microsoft Word", category: "office", level: 5 },
    { name: "Microsoft Excel", category: "office", level: 5 },
    { name: "Microsoft PowerPoint", category: "office", level: 5 },
];

export const technicalSkills = [
    "Lecture et interprétation de plans",
    "Calcul de structures",
    "Établissement de devis",
    "Suivi et contrôle de travaux",
    "Coordination de chantier",
    "Tracé routier (Covadis Autopiste 17)",
    "Modélisation BIM",
    "Supervision des corps de métiers"
];

export const skillCategories = {
    cao: "Conception Assistée par Ordinateur",
    calcul: "Calcul de Structures",
    render: "Rendu 3D et Visualisation",
    office: "Suite Bureautique",
    technical: "Compétences Techniques"
};