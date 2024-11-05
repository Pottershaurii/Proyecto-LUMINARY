function cambiarIdioma() {
    const currentLanguage = document.getElementById('idioma').textContent;
    const newLanguage = currentLanguage === 'ES' ? 'en' : 'es'; // Alterna entre 'ES' y 'en'
    cambiarContenido(newLanguage);
}

function cambiarContenido(idioma) {
    const elementosTraduccion = document.querySelectorAll('[data-traducible]');
    elementosTraduccion.forEach(el => {
        const clave = el.dataset.traducible;
        el.textContent = traducciones[idioma][clave] || el.textContent;
    });
    document.getElementById('idioma').textContent = idioma.toUpperCase(); // Actualiza el idioma mostrado
}
const traducciones = {
    es: {
        titulo: "Luminary",
        plataforma: "Plataforma",
        clientes: "Clientes",
        recursos: "Recursos",
        precios: "Precios",
        minijuego: "Mini Juego",
        agendaDemo: "Agenda una demostración",
        iniciarSesion: "Iniciar sesión",
        gestionEventos: "Gestión de Eventos",
        eficace: "Eficaz",
        escalable: "Escalable",
        simplificada: "Simplificada",
        digitalizada: "Digitalizada",
        descripcionEventos: "La plataforma de gestión de eventos todo en uno de Eventtia asegura una experiencia sin problemas para los participantes, optimiza la planificación y aumenta el ROI de sus eventos.",
        empezar: "Empezar",
        eventosDestacados: "Eventos Destacados",
        conferenciaEconomiaCircular: "Conferencia de Economía Circular",
        precioSugerido: "Precio Sugerido:",
        costoEstimado: "Costo Estimado:",
        congresoCiberseguridad: "Congreso de Ciberseguridad",
        cumbreSaludGlobal: "Cumbre Global de Salud y Pandemias",
        cumbreMundialClima: "Cumbre Mundial del Clima",
        foroEnergiasRenovables: "Foro de Energías Renovables",
        funcionalidades: "Funcionalidades",
        integracion: "Integración",
        descripcionIntegracion: "Integra todos tus procesos en un solo lugar, desde invitaciones hasta análisis de eventos.",
        reuniones: "Reuniones",
        descripcionReuniones: "Organiza reuniones de manera eficiente, asegurando una comunicación y coordinación sin problemas.",
        planificacion: "Planificación",
        descripcionPlanificacion: "Planifica tus eventos con herramientas y recursos completos.",
        reportes: "Reportes",
        descripcionReportes: "Obtén informes detallados que te ayuden a tomar decisiones informadas para futuros eventos.",
        progreso: "Progreso",
        descripcionProgreso: "Rastrea el progreso de tus eventos en tiempo real y haz ajustes según sea necesario.",
        testimonios: "Testimonios",
        testimonio1: "¡La plataforma superó nuestras expectativas! Logramos organizar nuestra conferencia anual sin problemas.",
        testimonio2: "¡Gracias a Luminary, nuestro evento fue un gran éxito! Definitivamente lo usaremos nuevamente.",
        testimonio3: "¡Una herramienta esencial para cualquier planificador de eventos. Muy recomendada!",
        luminary: "Luminary",
    },
    en: {
        titulo: "Luminary",
        plataforma: "Platform",
        clientes: "Clients",
        recursos: "Resources",
        precios: "Pricing",
        minijuego: "Mini Game",
        agendaDemo: "Schedule a demo",
        iniciarSesion: "Login",
        gestionEventos: "Event Management",
        eficace: "Efficient",
        escalable: "Scalable",
        simplificada: "Simplified",
        digitalizada: "Digitized",
        descripcionEventos: "Eventtia's all-in-one event management platform ensures a seamless experience for participants, optimizes planning, and increases the ROI of your events.",
        empezar: "Get Started",
        eventosDestacados: "Featured Events",
        conferenciaEconomiaCircular: "Circular Economy Conference",
        precioSugerido: "Suggested Price:",
        costoEstimado: "Estimated Cost:",
        congresoCiberseguridad: "Cybersecurity Congress",
        cumbreSaludGlobal: "Global Health and Pandemics Summit",
        cumbreMundialClima: "World Climate Summit",
        foroEnergiasRenovables: "Renewable Energy Forum",
        funcionalidades: "Features",
        integracion: "Integration",
        descripcionIntegracion: "Integrate all your processes in one place, from invitations to event analysis.",
        reuniones: "Meetings",
        descripcionReuniones: "Organize meetings efficiently, ensuring seamless communication and coordination.",
        planificacion: "Planning",
        descripcionPlanificacion: "Plan your events with complete tools and resources.",
        reportes: "Reporting",
        descripcionReportes: "Get detailed reports that help you make informed decisions for future events.",
        progreso: "Progress",
        descripcionProgreso: "Track the progress of your events in real-time and make adjustments as needed.",
        testimonios: "Testimonials",
        testimonio1: "The platform exceeded our expectations! We managed to organize our annual conference seamlessly.",
        testimonio2: "Thanks to Luminary, our event was a huge success! We will definitely use it again.",
        testimonio3: "An essential tool for any event planner. Highly recommended!",
        luminary: "Luminary",
    }
};