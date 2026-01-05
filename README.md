# NEXO — Ecosistema para Emprendedores (Chile → LATAM)

Plataforma digital para **diagnosticar negocios**, **recomendar servicios** y **conectar emprendedores con proveedores verificados**.
Incluye marketplace de servicios, packs para emprendedores, dashboards y rutas/roadmaps tipo roadmap.sh por tipo de negocio.

## 🚀 Stack (sugerido)
- Frontend: Next.js (React) + Tailwind
- Backend: Microservicios (Node/Nest o Java/Spring Boot)
- DB: PostgreSQL (principal) + Redis (cache/colas)
- Async: RabbitMQ o SQS
- Infra: Docker + (Kubernetes opcional)
- CI: GitHub Actions

## 🧩 Servicios
- auth-service: autenticación, roles, JWT, permisos
- marketplace-service: proveedores verificados, servicios, cotizaciones
- diagnosis-service: formularios, scoring, recomendaciones, roadmaps
- payments-service: suscripciones/packs, cobros, facturación
- notifications-service: email/WhatsApp/push y eventos

## ✅ Requisitos
- Docker + Docker Compose
- Node 18+ (si web/servicios Node)
- Java 17+ (si servicios Spring)

## ▶️ Levantar en local
```bash
cp .env.example .env
docker compose up -d --build
