import { useMemo, useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const isDisabled = useMemo(() => {
    return !acceptTerms || Object.values(form).some((value) => value.trim() === "");
  }, [acceptTerms, form]);

  const completion = useMemo(() => {
    const filled = Object.values(form).filter((value) => value.trim() !== "").length + (acceptTerms ? 1 : 0);
    return Math.round((filled / 4) * 100);
  }, [acceptTerms, form]);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
        <div className="bg-white p-8">
          <p className="text-sm uppercase tracking-widest text-blue-500 font-semibold">Crea tu cuenta</p>
          <h1 className="text-3xl font-bold mt-3">Registrarse</h1>
          <p className="text-gray-600 mt-2 text-sm">
            Completa la informacion y accede a diagnosticos ilimitados.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input
                className="mt-1 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                className="mt-1 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={form.email}
                onChange={handleChange("email")}
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Contrasena</label>
              <input
                type="password"
                className="mt-1 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={form.password}
                onChange={handleChange("password")}
                placeholder="********"
              />
            </div>
            <label className="flex items-center gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={acceptTerms}
                onChange={(event) => setAcceptTerms(event.target.checked)}
              />
              Acepto los terminos y condiciones.
            </label>

            <button
              type="button"
              disabled={isDisabled}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold disabled:bg-gray-200 disabled:text-gray-500"
            >
              Registrarme
            </button>
          </form>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
          <p className="text-sm uppercase tracking-widest">Avance del perfil</p>
          <div className="mt-4 h-2 w-full bg-blue-300/30 rounded-full">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${completion}%` }}
            ></div>
          </div>
          <p className="mt-3 text-lg font-semibold">{completion}% completo</p>
          <p className="mt-2 text-sm text-blue-100">
            Completar tus datos permite recibir recomendaciones de proveedores basados en tu tipo de negocio.
          </p>
        </div>
      </div>
    </div>
  );
}
