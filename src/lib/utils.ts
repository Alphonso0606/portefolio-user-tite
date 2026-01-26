import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fonction utilitaire pour merger les classes Tailwind
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Formater une date
 */
export function formatDate(date: string | Date, locale: string = 'fr-FR'): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Formater une période (pour expériences)
 */
export function formatPeriod(startDate: string, endDate: string): string {
    const start = new Date(startDate);
    const end = endDate === 'present' ? new Date() : new Date(endDate);

    const months = (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());

    if (months < 1) return "Moins d'un mois";
    if (months === 1) return "1 mois";
    if (months < 12) return `${months} mois`;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (remainingMonths === 0) {
        return years === 1 ? "1 an" : `${years} ans`;
    }

    return `${years} an${years > 1 ? 's' : ''} et ${remainingMonths} mois`;
}

/**
 * Générer un slug depuis un titre
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

/**
 * Tronquer un texte
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

/**
 * Valider un email
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Formater un numéro de téléphone
 */
export function formatPhone(phone: string): string {
    return phone.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2-$3-$4');
}

/**
 * Détecter si on est sur mobile
 */
export function isMobile(): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
}

/**
 * Scroller vers un élément
 */
export function scrollToElement(elementId: string, offset: number = 80) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

/**
 * Débounce function
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}