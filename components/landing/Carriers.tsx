import Image from "next/image";

export const Carriers = () => {
    const carriers = [
        { name: "UES", src: "/carriers/ues.svg" },
        { name: "Distrilogic", src: "/carriers/distrilogic.svg", widthClass: "w-48" },
        { name: "Correo Uruguayo", src: "/carriers/correo.svg" },
        { name: "Soy Delivery", src: "/carriers/soydelivery.svg", widthClass: "w-48" },
        { name: "DAC", src: "/carriers/dac.png" },
        { name: "Mirtrans", src: "/carriers/mirtrans.svg", widthClass: "w-48" },
        { name: "DePunta", src: "/carriers/depunta.svg" },
        { name: "PedidosYa", src: "/carriers/pedidosya.svg" },
    ];

    return (
        <section id="carriers" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Integraciones Nativas</p>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Conectados con los líderes logísticos de Uruguay
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 items-center">
                    {carriers.map((carrier) => (
                        <div key={carrier.name} className="flex justify-center group h-20 items-center">
                            {/* 
                             LOGO Implementation
                             Grayscale by default, color on hover.
                            */}
                            <div className={`relative h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 cursor-default flex items-center justify-center ${carrier.widthClass || 'w-32'}`}>
                                <Image
                                    src={carrier.src}
                                    alt={`Logo ${carrier.name}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
