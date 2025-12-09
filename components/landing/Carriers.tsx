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

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
                    {carriers.map((carrier) => (
                        <div key={carrier.name} className="col-span-1 flex flex-col justify-center items-center py-8 px-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                            <div className={`h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold text-gray-500 bg-gray-50 mb-3`}>
                                {carrier.name.substring(0, 2).toUpperCase()}
                            </div>
                            <span className="font-semibold text-gray-700">{carrier.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
