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

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Free / Test Plan */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col hover:border-blue-200 transition-colors">
                        <h3 className="text-xl font-semibold text-gray-900">Developer / Test</h3>
                        <p className="mt-4 text-gray-500 text-sm">Ideal para integrar y probar nuestra API sin costo.</p>
                        <div className="my-8">
                            <span className="text-4xl font-extrabold text-gray-900">$0</span>
                            <span className="text-gray-500">/mes</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex text-sm text-gray-600">✓ Acceso completo a Sandbox</li>
                            <li className="flex text-sm text-gray-600">✓ Documentación completa</li>
                            <li className="flex text-sm text-gray-600">✓ Soporte vía email</li>
                        </ul>
                        <Link href="https://developers.urulogic.com" target="_blank">
                            <Button variant="outline" className="w-full">Documentación</Button>
                        </Link>
                    </div>

                    {/* Shopify App Plan */}
                    <div className="bg-white rounded-2xl shadow-xl border-2 border-primary p-8 flex flex-col relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 left-0 bg-primary h-2 rounded-t-xl"></div>
                        <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Popular
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Shopify Merchant</h3>
                        <p className="mt-4 text-gray-500 text-sm">Para tiendas que quieren automatizar su logística.</p>
                        <div className="my-8">
                            <span className="text-4xl font-extrabold text-gray-900">$29</span>
                            <span className="text-gray-500">/mes</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex text-sm text-gray-600">✓ Envíos ilimitados</li>
                            <li className="flex text-sm text-gray-600">✓ Tu propia cuenta de carrier</li>
                            <li className="flex text-sm text-gray-600">✓ Tracking automático</li>
                            <li className="flex text-sm text-gray-600">✓ Soporte prioritario</li>
                        </ul>
                        <Link href="/signup">
                            <Button className="w-full">Comenzar Prueba Gratis</Button>
                        </Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col hover:border-blue-200 transition-colors">
                        <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
                        <p className="mt-4 text-gray-500 text-sm">Para altos volúmenes y necesidades personalizadas.</p>
                        <div className="my-8">
                            <span className="text-4xl font-extrabold text-gray-900">Custom</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex text-sm text-gray-600">✓ SLA garantizado</li>
                            <li className="flex text-sm text-gray-600">✓ Integraciones a medida</li>
                            <li className="flex text-sm text-gray-600">✓ Account Manager dedicado</li>
                        </ul>
                        <Link href="#contact">
                            <Button variant="outline" className="w-full">Contactar Ventas</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
