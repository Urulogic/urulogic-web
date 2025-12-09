import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Features = () => {
    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-accent tracking-wide uppercase">Nuestros Productos</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Dos formas de potenciar tu logística
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Integraciones listas para usar o una API potente para desarrollos a medida.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Shopify App Card */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 group">
                        <div className="p-8 sm:p-10">
                            <div className="h-14 w-14 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">Urulogic Shopify App</h3>
                            <p className="mt-4 text-lg text-gray-500">
                                La solución plug-and-play para tiendas Shopify. Instala nuestra app y conecta automáticamente con los carriers sin escribir una sola línea de código.
                            </p>
                            <ul className="mt-8 space-y-4">
                                {[
                                    "Generación automática de etiquetas",
                                    "Cálculo de tarifas en tiempo real",
                                    "Tracking integrado en Shopify",
                                    "Soporte multi-carrier"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <Link href="#">
                                    <Button className="w-full">
                                        Instalar en Shopify
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* API Card */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 group">
                        <div className="p-8 sm:p-10">
                            <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">Urulogic API</h3>
                            <p className="mt-4 text-lg text-gray-500">
                                Una API unificada para todos los servicios de logística de Uruguay. Integra envíos en tu propio software, ERP o plataforma custom.
                            </p>
                            <ul className="mt-8 space-y-4">
                                {[
                                    "RESTful API estándar",
                                    "Documentación completa Swagger/OpenAPI",
                                    "Entorno de Sandbox gratuito",
                                    "SLA del 99.9%"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <Link href="https://developers.urulogic.com" target="_blank">
                                    <Button variant="outline" className="w-full">
                                        Ver Documentación
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
