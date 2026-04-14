import { ElementType, ReactNode } from "react";

interface ContainerProps {
    className?: string;
    children: ReactNode;
    as?: ElementType;
    maxWidth?: "max-w-sm" | "max-w-md" | "max-w-lg" | "max-w-xl" | "max-w-2xl" | "max-w-3xl" | "max-w-4xl" | "max-w-5xl" | "max-w-6xl" | "max-w-7xl";
}

export function Container({ className = "", children, as: Component = "div", maxWidth = "max-w-7xl" }: ContainerProps) {
    return (
        <Component className={`mx-auto w-full ${maxWidth} px-5 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </Component>
    );
}
