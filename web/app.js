const outlet = document.getElementById('outlet');

const routes = {
  '/': () => import('./screens/home.js'),
  '/explore': () => import('./screens/explore.js'),
  '/plans': () => import('./screens/plans.js'),
  '/prayer': () => import('./screens/prayer.js'),
  '/profile': () => import('./screens/profile.js'),
  '/highlights': () => import('./screens/highlights.js'),
  '/verse-creator': () => import('./screens/verseCreator.js'),
  '/achievements': () => import('./screens/achievements.js'),
  '/chat': () => import('./screens/chat.js')
};

async function renderRoute() {
  const path = location.hash.replace('#', '') || '/';
  const loader = routes[path];
  if (!loader) {
    outlet.innerHTML = `<div class="card"><h2>Not found</h2><p class="muted">No route for ${path}</p></div>`;
    return;
  }
  const mod = await loader();
  outlet.innerHTML = '';
  mod.render(outlet);
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('load', renderRoute);
