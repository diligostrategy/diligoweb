/* ═══════════════════════════════════════
   i18n — EN / ES (MX)
   ═══════════════════════════════════════ */
const I18N = {
  current: localStorage.getItem('diligo_lang') || 'en',
  dict: {
    en: {
      'nav.services': 'Services', 'nav.about': 'About', 'nav.process': 'Process',
      'nav.faq': 'FAQ', 'nav.contact': 'Contact', 'nav.cta': "Let's Talk",
      'hero.badge': 'Global Content Strategy',
      'hero.title': 'Reach New Markets with<br><span class="text-gradient">Multilingual Content</span>',
      'hero.sub': 'Break language barriers and engage diverse audiences with customized content strategies that deliver results across 10+ languages.',
      'hero.cta1': 'Get Started', 'hero.cta2': 'Our Services',
      'hero.stat1': 'Projects Completed', 'hero.stat2': 'Languages', 'hero.stat3': 'Global Partners',
      'services.tag': 'What We Do',
      'services.title': 'Content & Marketing<br><span class="text-gradient">Solutions</span>',
      'services.sub': 'We combine linguistic expertise with data-driven strategy to deliver results across every market.',
      's1.title': 'Multilingual Content', 's1.desc': 'Creating high-quality content for global markets in 10+ languages. Blog posts, social media, marketing materials — all culturally adapted.',
      's2.title': 'SEO for Global Markets', 's2.desc': 'Multilingual keyword research, on-page optimization, and performance tracking to rank higher in every target market.',
      's3.title': 'AI-Powered Content', 's3.desc': 'Leverage AI tools enhanced by human expertise for faster content production without sacrificing quality or brand voice.',
      's4.title': 'Video & Animation', 's4.desc': 'End-to-end video production including multilingual voiceovers, subtitles, and culturally adapted visual storytelling.',
      's5.title': 'Copywriting & Editing', 's5.desc': 'Crafting and refining written content for clarity, tone, and cultural accuracy across all your global markets.',
      's6.title': 'Translation & Localization', 's6.desc': 'Beyond word-for-word translation. We adapt your message to resonate with local cultures, idioms, and market expectations.',
      's7.title': 'Content Marketing', 's7.desc': 'Strategic content plans that attract, engage, and convert. eBooks, white papers, newsletters, and thought leadership pieces.',
      's8.title': 'Brand & Design', 's8.desc': 'Visual identity and graphic design for global campaigns. Culturally sensitive creative that maintains brand consistency worldwide.',
      'about.tag': 'Our Story',
      'about.title': 'From Freelance Roots to<br><span class="text-gradient">Global Content Leader</span>',
      'about.p1': 'Our journey began with a passion for words, languages, and the power of meaningful connections. For over 25 years, our founder thrived as a freelance content creator, crafting stories that crossed borders — from New York to Tokyo, Berlin to Buenos Aires.',
      'about.p2': 'In 2023, Diligo Strategy LLC was born in Boulder, Colorado, bringing together language enthusiasts, skilled writers, and tech-savvy strategists. Our mission: to bridge language gaps and connect businesses with audiences worldwide.',
      'about.p3': 'Our diverse team harnesses both human talent and innovative AI tools, crafting messages that resonate across cultures in over 10 languages. Every word is a bridge, every message a chance to inspire.',
      'about.years': 'Years of Experience', 'about.langs': 'Languages Covered',
      'about.projects': 'Projects Delivered', 'about.founded': 'Founded in Boulder',
      'process.tag': 'How We Work', 'process.title': 'Our <span class="text-gradient">Process</span>',
      'p1.title': 'Discovery & Strategy', 'p1.desc': 'We learn your goals, audience, and challenges. Then we create a tailored content strategy that fits your needs and budget.',
      'p2.title': 'Content Creation', 'p2.desc': 'Our native-speaking writers and AI-enhanced tools produce content that feels natural in every language while maintaining your brand voice.',
      'p3.title': 'SEO & Optimization', 'p3.desc': 'Data-driven SEO strategies optimize visibility and ensure your content reaches the right audience in every target market.',
      'p4.title': 'Launch & Measure', 'p4.desc': 'We publish, distribute, track performance, and continuously optimize to ensure lasting results and ROI.',
      'faq.tag': 'Common Questions', 'faq.title': 'Frequently Asked <span class="text-gradient">Questions</span>',
      'faq.q1': 'What services does Diligo Strategy offer?',
      'faq.a1': 'We specialize in multilingual content marketing, SEO optimization, content creation, translation & localization, video production, and digital strategy. Our goal is to help businesses expand their reach and connect with global audiences.',
      'faq.q2': 'How does your multilingual content service work?',
      'faq.a2': 'We go beyond simple translation. Our team of native-speaking writers, translators, and localization experts ensure cultural adaptation, SEO optimization, and tone consistency so your content resonates naturally with each target audience.',
      'faq.q3': 'How can content marketing help grow my business?',
      'faq.a3': 'Strategic content marketing improves brand visibility and search rankings, attracts and nurtures leads, builds credibility with your audience, and generates long-term traffic through SEO and evergreen content — driving consistent conversions over time.',
      'faq.q4': 'Do you offer SEO-optimized content?',
      'faq.a4': 'Yes. Our SEO-driven content marketing includes keyword research, on-page and technical optimization, SEO-friendly content creation, and performance tracking. We ensure your business ranks higher, attracts organic traffic, and stays ahead of the competition.',
      'faq.q5': 'How do I get started?',
      'faq.a5': "It's simple: contact us, tell us about your goals and challenges, and we'll create a tailored strategy. Our team executes the plan, delivers high-quality content, and tracks performance to ensure success.",
      'contact.tag': 'Get In Touch', 'contact.title': 'Let\'s <span class="text-gradient">Talk</span>',
      'contact.sub': 'Ready to take your content global? Tell us about your project and we\'ll get back to you within 24 hours.',
      'form.name': 'Your Name', 'form.email': 'Your Email', 'form.company': 'Company Name',
      'form.select': 'Select a service...', 'form.o1': 'Multilingual Content', 'form.o2': 'SEO & Optimization',
      'form.o3': 'Translation & Localization', 'form.o4': 'Video Production',
      'form.o5': 'Content Marketing', 'form.o6': 'AI-Powered Content', 'form.o7': 'Other',
      'form.message': 'Tell us about your project...', 'form.submit': 'Send Message',
      'footer.tagline': 'Your journey to global success starts here. We combine creativity and strategy to craft compelling narratives that resonate with your target markets.',
      'footer.company': 'Company', 'footer.services': 'Services', 'footer.legal': 'Legal',
      'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms & Conditions', 'footer.cookies': 'Cookie Policy',
      'footer.rights': 'All rights reserved.',
      'cookie.text': 'We use cookies to improve your experience. By continuing to browse, you agree to our cookie policy.',
      'cookie.accept': 'Accept', 'cookie.more': 'Learn More',
    },
    es: {
      'nav.services': 'Servicios', 'nav.about': 'Nosotros', 'nav.process': 'Proceso',
      'nav.faq': 'FAQ', 'nav.contact': 'Contacto', 'nav.cta': 'Hablemos',
      'hero.badge': 'Estrategia de Contenido Global',
      'hero.title': 'Alcanza Nuevos Mercados con<br><span class="text-gradient">Contenido Multilingüe</span>',
      'hero.sub': 'Rompe las barreras del idioma y conecta con audiencias diversas mediante estrategias de contenido personalizadas en más de 10 idiomas.',
      'hero.cta1': 'Comenzar', 'hero.cta2': 'Nuestros Servicios',
      'hero.stat1': 'Proyectos Completados', 'hero.stat2': 'Idiomas', 'hero.stat3': 'Socios Globales',
      'services.tag': 'Qué Hacemos',
      'services.title': 'Soluciones de Contenido<br><span class="text-gradient">y Marketing</span>',
      'services.sub': 'Combinamos experiencia lingüística con estrategia basada en datos para entregar resultados en cada mercado.',
      's1.title': 'Contenido Multilingüe', 's1.desc': 'Creación de contenido de alta calidad para mercados globales en más de 10 idiomas. Blogs, redes sociales, materiales de marketing — todo culturalmente adaptado.',
      's2.title': 'SEO para Mercados Globales', 's2.desc': 'Investigación de palabras clave multilingüe, optimización on-page y seguimiento de rendimiento para posicionarte mejor en cada mercado objetivo.',
      's3.title': 'Contenido con IA', 's3.desc': 'Aprovecha herramientas de IA potenciadas por experiencia humana para producir contenido más rápido sin sacrificar calidad ni voz de marca.',
      's4.title': 'Video y Animación', 's4.desc': 'Producción integral de video incluyendo voces en off multilingües, subtítulos y narrativa visual culturalmente adaptada.',
      's5.title': 'Redacción y Edición', 's5.desc': 'Creación y refinamiento de contenido escrito con claridad, tono y precisión cultural en todos tus mercados globales.',
      's6.title': 'Traducción y Localización', 's6.desc': 'Más allá de la traducción literal. Adaptamos tu mensaje para que resuene con culturas locales, modismos y expectativas del mercado.',
      's7.title': 'Marketing de Contenidos', 's7.desc': 'Planes estratégicos que atraen, enganchan y convierten. eBooks, white papers, newsletters y piezas de liderazgo de opinión.',
      's8.title': 'Marca y Diseño', 's8.desc': 'Identidad visual y diseño gráfico para campañas globales. Creatividad culturalmente sensible que mantiene la consistencia de marca.',
      'about.tag': 'Nuestra Historia',
      'about.title': 'De Raíces Freelance a<br><span class="text-gradient">Líder Global en Contenido</span>',
      'about.p1': 'Nuestro camino comenzó con la pasión por las palabras, los idiomas y el poder de las conexiones significativas. Durante más de 25 años, nuestro fundador prosperó como creador de contenido freelance, creando historias que cruzaron fronteras — de Nueva York a Tokio, de Berlín a Buenos Aires.',
      'about.p2': 'En 2023, Diligo Strategy LLC nació en Boulder, Colorado, reuniendo a entusiastas de los idiomas, escritores talentosos y estrategas tecnológicos. Nuestra misión: cerrar las brechas lingüísticas y conectar empresas con audiencias de todo el mundo.',
      'about.p3': 'Nuestro diverso equipo aprovecha tanto el talento humano como herramientas innovadoras de IA, creando mensajes que resuenan en más de 10 idiomas. Cada palabra es un puente, cada mensaje una oportunidad de inspirar.',
      'about.years': 'Años de Experiencia', 'about.langs': 'Idiomas Cubiertos',
      'about.projects': 'Proyectos Entregados', 'about.founded': 'Fundada en Boulder',
      'process.tag': 'Cómo Trabajamos', 'process.title': 'Nuestro <span class="text-gradient">Proceso</span>',
      'p1.title': 'Descubrimiento y Estrategia', 'p1.desc': 'Conocemos tus objetivos, audiencia y desafíos. Luego creamos una estrategia de contenido a medida que se ajuste a tus necesidades y presupuesto.',
      'p2.title': 'Creación de Contenido', 'p2.desc': 'Nuestros escritores nativos y herramientas potenciadas con IA producen contenido que se siente natural en cada idioma manteniendo tu voz de marca.',
      'p3.title': 'SEO y Optimización', 'p3.desc': 'Estrategias SEO basadas en datos optimizan la visibilidad y aseguran que tu contenido llegue a la audiencia correcta en cada mercado.',
      'p4.title': 'Lanzamiento y Medición', 'p4.desc': 'Publicamos, distribuimos, medimos rendimiento y optimizamos continuamente para asegurar resultados duraderos y ROI.',
      'faq.tag': 'Preguntas Frecuentes', 'faq.title': 'Preguntas <span class="text-gradient">Frecuentes</span>',
      'faq.q1': '¿Qué servicios ofrece Diligo Strategy?',
      'faq.a1': 'Nos especializamos en marketing de contenido multilingüe, optimización SEO, creación de contenido, traducción y localización, producción de video y estrategia digital. Nuestro objetivo es ayudar a las empresas a expandir su alcance y conectar con audiencias globales.',
      'faq.q2': '¿Cómo funciona su servicio de contenido multilingüe?',
      'faq.a2': 'Vamos más allá de la traducción simple. Nuestro equipo de escritores nativos, traductores y expertos en localización aseguran adaptación cultural, optimización SEO y consistencia de tono para que tu contenido resuene naturalmente con cada audiencia.',
      'faq.q3': '¿Cómo puede el marketing de contenidos hacer crecer mi negocio?',
      'faq.a3': 'El marketing de contenidos estratégico mejora la visibilidad de marca y rankings de búsqueda, atrae y nutre leads, construye credibilidad con tu audiencia, y genera tráfico a largo plazo — impulsando conversiones consistentes.',
      'faq.q4': '¿Ofrecen contenido optimizado para SEO?',
      'faq.a4': 'Sí. Nuestro marketing de contenido orientado a SEO incluye investigación de palabras clave, optimización on-page y técnica, creación de contenido SEO-friendly y seguimiento de rendimiento para que tu negocio se posicione mejor.',
      'faq.q5': '¿Cómo empiezo?',
      'faq.a5': 'Es simple: contáctanos, cuéntanos sobre tus objetivos y desafíos, y crearemos una estrategia a medida. Nuestro equipo ejecuta el plan, entrega contenido de alta calidad y mide el rendimiento para asegurar el éxito.',
      'contact.tag': 'Contáctanos', 'contact.title': '<span class="text-gradient">Hablemos</span>',
      'contact.sub': '¿Listo para llevar tu contenido al mundo? Cuéntanos sobre tu proyecto y te responderemos en 24 horas.',
      'form.name': 'Tu Nombre', 'form.email': 'Tu Email', 'form.company': 'Nombre de Empresa',
      'form.select': 'Selecciona un servicio...', 'form.o1': 'Contenido Multilingüe', 'form.o2': 'SEO y Optimización',
      'form.o3': 'Traducción y Localización', 'form.o4': 'Producción de Video',
      'form.o5': 'Marketing de Contenidos', 'form.o6': 'Contenido con IA', 'form.o7': 'Otro',
      'form.message': 'Cuéntanos sobre tu proyecto...', 'form.submit': 'Enviar Mensaje',
      'footer.tagline': 'Tu camino hacia el éxito global comienza aquí. Combinamos creatividad y estrategia para crear narrativas que resuenan con tus mercados objetivo.',
      'footer.company': 'Empresa', 'footer.services': 'Servicios', 'footer.legal': 'Legal',
      'footer.privacy': 'Política de Privacidad', 'footer.terms': 'Términos y Condiciones', 'footer.cookies': 'Política de Cookies',
      'footer.rights': 'Todos los derechos reservados.',
      'cookie.text': 'Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra política de cookies.',
      'cookie.accept': 'Aceptar', 'cookie.more': 'Más Info',
    }
  },
  apply() {
    const d = this.dict[this.current] || this.dict.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (d[key]) el.innerHTML = d[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (d[key]) el.placeholder = d[key];
    });
    document.documentElement.lang = this.current;
    document.getElementById('langFlag').textContent = this.current === 'en' ? 'ES' : 'EN';
  },
  toggle() {
    this.current = this.current === 'en' ? 'es' : 'en';
    localStorage.setItem('diligo_lang', this.current);
    this.apply();
  },
  init() {
    this.apply();
    document.getElementById('langToggle').addEventListener('click', () => this.toggle());
  }
};
