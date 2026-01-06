export const mockRoadmaps = [
  { id: "ecommerce", title: "Ecommerce", description: "De idea a ventas online" },
  { id: "restaurante", title: "Restaurante", description: "Permisos, operaciones y marketing local" },
  { id: "servicios", title: "Servicios profesionales", description: "Oferta, pricing y captacion" },
];

export const mockRoadmapDetail = {
  id: "ecommerce",
  title: "Roadmap Ecommerce",
  description: "Pasos para lanzar y escalar tu tienda online",
  phases: [
    {
      id: "fase-1",
      title: "Validacion",
      description: "Aterriza la propuesta y valida demanda",
      steps: [
        {
          id: "step-1",
          order: 1,
          title: "Define propuesta",
          description: "Responde problema, cliente y oferta.",
          impact: "Alto",
          actions: ["Entrevistas", "Mapa de valor"],
          comments: ["Comparte este resumen con tu mentor."],
          warnings: ["Evita lanzar sin diferenciarte."],
        },
      ],
    },
  ],
};
