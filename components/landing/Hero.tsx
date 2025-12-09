import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-32 lg:pt-24 lg:pb-40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl mb-6">
                        Logística Inteligente <br className="hidden sm:block" />
                        para <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">E-commerce en Uruguay</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        La plataforma definitiva para conectar tu tienda <strong>Shopify</strong> con los principales proveedores logísticos del país.
                        Automatiza envíos, genera etiquetas y ofrece tracking en tiempo real.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/signup">
                            <Button size="lg" className="shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 w-full sm:w-auto">
                                Comenzar Gratis
                            </Button>
                        </Link>
                        <Link href="#how-it-works">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Ver Cómo Funciona
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 flex justify-center items-center space-x-6 text-sm text-gray-400">
                        <span>✓ Sin tarjetas de crédito</span>
                        <span>✓ Plan gratuito disponible</span>
                        <span>✓ Setup en 5 minutos</span>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none opacity-40 overflow-hidden">
                <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] opacity-70 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-yellow-50 rounded-full blur-[100px] opacity-80"></div>
            </div>
        </section>
    );
};
