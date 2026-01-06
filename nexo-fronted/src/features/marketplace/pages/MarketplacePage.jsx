import { useMemo, useState } from "react";
import Button from "../../../components/ui/Button.jsx";
import Input from "../../../components/ui/Input.jsx";
import Card from "../../../components/ui/Card.jsx";

const BASE_PROVIDERS = [
  { id: 1, name: "Estudio Contable Andes", category: "Contabilidad", city: "Valparaiso" },
  { id: 2, name: "Agencia Pixel", category: "Marketing", city: "Santiago" },
  { id: 3, name: "LegalStart", category: "Legal", city: "Vina del Mar" },
  { id: 4, name: "WebPro Chile", category: "Web", city: "Quillota" },
];

export default function MarketplacePage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return BASE_PROVIDERS;

    return BASE_PROVIDERS.filter((provider) => {
      return (
        provider.name.toLowerCase().includes(normalized) ||
        provider.category.toLowerCase().includes(normalized) ||
        provider.city.toLowerCase().includes(normalized)
      );
    });
  }, [query]);

  const emptyMessage = useMemo(
    () => `No encontramos resultados para "${query}". Intenta con otra categoria o ciudad.`,
    [query]
  );

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <header>
          <p className="text-sm uppercase tracking-wider text-blue-500 font-semibold">Marketplace</p>
          <h1 className="text-4xl font-black mt-2">Filtra proveedores verificados en tiempo real</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Usa el buscador para encontrar estudios contables, agencias de marketing, expertos legales y mas socios para
            ejecutar tu roadmap.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Busca: marketing, legal, quillota..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="flex-1"
          />

          <Button className="w-full md:w-auto" onClick={() => setQuery("")}>
            Limpiar
          </Button>
        </div>

        {filtered.length === 0 ? (
          <div className="min-h-[240px] flex items-center justify-center rounded-3xl border border-dashed">
            <p className="text-gray-500 text-center px-6">{emptyMessage}</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((provider) => (
              <Card key={provider.id}>
                <p className="text-xs uppercase tracking-widest text-blue-500">{provider.category}</p>
                <h3 className="text-xl font-semibold mt-1">{provider.name}</h3>
                <p className="text-sm text-gray-500">{provider.city}</p>

                <div className="mt-4">
                  <Button variant="ghost" className="px-0 py-0 rounded-none">
                    Ver perfil
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
