/* Blog post registry — add new posts here for automatic sidebar/listing */
const BLOG_POSTS = [
  { slug: 'the-complete-guide-to-hreflang-tags-avoid-these-7-common-mis', title: 'The Complete Guide to Hreflang Tags: Avoid These 7 Common Mistakes', titleEs: 'La Guía Completa de Etiquetas Hreflang: Evita Estos 7 Errores Comunes', date: '2026-04-02', category: 'SEO', categoryEs: 'SEO', image: '../img/blog-the-complete-guide-to-hreflang.png' },
  { slug: 'how-to-build-a-multilingual-content-calendar-that-actually-w', title: 'How to Build a Multilingual Content Calendar That Actually Works', titleEs: 'Cómo Crear un Calendario de Contenido Multilingüe que Realmente Funcione', date: '2026-04-02', category: 'Content Strategy', categoryEs: 'Estrategia de Contenido', image: '../img/blog-how-to-build-a-multilingual-co.png' },
  { slug: 'evergreen-content-boost-traffic', title: 'How to Write Killer Evergreen Content to Boost Your Traffic', titleEs: 'Cómo Escribir Contenido Evergreen Excepcional para Aumentar tu Tráfico', date: '2026-01-29', category: 'Content Marketing', categoryEs: 'Marketing de Contenidos', image: '../img/blog-evergreen.png' },
  { slug: 'strategic-content-marketing-visibility', title: 'Boosting Visibility with Strategic Content Marketing', titleEs: 'Aumentar la Visibilidad con Marketing de Contenidos Estratégico', date: '2026-01-10', category: 'Content Marketing', categoryEs: 'Marketing de Contenidos', image: '../img/blog-strategic.png' },
  { slug: 'diverse-content-formats-impact', title: 'Exploring Diverse Content Formats for Maximum Impact', titleEs: 'Explorar Diversos Formatos de Contenido para Máximo Impacto', date: '2026-01-08', category: 'Content Strategy', categoryEs: 'Estrategia de Contenido', image: '../img/blog-formats.png' },
  { slug: 'chatgpt-cant-do-content-marketing', title: 'No, ChatGPT Can\'t Do Your Content Marketing', titleEs: 'No, ChatGPT No Puede Hacer tu Marketing de Contenidos', date: '2026-01-07', category: 'AI & Marketing', categoryEs: 'IA y Marketing', image: '../img/blog-ai.png' },
];

/* Render sidebar with image + recent posts (called from each blog page) */
function renderBlogSidebar(currentSlug) {
  const sidebar = document.getElementById('blogSidebar');
  if (!sidebar) return;

  const isES = document.documentElement.lang === 'es';
  const current = BLOG_POSTS.find(p => p.slug === currentSlug);
  const others = BLOG_POSTS.filter(p => p.slug !== currentSlug).slice(0, 5);
  const imgPrefix = isES ? '../../img/' : '../img/';

  let html = '';

  // Current post image
  if (current && current.image) {
    var imgSrc = current.image.replace('../img/', imgPrefix);
    html += '<div class="sidebar-card sidebar-img-card">'
      + '<img src="' + imgSrc + '" alt="' + (isES ? (current.titleEs || current.title) : current.title) + '">'
      + '</div>';
  }

  // Recent posts
  html += '<div class="sidebar-card">'
    + '<h4>' + (isES ? 'Posts Recientes' : 'Recent Posts') + '</h4>'
    + '<ul class="sidebar-posts">';

  others.forEach(function(p) {
    var d = new Date(p.date);
    var dateStr = isES
      ? d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
      : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    var title = isES ? (p.titleEs || p.title) : p.title;
    var cat = isES ? (p.categoryEs || p.category) : p.category;
    html += '<li><a href="' + p.slug + '.html">'
      + '<span class="sp-title">' + title + '</span>'
      + '<span class="sp-meta">' + cat + ' · ' + dateStr + '</span>'
      + '</a></li>';
  });

  html += '</ul></div>';

  // CTA
  var ctaHome = isES ? '../../' : '../';
  html += '<div class="sidebar-card sidebar-cta">'
    + '<h4>' + (isES ? '¿Necesitas Ayuda?' : 'Need Content Help?') + '</h4>'
    + '<p>' + (isES ? 'Nuestro equipo crea contenido que genera resultados.' : 'Let our team create content that drives results for your business.') + '</p>'
    + '<a href="' + ctaHome + '#contact" class="btn btn-primary btn-full">' + (isES ? 'Contáctanos' : 'Get In Touch') + '</a>'
    + '</div>';

  sidebar.innerHTML = html;
}
