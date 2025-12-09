import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Planes simples y transparentes
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Comienza gratis y escala a medida que crecen tus envíos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Sandbox Plan */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col hover:border-gray-300 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900">Sandbox / Desarrollo</h3>
                        <p className="mt-4 text-gray-500">Todo lo que necesitas para integrar y testear.</p>
                        <div className="my-8">
                            <span className="text-4xl font-extrabold text-gray-900">$0</span>
                            <span className="text-gray-500 font-medium"> /mes</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex text-sm text-gray-600">✓ Ambiente de pruebas ilimitado</li>
                            <li className="flex text-sm text-gray-600">✓ Acceso completo a la API</li>
                            <li className="flex text-sm text-gray-600">✓ Documentación técnica</li>
                            <li className="flex text-sm text-gray-600">✓ Etiquetas de prueba</li>
                        </ul>
                        <Link href="https://developers.urulogic.com" target="_blank">
                            <Button variant="outline" className="w-full">
                                Ver Documentación
                            </Button>
                        </Link>
                    </div>

                    {/* Production Plan */}
                    <div className="bg-white rounded-2xl shadow-xl border-2 border-primary p-8 flex flex-col relative">
                        <div className="absolute top-0 right-0 left-0 bg-primary h-2 rounded-t-xl"></div>
                        <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            Recomendado
                        </div>
                        <h3 className="text-xl font-bold text-primary">Producción</h3>
                        <p className="mt-4 text-gray-500">Paga solo por lo que usas. Sin costos ocultos.</p>
                        <div className="my-8">
                            <span className="text-4xl font-extrabold text-gray-900">Uso</span>
                            <span className="text-gray-500 font-medium"> / por etiqueta</span>
                            <p className="text-xs text-orange-600 mt-2 font-medium bg-orange-50 inline-block px-2 py-1 rounded">
                                Pequeña comisión por envío generado
                            </p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex text-sm text-gray-600">
                                <span className="text-primary mr-2">✓</span> Sin costos mensuales fijos
                            </li>
                            <li className="flex text-sm text-gray-600">
                                <span className="text-primary mr-2">✓</span> Etiquetas productivas oficiales
                            </li>
                            <li className="flex text-sm text-gray-600">
                                <span className="text-primary mr-2">✓</span> Tracking en tiempo real
                            </li>
                            <li className="flex text-sm text-gray-600">
                                <span className="text-primary mr-2">✓</span> Soporte prioritario por email
                            </li>
                        </ul>
                        <Link href="/signup">
                            <Button variant="primary" className="w-full">
                                Comenzar Ahora
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
