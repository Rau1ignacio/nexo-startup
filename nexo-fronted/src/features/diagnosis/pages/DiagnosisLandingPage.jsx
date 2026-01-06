import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button.jsx";
import Card from "../../../components/ui/Card.jsx";

export default function DiagnosisLandingPage() {
  const [activeCard, setActiveCard] = useState(0);

  const heroCards = useMemo(
    () => [
      { title: "Diagnostico guiado", text: "Responde preguntas simples y obten necesidades claras." },
      { title: "Roadmap tipo roadmap.sh", text: "Camino por etapas segun tu tipo de negocio." },
      { title: "Proveedores verificados", text: "Servicios confiables para ejecutar tu plan." },
    ],
    []
  );

  const steps = ["Diagnostico", "Prioridad", "Ejecucion"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight">
            Diagnostica tu negocio, crea un roadmap y conecta con proveedores validados.
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            NEXO te guia paso a paso: detecta necesidades, prioriza acciones y encuentra servicios confiables sin salir
            de tu panel.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button as={Link} to="/auth/register" variant="primary">
              Comenzar diagnostico
            </Button>

            <Button as={Link} to="/roadmaps" variant="outline">
              Ver roadmaps
            </Button>
          </div>

          <div className="mt-12 flex gap-3">
            {heroCards.map((card, index) => (
              <button
                key={card.title}
                className={`flex-1 rounded-xl border px-4 py-3 text-left transition ${
                  activeCard === index ? "bg-blue-600 text-white" : "bg-white text-slate-700 hover:bg-slate-50"
                }`}
                onClick={() => setActiveCard(index)}
              >
                <p className="text-sm font-medium">{card.title}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between min-h-[420px]">
          <div>
            <p className="text-sm uppercase tracking-wide text-blue-500 font-semibold">Preview roadmap</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">{heroCards[activeCard].title}</h2>
            <p className="mt-2 text-gray-600">{heroCards[activeCard].text}</p>
          </div>

          <div className="mt-8 grid gap-4">
            {steps.map((step, index) => (
              <Card
                key={step}
                className={`p-4 ${
                  index === activeCard ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-slate-50"
                }`}
              >
                <p className="text-sm text-gray-500">Paso {index + 1}</p>
                <p className="font-semibold text-lg">{step}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
