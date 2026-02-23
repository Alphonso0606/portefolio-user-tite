import { getProjectBySlug } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectContent from './ProjectContent';

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectContent project={project} />;
}