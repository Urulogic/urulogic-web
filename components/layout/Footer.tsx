import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Logo />
                        <p className="text-sm text-gray-500 max-w-xs">
                            Facilitando la logística para el comercio electrónico en Uruguay. Conectamos tu tienda con los mejores proveedores.
                        </p>
                        <div className="flex space-x-6">
                            {/* Social icons/links would go here */}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Producto</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="#shopify-app" className="text-base text-gray-500 hover:text-primary transition-colors">
                                            Shopify App
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#api" className="text-base text-gray-500 hover:text-primary transition-colors">
                                            Urulogic API
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#pricing" className="text-base text-gray-500 hover:text-primary transition-colors">
                                            Precios
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Recursos</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="https://developers.urulogic.com" className="text-base text-gray-500 hover:text-primary transition-colors">
                                            Documentación API
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-base text-gray-500 hover:text-primary transition-colors">
                                            Guías de Integración
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-base text-gray-500 hover:text-primary transition-colors">
                                            Estado del Sistema
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Compañía</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="#about" className="text-base text-gray-500 hover:text-primary transition-colors">
                                            Sobre Nosotros
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#contact" className="text-base text-gray-500 hover:text-primary transition-colors">
                                            Contacto
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-base text-gray-500 hover:text-primary transition-colors">
                                            Términos de Servicio
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">
                        &copy; {new Date().getFullYear()} Urulogic. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};
