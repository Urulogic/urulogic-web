import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-20 pb-28 lg:pt-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-7xl mb-8 leading-tight">
                        Logística Inteligente <br className="hidden sm:block" />
                        para <span className="text-secondary">E-commerce</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        Conecta tu tienda <strong>Shopify</strong> con los principales proveedores logísticos de Uruguay.
                        <br className="hidden md:block" />
                        Automatización real, sin costos fijos.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/signup">
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto px-10 text-lg font-bold">
                                Comenzar Gratis
                            </Button>
                        </Link>
                        <Link href="#pricing">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 text-lg">
                                Ver Tarifas
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-16 border-t border-gray-100 pt-10 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-gray-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent"></span> Sin costos fijos
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary"></span> Setup instantáneo
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent"></span> Soporte Local
                        </span>
                    </div>
                </div>
            </div>

            {/* Professional Background Detail */}
            <div className="absolute top-0 right-0 -z-10 opacity-10">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0038A8" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,89.1,-6.5C88.1,7.4,83.4,20.8,74.9,32.2C66.4,43.6,54.1,53,41.4,60.6C28.7,68.2,15.6,73.9,1.9,70.6C-11.8,67.3,-26.1,55,-38.7,46.1C-51.3,37.2,-62.2,31.7,-69.6,22.8C-77,13.9,-80.9,1.6,-78.9,-9.9C-76.9,-21.4,-69,-32.1,-59.2,-41.3C-49.4,-50.5,-37.7,-58.2,-25.6,-64.5C-13.5,-70.8,-1,-75.7,12.2,-78.2C25.4,-80.7,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 -z-10 opacity-5">
                <svg width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F5B445" d="M41.7,-67.3C52.6,-60.6,59.3,-46.9,64.8,-33.5C70.3,-20.1,74.6,-6.9,73.2,5.7C71.8,18.3,64.7,30.3,55.9,40.4C47.1,50.5,36.6,58.7,24.8,63.4C13,68.1,-0.1,69.3,-12.3,66.6C-24.5,63.9,-35.8,57.3,-45.5,48.4C-55.2,39.5,-63.3,28.3,-66.9,15.6C-70.5,2.9,-69.6,-11.3,-64.6,-24.1C-59.6,-36.9,-50.5,-48.3,-39.1,-54.8C-27.7,-61.3,-13.9,-62.9,0.5,-63.7C14.9,-64.6,29.8,-64.7,41.7,-67.3Z" transform="translate(100 100)" />
                </svg>
            </div>
        </section>
    );
};
