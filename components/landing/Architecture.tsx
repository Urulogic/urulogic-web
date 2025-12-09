export const Architecture = () => {
    return (
        <section id="how-it-works" className="py-24 bg-gray-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Arquitectura</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        El Hub Logístico de Uruguay
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Centralizamos la complejidad para que tú te enfoques en vender.
                    </p>
                </div>

                {/* Architecture Visualization */}
                <div className="relative mt-12 lg:mt-20">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">

                        {/* Inputs (Left) */}
                        <div className="flex flex-col gap-4 w-full lg:w-1/4">
                            {["Shopify", "Mercado Libre", "Tu Propio Sistema"].map((platform) => (
                                <div key={platform} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center font-semibold text-gray-700 relative group hover:border-primary hover:text-primary transition-colors">
                                    {platform}
                                    {/* Connector Line (Mobile: Down, Desktop: Right) */}
                                    <div className="hidden lg:block absolute right-[-2rem] top-1/2 w-[2rem] h-[2px] bg-gray-200 group-hover:bg-primary transition-colors"></div>
                                    <div className="lg:hidden absolute bottom-[-1rem] left-1/2 h-[1rem] w-[2px] bg-gray-200 group-hover:bg-primary transition-colors"></div>
                                </div>
                            ))}
                        </div>

                        {/* Core (Center) */}
                        <div className="w-full lg:w-1/3 relative z-10">
                            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary/20 text-center relative overflow-hidden group hover:border-primary transition-colors">
                                <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                                <div className="relative z-10">
                                    <div className="mx-auto h-16 w-16 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg ring-4 ring-blue-50">
                                        {/* Simplified Logo Icon */}
                                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Urulogic Core</h3>
                                    <p className="mt-2 text-sm text-gray-600 font-medium">
                                        Normalización de datos <br />
                                        Selección de carrier <br />
                                        Generación de etiquetas
                                    </p>
                                </div>
                            </div>
                            {/* Connectors from Core to Outputs */}
                            <div className="hidden lg:block absolute right-[-2rem] top-1/2 w-[2rem] h-[2px] bg-gray-200"></div>
                        </div>

                        {/* Outputs (Right) */}
                        <div className="flex flex-col gap-3 w-full lg:w-1/4">
                            {["UES", "Distrilogic", "Correo Uruguayo", "Soy Delivery", "Otros"].map((carrier, index) => (
                                <div key={carrier} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center text-sm font-medium text-gray-600 relative hover:bg-gray-50 transition-colors">
                                    {/* Connector Line (Desktop Only - Left side of box) */}
                                    <div className="hidden lg:block absolute left-[-2rem] top-1/2 w-[2rem] h-[2px] bg-gray-200 transform -translate-y-1/2"></div>
                                    {carrier}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
