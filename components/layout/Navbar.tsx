"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Logo />
                    <div className="hidden md:ml-10 md:flex md:space-x-8">
                        <Link href="#products" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                            Productos
                        </Link>
                        <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                            Precios
                        </Link>
                        <Link href="https://developers.urulogic.com" target="_blank" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                            Developers
                        </Link>
                        <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                            Contacto
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex md:items-center md:space-x-4">
                    <Link href="/login">
                        <Button variant="ghost" size="sm">
                            Iniciar Sesión
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button size="sm">
                            Registrarse
                        </Button>
                    </Link>
                </div>

                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isOpen ? (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-white border-b">
                        <Link href="#products" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
                            Productos
                        </Link>
                        <Link href="#pricing" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
                            Precios
                        </Link>
                        <Link href="https://developers.urulogic.com" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
                            Developers
                        </Link>
                        <Link href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
                            Contacto
                        </Link>
                        <div className="mt-4 flex flex-col space-y-2 px-3">
                            <Link href="/login" className="w-full">
                                <Button variant="outline" className="w-full justify-center">
                                    Iniciar Sesión
                                </Button>
                            </Link>
                            <Link href="/signup" className="w-full">
                                <Button className="w-full justify-center">
                                    Registrarse
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
