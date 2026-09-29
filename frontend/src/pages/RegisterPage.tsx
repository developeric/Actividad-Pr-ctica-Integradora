// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
    // const { register, handleSubmit } = useForm();





    return (
        <div className="min-h-screen w-full bg-[#132A46] flex flex-col items-center justify-center relative text-white font-sans py-10">
            <div className="w-full px-10 flex flex-col items-center">
                <h1 className="text-4xl font-[Trebuchet_MS,sans-serif] font-bold text-center mb-2 mt-10">
                    Registro de socio
                </h1>
                <p className="text-center text-sm font-medium mb-5">
                    Registrate de manera gratuita aquí abajo.
                </p>

                <form
                    className="flex flex-col items-center w-full max-w-4xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-x-16 gap-y-2 w-full justify-items-center">
                        {/* Columna Izquierda */}
                        <div className="w-full flex flex-col items-end md:items-start max-w-[320px]">
                            <div className="w-full my-3">
                                <label className="block text-lg font-bold mb-1" htmlFor="email">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="ejemplo@correo.com"
                                    className="w-full h-11 rounded-md border border-white/30 px-4 pr-10 text-base text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#2084b6]"
                                // {...register("email", { required: true })}
                                />
                            </div>
                        </div>

                        {/* Columna Derecha */}
                        <div className="w-full flex flex-col items-start max-w-[320px]">
                            <div className="w-full my-3">
                                <label
                                    className="block text-lg font-bold mb-1"
                                    htmlFor="password"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Ingresá una contraseña"
                                    className="w-full h-11 rounded-md border border-white/30 px-4 pr-10 text-base text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#2084b6]"
                                // {...register("password", { required: true })}
                                />
                            </div>

                        </div>
                    </div>


                    <div className="flex justify-center mb-8 mt-20">
                        <button
                            type="submit"
                            className="bg-[#1D7BB6] hover:bg-[#156091] text-white font-bold py-2 px-10 rounded-full text-lg transition-colors"
                        >
                            Registrarse
                        </button>
                    </div>

                    <div className="text-center text-sm pb-10">
                        <span>¿Ya tienes una cuenta? </span>
                        <Link to="/login" className="text-[#3b82f6] hover:underline">
                            Inicia sesión aquí
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}