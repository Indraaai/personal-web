import Link from 'next/link';
import Image from 'next/image';
import projects from '@/data/projects';

type Props = {
    params: { id: string };
};

export default function ProjectPage({ params }: Props) {
    const id = Number(params.id);
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Project Not Found
                    </h2>

                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const paragraphs = project.description
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean);

    return (
        <main className="bg-slate-50 min-h-screen py-10 sm:py-16 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition"
                >
                    ← Back
                </Link>

                {/* Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">

                    {/* Hero Image */}
                    <div className="relative aspect-video">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-6 md:p-8">
                            <h1 className="text-3xl md:text-5xl font-bold text-white">
                                {project.title}
                            </h1>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10">

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                                Tech Stack
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="prose prose-slate max-w-none">
                            {paragraphs.length > 0 ? (
                                paragraphs.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-slate-600 leading-8 text-base md:text-lg"
                                    >
                                        {paragraph}
                                    </p>
                                ))
                            ) : (
                                <p className="text-slate-600 leading-8 text-base md:text-lg">
                                    {project.description}
                                </p>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-3">

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
                            >
                                Visit Project
                            </a>

                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition"
                            >
                                Back to Portfolio
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}