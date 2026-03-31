/* Blog post registry — add new posts here for automatic sidebar/listing */
const BLOG_POSTS = [
  { slug: 'evergreen-content-boost-traffic', title: 'How to Write Killer Evergreen Content to Boost Your Traffic', date: '2026-01-29', category: 'Content Marketing', image: '../img/blog-evergreen.png' },
  { slug: 'strategic-content-marketing-visibility', title: 'Boosting Visibility with Strategic Content Marketing', date: '2026-01-10', category: 'Content Marketing', image: '../img/blog-strategic.png' },
  { slug: 'diverse-content-formats-impact', title: 'Exploring Diverse Content Formats for Maximum Impact', date: '2026-01-08', category: 'Content Strategy', image: '../img/blog-formats.png' },
  { slug: 'chatgpt-cant-do-content-marketing', title: 'No, ChatGPT Can\'t Do Your Content Marketing', date: '2026-01-07', category: 'AI & Marketing', image: '../img/blog-ai.png' },
];

/* Render sidebar with image + recent posts (called from each blog page) */
function renderBlogSidebar(currentSlug) {
  const sidebar = document.getElementById('blogSidebar');
  if (!sidebar) return;

  const current = BLOG_POSTS.find(p => p.slug === currentSlug);
  const others = BLOG_POSTS.filter(p => p.slug !== currentSlug).slice(0, 5);

  let html = '';

  // Current post image
  if (current && current.image) {
    html += '<div class="sidebar-card sidebar-img-card">'
      + '<img src="' + current.image + '" alt="' + current.title + '">'
      + '</div>';
  }

  // Recent posts
  html += '<div class="sidebar-card">'
    + '<h4>Recent Posts</h4>'
    + '<ul class="sidebar-posts">';

  others.forEach(function(p) {
    var d = new Date(p.date);
    var dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    html += '<li><a href="' + p.slug + '.html">'
      + '<span class="sp-title">' + p.title + '</span>'
      + '<span class="sp-meta">' + p.category + ' · ' + dateStr + '</span>'
      + '</a></li>';
  });

  html += '</ul></div>';

  // CTA
  html += '<div class="sidebar-card sidebar-cta">'
    + '<h4>Need Content Help?</h4>'
    + '<p>Let our team create content that drives results for your business.</p>'
    + '<a href="../#contact" class="btn btn-primary btn-full">Get In Touch</a>'
    + '</div>';

  sidebar.innerHTML = html;
}
