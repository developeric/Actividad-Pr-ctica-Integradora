import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Login() {
    const { register, handleSubmit } = useForm();

    return (
        <div className="min-h-screen w-full bg-[#132A46] flex flex-col items-center justify-center relative text-white font-sans">
            <div className="w-full px-10 items-center flex flex-col justify-center">
                <h1 className="text-4xl font-[Trebuchet_MS,sans-serif] font-bold text-center mb-10 tracking-tight">
                    Bienvenido de vuelta
                </h1>

                <form className="flex w-full max-w-md flex-col" onSubmit={handleSubmit(Login)}>
                    <div className="mb-6">
                        <label className="mb-2 block text-base font-bold" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ingresa tu correo electrónico"
                            autoComplete="email"
                            className="h-11 w-full rounded-md border border-white/30 bg-white px-4 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2084b6]"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="mb-2 block text-base font-bold" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                            autoComplete="current-password"
                            className="h-11 w-full rounded-md border border-white/30 bg-white px-4 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2084b6]"
                            {...register("password", { required: true })}
                        />
                    </div>

                    <div className="mb-9 flex justify-end">
                        <Link to="/forgot-password" className="text-sm hover:underline">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    <div className="flex justify-center mb-12">
                        <button
                            type="submit"
                            className="bg-[#1D7BB6] hover:bg-[#156091] text-white font-bold py-2 px-10 rounded-full text-lg transition-colors"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>

                <div className="text-center text-sm">
                    <span>¿No tienes una cuenta? </span>
                    <Link to="/register" className="text-[#3b82f6] hover:underline">
                        Créala aquí
                    </Link>
                </div>
            </div>
        </div>
    );
}