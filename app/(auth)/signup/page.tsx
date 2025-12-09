import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Logo } from "@/components/ui/Logo";

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Empieza gratis con Urulogic
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    ¿Ya tienes cuenta?{" "}
                    <Link href="/login" className="font-medium text-primary hover:text-blue-500">
                        Inicia sesión aquí
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                id="first-name"
                                name="first-name"
                                type="text"
                                required
                                label="Nombre"
                                placeholder="Juan"
                            />
                            <Input
                                id="last-name"
                                name="last-name"
                                type="text"
                                required
                                label="Apellido"
                                placeholder="Pérez"
                            />
                        </div>

                        <Input
                            id="company"
                            name="company"
                            type="text"
                            required
                            label="Empresa / Tienda"
                            placeholder="Mi Tienda SRL"
                        />

                        <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            label="Email"
                            placeholder="tu@email.com"
                        />

                        <Input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            label="Contraseña"
                            placeholder="••••••••"
                        />

                        <div>
                            <Button type="submit" className="w-full">
                                Crear Cuenta
                            </Button>
                        </div>

                        <p className="text-xs text-center text-gray-500 mt-4">
                            Al registrarte aceptas nuestros <a href="#" className="underline">Términos de Servicio</a> y <a href="#" className="underline">Política de Privacidad</a>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
