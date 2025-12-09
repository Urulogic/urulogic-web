import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Left Column: Copywriting */}
                    <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
                        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl mb-6 leading-tight">
                            Automatizá tus envíos en <span className="text-secondary">Uruguay</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 mb-8 font-light leading-relaxed">
                            Olvidate de cargar datos manuales en UES o Correo Uruguayo. <br className="hidden lg:block" />
                            Generá etiquetas oficiales en segundos y notificá a tus clientes automáticamente.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
                            <Link href="/signup">
                                <Button variant="secondary" size="lg" className="w-full sm:w-auto px-8 text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                    Comenzar Gratis
                                </Button>
                            </Link>
                            <Link href="#how-it-works">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 text-lg hover:bg-gray-50">
                                    Ver Demo
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Setup en 5 minutos
                            </span>
                            <span className="flex items-center gap-1.5">
                                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Sin tarjeta de crédito
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Product Screenshot Placeholder */}
                    <div className="lg:col-span-6 relative">
                        {/* Decorative background blob for depth */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-orange-50 rounded-full blur-3xl opacity-60 -z-10"></div>

                        <div className="relative rounded-2xl bg-gray-100 border border-gray-200 shadow-2xl skew-y-0 lg:-skew-y-1 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
                            {/* Browser Header details */}
                            <div className="h-8 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400 opacity-60"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-60"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400 opacity-60"></div>
                                <div className="ml-4 h-4 w-60 bg-gray-100 rounded-full text-[10px] flex items-center px-2 text-gray-400">urulogic.com/dashboard</div>
                            </div>

                            {/* Placeholder Content Area */}
                            <div className="aspect-[16/10] bg-white flex flex-col items-center justify-center text-gray-400 p-8">
                                <div className="w-16 h-16 mb-4 rounded-xl bg-blue-50 text-blue-200 flex items-center justify-center">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 0 012.828 0L16 16m-2-2l1.586-1.586a2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="font-medium">Product Dashboard</p>
                                <p className="text-sm mt-2 opacity-60 text-center max-w-xs">
                                    Place screenshot here illustrating the dashboard showing shipments and labels.
                                </p>

                                {/* Mock UI Elements */}
                                <div className="w-full max-w-sm mt-8 space-y-3 opacity-30">
                                    <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto"></div>
                                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                                    <div className="h-4 bg-gray-100 rounded w-5/6 mx-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
