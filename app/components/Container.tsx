import { ElementType, ReactNode } from "react";

interface ContainerProps {
    className?: string;
    children: ReactNode;
    as?: ElementType;
    maxWidth?: "max-w-4xl" | "max-w-5xl" | "max-w-7xl";
}

export function Container({ className = "", children, as: Component = "div", maxWidth = "max-w-7xl" }: ContainerProps) {
    return (
        <Component className={`mx-auto w-full ${maxWidth} px-6 sm:px-10 lg:px-16 ${className}`}>
            {children}
        </Component>
    );
}
