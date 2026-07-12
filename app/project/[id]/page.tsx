import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import projects from '@/data/projects';

type Props = {
    params: Promise<{ id: string }>;
};

export default function ProjectPage({ params }: Props) {
    const { id: idStr } = use(params);
    const id = Number(idStr);
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 bg-white">
                <div className="text-center border-4 border-black p-8 shadow-neo">
                    <h2 className="text-3xl font-black text-black mb-4">
                        Project Not Found
                    </h2>
                    <Link
                        href="/"
                        className="inline-flex items-center font-black text-[#2D5CFF] border-b-2 border-[#2D5CFF] hover:text-black hover:border-black transition-colors"
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
        <main className="bg-white min-h-screen py-10 sm:py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 font-black text-black border-b-2 border-black hover:text-[#2D5CFF] hover:border-[#2D5CFF] transition-colors mb-6"
                >
                    ← Back to Projects
                </Link>

                <div className="bg-white border-4 border-black shadow-neo-lg">
                    <div className="relative aspect-video border-b-4 border-black">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute bottom-0 left-0 p-6 md:p-8">
                            <h1 className="text-3xl md:text-5xl font-black text-white">
                                {project.title}
                            </h1>
                        </div>
                    </div>

                    <div className="p-6 md:p-10">
                        <div className="mb-8">
                            <h2 className="text-sm font-black uppercase tracking-wider text-black mb-3 border-b-2 border-black pb-1">
                                Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 border-2 border-black bg-[#2D5CFF] text-white text-sm font-black shadow-neo-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="max-w-none">
                            {paragraphs.length > 0 ? (
                                paragraphs.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-black/80 leading-8 text-base md:text-lg font-medium mb-4"
                                    >
                                        {paragraph}
                                    </p>
                                ))
                            ) : (
                                <p className="text-black/80 leading-8 text-base md:text-lg font-medium">
                                    {project.description}
                                </p>
                            )}
                        </div>

                        <div className="mt-10 pt-8 border-t-3 border-black flex flex-col sm:flex-row gap-3">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-[#2D5CFF] text-white font-black text-sm border-3 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                            >
                                Visit Project
                            </a>
                            <Link
                                href="/#projects"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-black text-sm border-3 border-black shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
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