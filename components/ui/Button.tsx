import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    isLoading?: boolean;
}

export const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    isLoading = false,
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-blue-800 focus:ring-primary",
        secondary: "bg-accent text-white hover:bg-yellow-500 focus:ring-accent",
        outline: "border border-input bg-background hover:bg-gray-100 focus:ring-gray-300",
        ghost: "hover:bg-gray-100 focus:ring-gray-300 text-secondary",
    };

    const sizes = {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-8 py-2",
        lg: "h-14 px-8 text-lg",
    };

    const loadingFn = isLoading ? "opacity-70 pointer-events-none" : "";

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${loadingFn} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? (
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : null}
            {children}
        </button>
    );
};
