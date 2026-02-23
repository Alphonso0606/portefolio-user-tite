// ============================================
// TYPES GLOBAUX DU PORTFOLIO
// ============================================

export interface Personal {
    name: string;
    title: string;
    currentYear: string;
    university: string;
    location: {
        address: string;
        city: string;
        country: string;
        full: string;
    };
    contact: {
        email: string;
        phone: {
            morocco: string;
            ivoryCoast: string;
        };
        linkedin: string;
    };
    bio: string;
    interests: string[];
    languages: Language[];
    qualities: string[];
}

export interface Language {
    name: string;
    level: string;
}

export interface Skill {
    name: string;
    category: 'cao' | 'calcul' | 'render' | 'office' | 'technical';
    level: number; // 1-5
    icon?: string;
}

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

export interface Education {
    degree: string;
    institution: string;
    year: string;
    current?: boolean;
    level?: string;
}

export interface Association {
    role: string;
    organization: string;
    period: string;
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    category: 'building' | 'bridge' | 'road' | 'infrastructure' | 'study';
    location: string;
    year: number;
    client?: string;

    // Médias
    thumbnail: string;
    images: string[];
    model3D?: string;

    // Détails techniques
    surface?: number;
    budget?: number;
    duration?: number;
    team?: number;

    // Compétences
    skills: string[];
    software: string[];

    // Contenu
    content?: string;
    videoDemo?: string;

    // Metadata
    featured: boolean;
    publishedAt: Date;
    updatedAt?: Date;
}

export type ProjectCategory = Project['category'];

export interface ProjectFilters {
    category?: ProjectCategory;
    year?: number;
    featured?: boolean;
}

export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}