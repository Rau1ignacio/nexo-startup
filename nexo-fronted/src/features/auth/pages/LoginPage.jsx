import { useMemo, useState } from "react";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const isDisabled = useMemo(
    () => credentials.email.trim() === "" || credentials.password.trim() === "",
    [credentials]
  );

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setCredentials((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center">Iniciar sesion</h1>
        <p className="text-center text-gray-600 mt-2">
          Accede para seguir tus roadmaps y oportunidades.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              value={credentials.email}
              onChange={handleChange("email")}
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Contrasena</label>
            <input
              type="password"
              value={credentials.password}
              onChange={handleChange("password")}
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="********"
            />
          </div>

          <button
            type="button"
            disabled={isDisabled}
            className="w-full py-3 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
