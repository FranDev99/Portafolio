import { ReactNode } from "react";

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    learning: string;
    liveDemo: string;
    repo: string;
}

export interface SocialLinkProps {
    href: string;
    icon: ReactNode;
    label: string;
    className?: string;
}