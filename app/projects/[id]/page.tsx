import Link from 'next/link';
import Image from 'next/image';
import projects from '@/data/projects';

type Props = {
    params: { id: string };
};

export default function ProjectPage({ params }: Props) {
    const id = Number(params.id);
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                    <Link href="/" className="text-blue-600 underline">Back to home</Link>
                </div>
            </div>
        );
    }

    const paragraphs = project.description.split(/\n\n+/).map(p => p.trim()).filter(Boolean);

    return (
        <main className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="relative w-full sm:w-1/3 h-44 rounded overflow-hidden">
                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-3">{project.title}</h1>
                        <div className="flex gap-3 mb-4">
                            {project.tech.map(t => (
                                <span key={t} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">{t}</span>
                            ))}
                        </div>

                        <div className="prose max-w-none text-slate-700">
                            {paragraphs.length > 0 ? (
                                paragraphs.map((p, i) => <p key={i}>{p}</p>)
                            ) : (
                                <p>{project.description}</p>
                            )}
                        </div>

                        <div className="mt-6 flex gap-3">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">Visit Project</a>
                            <Link href="/" className="inline-flex items-center px-4 py-2 border rounded-lg">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
