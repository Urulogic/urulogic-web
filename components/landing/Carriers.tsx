export const Carriers = () => {
    const carriers = [
        { name: "UES", color: "bg-yellow-400" }, // Placeholder styles until we have real logos
        { name: "Distrilogic", color: "bg-red-500" },
        { name: "Correo Uruguayo", color: "bg-blue-600" },
        { name: "Soy Delivery", color: "bg-green-500" },
        { name: "DAC", color: "bg-blue-400" },
        { name: "Mirtrans", color: "bg-orange-500" },
        { name: "DePunta", color: "bg-blue-800" },
        { name: "PedidosYa", color: "bg-red-600" },
    ];

    return (
        <section id="carriers" className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Integra con los líderes del mercado
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Urulogic te conecta con la red logística mas amplia de Uruguay.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
                    {carriers.map((carrier) => (
                        <div key={carrier.name} className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                            {/* 
                 Ideally these are SVG logos. 
                 Using text placeholder for now with styling. 
              */}
                            <div className="text-center">
                                {/* This div mimics a logo visual roughly */}
                                <div className={`h-12 w-12 mx-auto rounded-full ${carrier.color} opacity-20 mb-2`}></div>
                                <span className="font-semibold text-gray-700">{carrier.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
