/* Datos de proyectos; editar este archivo para actualizar el portafolio. */
window.OSCAR_PROJECTS = [
  {
    "id": "ipsomary",
    "title": "IPSOMARY",
    "kicker": "Laboratorio & gestión ambiental",
    "category": "Operaciones",
    "years": "2024 — Actualidad",
    "role": "Backend principal",
    "featured": true,
    "number": "01",
    "description": "Digitalización de punta a punta del proceso de un laboratorio ambiental, desde la oferta comercial hasta el informe técnico firmado.",
    "challenge": "Conectar áreas comerciales, personal de muestreo, laboratorio, calidad y administración en un flujo trazable, sin perder las particularidades de cada ensayo.",
    "solution": "API REST modular con servicios de dominio para ofertas, requisiciones, muestreo, resultados, documentos financieros, informes y control operativo.",
    "highlights": [
      "Motor de fórmulas configurables con validación segura, precisión y dependencias entre servicios.",
      "Cálculos especializados de DBO, textura USDA, granulometría y caudal en campo.",
      "Versionado y generación de PDF, firma con proceso Java, y envío por lotes mediante colas con reintentos.",
      "Paneles operativos y comerciales; recepción de información financiera mediante API tokenizada."
    ],
    "stack": [
      "Laravel 11",
      "PHP 8.3",
      "MariaDB",
      "Passport",
      "Queues",
      "Scheduler",
      "DomPDF",
      "Java"
    ],
    "theme": "teal"
  },
  {
    "id": "leuca",
    "title": "Leuca Solutions",
    "kicker": "Evaluaciones & certificaciones",
    "category": "Educación",
    "years": "2025 — 2026",
    "role": "Backend principal",
    "featured": true,
    "number": "02",
    "description": "Motor de evaluaciones con distintos tipos de preguntas, calificación y seguimiento de rendimiento.",
    "challenge": "Administrar bancos de preguntas, evaluaciones configurables y puntuación consistente para múltiples modalidades.",
    "solution": "APIs de exámenes, calificación y resultados con lógica de acceso, vigencia y reactivación de certificaciones.",
    "highlights": [
      "Implementación de diez modalidades de preguntas y puntuación parcial.",
      "Cálculo de resultados y tendencias por categoría para consumo desde frontend.",
      "Gestión de compras y recompras sin reenviar credenciales existentes; avisos de vencimiento."
    ],
    "stack": [
      "Laravel 10",
      "PHP 8.3",
      "Passport",
      "Eloquent",
      "Scheduler",
      "Mail"
    ],
    "theme": "blue"
  },
  {
    "id": "tyg",
    "title": "TyG Consultorías",
    "kicker": "Seguridad & salud ocupacional",
    "category": "Salud",
    "years": "2024 — 2025",
    "role": "Backend principal",
    "featured": true,
    "number": "03",
    "description": "Plataforma multiempresa para evaluaciones ergonómicas y encuestas de riesgos psicosociales.",
    "challenge": "Recopilar respuestas, consolidar evaluaciones y entregar informes técnicos reutilizables entre empresas.",
    "solution": "API por perfiles con lotes de encuestas, motor matricial ROSA, análisis psicosocial e informes PDF/Excel.",
    "highlights": [
      "Cálculo de puntuación ROSA con matrices y clasificación de niveles de riesgo.",
      "Evaluaciones individuales y consolidadas por dimensiones psicosociales.",
      "Integración de onboarding con PayPhone y facturación a través de Contífico."
    ],
    "stack": [
      "Laravel 11",
      "PHP 8.3",
      "Passport",
      "MariaDB",
      "PayPhone",
      "Contífico",
      "Excel"
    ],
    "theme": "orange"
  },
  {
    "id": "punto-premia",
    "title": "Punto Premia",
    "kicker": "Fidelización & comercio",
    "category": "Comercio y pagos",
    "years": "2025 — 2026",
    "role": "Backend principal",
    "featured": true,
    "number": "04",
    "description": "Sistema de acumulación de puntos por facturas y canje de premios, con inventarios distribuidos.",
    "challenge": "Conservar trazabilidad entre compras, puntos acumulados, canjes e inventario de distintas ubicaciones.",
    "solution": "Backend transaccional con movimientos de puntos, control de stock en bodega e islas y estados de cuenta para comercios.",
    "highlights": [
      "Reglas de puntos parametrizadas por local y reversos ante corrección de facturas.",
      "Canjes con movimientos de puntos e inventario.",
      "Reportes Excel/PDF y automatizaciones promocionales programadas."
    ],
    "stack": [
      "Laravel 11",
      "Passport",
      "Transacciones SQL",
      "Jobs",
      "Excel",
      "DomPDF"
    ],
    "theme": "purple"
  },
  {
    "id": "onepay",
    "title": "OnePay · Coris",
    "kicker": "Cobros & pasarelas",
    "category": "Comercio y pagos",
    "years": "2025",
    "role": "Desarrollo backend",
    "featured": true,
    "number": "05",
    "description": "API para generar enlaces de pago y consultar operaciones asociadas a servicios de asistencia.",
    "challenge": "Orquestar solicitudes de cobro, vencimientos y comprobación del resultado recibido desde una pasarela.",
    "solution": "Intenciones de pago tokenizadas, creación de checkout Datafast y registro consultable de transacciones.",
    "highlights": [
      "Integración HTTP con Datafast para generar sesiones de checkout.",
      "Registro de intenciones, transacciones y consultas de estado remoto.",
      "Trazabilidad por identificadores y control de expiración de enlaces."
    ],
    "stack": [
      "Laravel 10",
      "PHP 8.1+",
      "Datafast",
      "REST API",
      "Eloquent"
    ],
    "theme": "indigo"
  },
  {
    "id": "ponte11",
    "title": "Ponte 11",
    "kicker": "Trivia & algoritmos",
    "category": "Contenido y comunidad",
    "years": "2025 — 2026",
    "role": "Participación backend",
    "featured": true,
    "number": "06",
    "description": "Experiencia de trivia sobre fútbol ecuatoriano con respuestas basadas en datos históricos.",
    "challenge": "Aceptar múltiples respuestas correctas y comprender búsquedas con errores de escritura o variaciones de nombre.",
    "solution": "Validación basada en relaciones de futbolistas/equipos y buscador tolerante a errores.",
    "highlights": [
      "Búsqueda aproximada mediante normalización, Levenshtein, SOUNDEX y n-gramas.",
      "Validación de jugadores por temporadas, equipos y posiciones.",
      "El repositorio incluye ranking estacional y cuatro modalidades de trivia; autoría exacta por módulo por confirmar."
    ],
    "stack": [
      "Laravel 11",
      "MariaDB",
      "Levenshtein",
      "SOUNDEX",
      "SQL"
    ],
    "theme": "rose"
  },
  {
    "id": "montessori",
    "title": "Montessori Certifications",
    "kicker": "Credenciales digitales",
    "category": "Educación",
    "years": "2025",
    "role": "Desarrollo backend",
    "featured": false,
    "number": "07",
    "description": "Emisión de certificados académicos en PDF, identificados con folio y token de verificación.",
    "challenge": "Centralizar el registro académico y permitir consultar la autenticidad de un certificado sin intervención administrativa.",
    "solution": "API de certificados y alumnos, cálculo de calificaciones y consulta pública a través de un token enlazado por QR.",
    "highlights": [
      "Folio anual, promedio de cuatro competencias de inglés y regeneración documental.",
      "PDF de certificado mediante DomPDF y código QR con BaconQrCode.",
      "Consulta pública por folio, identificación o token."
    ],
    "stack": [
      "Laravel 11",
      "Passport",
      "DomPDF",
      "BaconQrCode"
    ],
    "theme": "blue"
  },
  {
    "id": "sistema-juridico",
    "title": "Sistema Jurídico",
    "kicker": "Gestión de trámites de marca",
    "category": "Operaciones",
    "years": "2025 — 2026",
    "role": "Participación backend",
    "featured": false,
    "number": "08",
    "description": "Seguimiento digital de expedientes de registro de marca entre consultora y cliente.",
    "challenge": "Dar visibilidad a estados, hitos, documentos y próximos pasos de cada trámite.",
    "solution": "API de expedientes, etapas y recomendaciones con acceso por roles y confirmación de pagos PayPhone.",
    "highlights": [
      "Modelado de estados de trámite y porcentaje de avance.",
      "Hitos con fechas, enlaces documentales y recomendaciones.",
      "Módulo de pagos con PayPhone; alcance productivo por confirmar."
    ],
    "stack": [
      "Laravel 11",
      "Passport",
      "Eloquent",
      "PayPhone"
    ],
    "theme": "orange"
  },
  {
    "id": "energy1111",
    "title": "Energy 1111",
    "kicker": "Fitness & membresías",
    "category": "Salud",
    "years": "2025 — 2026",
    "role": "Participación backend",
    "featured": false,
    "number": "09",
    "description": "APIs para planes deportivos, nutrición y seguimiento diario mediante membresías.",
    "challenge": "Conectar contenidos, avance de usuario y control de acceso por membresía.",
    "solution": "Servicios de rutinas, planes, progreso y pagos Stripe con estados sincronizados.",
    "highlights": [
      "Seguimiento de rutinas, videos y objetivos alimenticios diarios.",
      "El código integra Stripe PaymentIntent y webhooks.",
      "Conciliación programada del estado de membresías; atribución de módulos individuales por validar."
    ],
    "stack": [
      "Laravel 11",
      "Passport",
      "Stripe",
      "Webhooks",
      "Scheduler"
    ],
    "theme": "teal"
  },
  {
    "id": "open-closet",
    "title": "Open Closet",
    "kicker": "Marketplace social",
    "category": "Comercio y pagos",
    "years": "2024",
    "role": "Backend principal",
    "featured": false,
    "number": "10",
    "description": "Comunidad de compraventa y negociación de prendas y otros artículos.",
    "challenge": "Unir catálogo de publicaciones, interacciones y negociación entre usuarios.",
    "solution": "API para armarios, contenidos multimedia, ofertas, compras, reseñas y mensajería REST.",
    "highlights": [
      "Gestión de catálogos multimedia y armarios de usuario.",
      "Flujos de negociación de ofertas y registro de compras.",
      "Integraciones disponibles en código con Socialite, Firebase y Stripe PaymentIntent."
    ],
    "stack": [
      "Laravel 10",
      "Passport",
      "Socialite",
      "Firebase",
      "Stripe"
    ],
    "theme": "rose"
  },
  {
    "id": "bibalance",
    "title": "BiBalance / V-Balance",
    "kicker": "Entrenamiento & nutrición",
    "category": "Salud",
    "years": "2024",
    "role": "Backend principal",
    "featured": false,
    "number": "11",
    "description": "Programas deportivos y planes nutricionales individualizados con seguimiento del progreso.",
    "challenge": "Coordinar calendario de rutinas, recetas, porciones y progreso en un mismo producto.",
    "solution": "API de administración y cliente para programas, alimentación, videos y métricas nutricionales.",
    "highlights": [
      "Programas y dietas calendarizados, recetas e ingredientes.",
      "Cálculo de macronutrientes y registro de progreso de videos.",
      "Permisos y lógica de membresías con Laravel Passport."
    ],
    "stack": [
      "Laravel 10",
      "MariaDB",
      "Passport",
      "Repositories"
    ],
    "theme": "green"
  },
  {
    "id": "agrovivienda",
    "title": "Agrovivienda",
    "kicker": "Administración residencial",
    "category": "Operaciones",
    "years": "2023 — 2024",
    "role": "Backend principal",
    "featured": false,
    "number": "12",
    "description": "Gestión de viviendas, residentes y administración financiera de conjuntos residenciales.",
    "challenge": "Automatizar cobros recurrentes, registros residenciales e información para administración.",
    "solution": "Backend de alícuotas, comprobantes, conciliación de pagos e integración con software de facturación.",
    "highlights": [
      "Generación programada de alícuotas y recordatorios mensuales.",
      "Gestión de residentes y validación de comprobantes.",
      "Integración mediante API con FacturaYa para emisión/consulta de facturas."
    ],
    "stack": [
      "Laravel 9",
      "MariaDB",
      "JWT",
      "Scheduler",
      "Excel"
    ],
    "theme": "teal"
  },
  {
    "id": "pangea",
    "title": "Pangea Delivery",
    "kicker": "Social commerce & video",
    "category": "Comercio y pagos",
    "years": "2023 — 2024",
    "role": "Módulo backend",
    "featured": false,
    "number": "13",
    "description": "Funcionalidades sociales de videos de recetas dentro de una aplicación de delivery ya existente.",
    "challenge": "Agregar contenidos descubribles y relacionarlos con productos sin reconstruir el sistema de compras.",
    "solution": "Backend del feed de reels con interacción, filtros y recomendaciones ponderadas.",
    "highlights": [
      "Registro de vistas, interacciones, guardados y etiquetas.",
      "Recomendación y paginación de contenido.",
      "No incluye autoría del núcleo de logística, catálogo comercial o pagos de delivery."
    ],
    "stack": [
      "Laravel 9",
      "PHP 8.1",
      "MariaDB",
      "REST API"
    ],
    "theme": "indigo"
  },
  {
    "id": "schoenstatt",
    "title": "Schoenstatt",
    "kicker": "Comunidad & contenidos",
    "category": "Contenido y comunidad",
    "years": "2024 — 2025",
    "role": "Participación backend",
    "featured": false,
    "number": "14",
    "description": "Plataforma comunitaria con contenidos, ramas y control de acceso contextual.",
    "challenge": "Adaptar publicación y distribución de contenidos a distintas ramas y ciudades.",
    "solution": "Servicios de usuarios, roles, publicaciones y gestión de contenido multimedia.",
    "highlights": [
      "Control de acceso por rama y ciudad.",
      "Publicaciones y flujos editoriales.",
      "Integración YouTube API para videos y playlists según el repositorio revisado."
    ],
    "stack": [
      "Laravel 10",
      "Sanctum",
      "YouTube API",
      "Firebase"
    ],
    "theme": "purple"
  },
  {
    "id": "schoenstatt-rifas",
    "title": "Schoenstatt Rifas",
    "kicker": "Rifas & reservas",
    "category": "Comercio y pagos",
    "years": "2025",
    "role": "Desarrollo backend",
    "featured": false,
    "number": "15",
    "description": "Aplicación paralela de reserva y venta de números de rifas mediante iPad.",
    "challenge": "Coordinar selección de números, expiración de reservas y confirmación de cobros.",
    "solution": "API de disponibilidad y compras, checkout Datafast y emisión de boletos digitales.",
    "highlights": [
      "Reserva temporal de números con expiración programada.",
      "Checkout integrado con Datafast.",
      "Tickets PDF con QR y avisos de compra."
    ],
    "stack": [
      "Laravel 11",
      "Datafast",
      "DomPDF",
      "QR",
      "Scheduler"
    ],
    "theme": "orange"
  },
  {
    "id": "radio-san-giovanni",
    "title": "Radio San Giovanni",
    "kicker": "Medios & automatización",
    "category": "Contenido y comunidad",
    "years": "2024",
    "role": "Backend principal",
    "featured": false,
    "number": "16",
    "description": "CMS para emisora con programación radial y contenido editorial recurrente.",
    "challenge": "Mantener programación periódica, publicaciones y contenido devocional actualizados.",
    "solution": "API/CMS con parrillas de radio/TV y tareas de extracción automatizada de contenido.",
    "highlights": [
      "Programación recurrente y validación de franjas horarias.",
      "Scraping programado de evangelio y santoral.",
      "Artículos y solicitudes/intenciones de oración."
    ],
    "stack": [
      "Laravel 9",
      "JWT",
      "Eloquent",
      "Scraping",
      "Scheduler"
    ],
    "theme": "rose"
  },
  {
    "id": "fixit",
    "title": "Fixit",
    "kicker": "Soporte de producto legacy",
    "category": "Mantenimiento",
    "years": "≈ 2 años de mantenimiento",
    "role": "Mantenimiento evolutivo",
    "featured": false,
    "number": "17",
    "description": "Mantenimiento de un sistema heredado de gestión de talleres de reparación.",
    "challenge": "Ampliar un producto preexistente sin atribuirse su arquitectura original.",
    "solution": "Ajustes backend de CRUD, permisos y pequeños cambios de vistas para continuidad operativa.",
    "highlights": [
      "Extensión de formularios y operaciones CRUD.",
      "Adaptaciones de permisos y flujos de acceso.",
      "Mantenimiento correctivo; no desarrollo original del sistema."
    ],
    "stack": [
      "Laravel 5.6",
      "PHP 7.x",
      "Blade",
      "Eloquent"
    ],
    "theme": "indigo"
  },
  {
    "id": "facturaya",
    "title": "FacturaYa",
    "kicker": "Reportes asíncronos",
    "category": "Mantenimiento",
    "years": "Colaboración puntual",
    "role": "Colaboración acotada",
    "featured": false,
    "number": "18",
    "description": "Extensión puntual de un producto de facturación electrónica desarrollado por otros equipos.",
    "challenge": "Generar reportes Excel de listados voluminosos sin bloquear la solicitud web.",
    "solution": "Exportaciones diferidas procesadas en cola y enviadas al correo del solicitante.",
    "highlights": [
      "Exportación de listados de facturas a Excel.",
      "Procesamiento de reportes mediante colas.",
      "Entrega posterior por correo electrónico; sin autoría del sistema de facturación."
    ],
    "stack": [
      "PHP / Laravel",
      "Excel",
      "Jobs / Queues",
      "Laravel Mail"
    ],
    "theme": "purple"
  }
];
