import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Logo } from "@/components/ui/Logo";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <Logo />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Inicia sesión en tu cuenta
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    O{" "}
                    <Link href="/signup" className="font-medium text-primary hover:text-blue-500">
                        crea una cuenta nueva gratis
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
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
                            autoComplete="current-password"
                            required
                            label="Contraseña"
                            placeholder="••••••••"
                        />

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Recordarme
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary hover:text-blue-500">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button type="submit" className="w-full">
                                Iniciar Sesión
                            </Button>
                        </div>
                    </form>

                    {/* Divider if we wanted social logins later */}
                </div>
            </div>
        </div>
    );
}
