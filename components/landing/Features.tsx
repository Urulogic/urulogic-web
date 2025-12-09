import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Features = () => {
    return (
        <section id="products" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0038A8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-accent tracking-wide uppercase">Nuestros Productos</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Dos formas de potenciar tu logística
                    </p>
                </div>

                {/* FEATURE CARDS */}
                <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-24 items-start">

                    {/* Shopify App Card (Featured - Larger width) */}
                    <div className="md:col-span-7 bg-white rounded-2xl shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
                        <div className="absolute top-0 right-0 bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                            Más Popular
                        </div>
                        <div className="p-8 sm:p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-14 w-14 bg-green-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Urulogic Shopify App</h3>
                            </div>

                            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                La solución <strong>plug-and-play</strong> definitiva. Instala nuestra app oficial y conecta automáticamente con los carriers. <br />
                                <span className="font-medium text-primary block mt-2">Zero código requerido.</span>
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                {[
                                    "Generación automática de etiquetas",
                                    "Cálculo de tarifas en tiempo real",
                                    "Tracking integrado en Shopify",
                                    "Soporte multi-carrier instantáneo"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start text-sm text-gray-600 list-none">
                                        <svg className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Link href="#">
                                    <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
                                        Instalar en Shopify
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* API Card (Smaller width) */}
                    <div className="md:col-span-5 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 group mt-4 md:mt-0 opacity-90 hover:opacity-100">
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Urulogic API</h3>
                            </div>
                            <p className="mt-4 text-base text-gray-500">
                                Para desarrollos a medida. Integra la logística uruguaya en tu propio ERP, CRM o sistema custom.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    "RESTful API estándar",
                                    "Documentación OpenAPI",
                                    "Sandbox gratuito",
                                ].map((feature) => (
                                    <li key={feature} className="flex items-center text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <Link href="https://developers.urulogic.com" target="_blank">
                                    <Button variant="outline" className="w-full">
                                        Ver Documentación
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COMPARISON TABLE - CRO ADDITION */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-gray-900">¿Por qué automatizar?</h3>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-2 text-center border-b border-gray-100">
                            <div className="py-4 px-6 bg-red-50/50 text-red-800 font-bold text-sm uppercase tracking-wide">Manual (Sin Urulogic)</div>
                            <div className="py-4 px-6 bg-blue-50/50 text-primary font-bold text-sm uppercase tracking-wide">Automático (Con Urulogic)</div>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { bad: "Carga manual de datos (Error humano)", good: "Sincronización automática de datos" },
                                { bad: "Crear etiquetas una por una", good: "Impresión masiva de etiquetas" },
                                { bad: "Copiar/Pegar tracking al cliente", good: "Actualización de tracking en tiempo real" },
                                { bad: "Horas perdidas en gestión", good: "Segundos por envío" }
                            ].map((row, idx) => (
                                <div key={idx} className="grid grid-cols-2 text-sm sm:text-base">
                                    <div className="py-4 px-6 text-gray-500 flex items-center justify-center gap-2 border-r border-gray-50">
                                        <span className="text-red-400 font-bold">✕</span> {row.bad}
                                    </div>
                                    <div className="py-4 px-6 text-gray-800 font-medium flex items-center justify-center gap-2 bg-blue-50/10">
                                        <span className="text-green-500 font-bold">✓</span> {row.good}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
