import { useMemo, useState } from "react";

export default function EntrepreneurDiagnosis() {
  const [answers, setAnswers] = useState({ ventas: 3, marketing: 2, operaciones: 4 });
  const questions = useMemo(
    () => [
      { id: "ventas", label: "Ventas" },
      { id: "marketing", label: "Marketing" },
      { id: "operaciones", label: "Operaciones" },
    ],
    []
  );

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        <header>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">Diagnostico</p>
          <h1 className="text-4xl font-black">Evalua tu negocio en minutos</h1>
        </header>

        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="rounded-2xl border px-6 py-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{question.label}</p>
                <span className="text-sm text-gray-500">{answers[question.id]} / 5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={answers[question.id]}
                className="w-full mt-3"
                onChange={(event) =>
                  setAnswers((prev) => ({ ...prev, [question.id]: Number(event.target.value) }))
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
