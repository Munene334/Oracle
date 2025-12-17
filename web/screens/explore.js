export function render(outlet){
  outlet.innerHTML = `
    <div class="header">Explore</div>
    <div class="card"><p class="muted">Trending devotionals, recommended content, and themed channels will appear here.</p>
    <p><a class="btn" href="#/highlights">See Highlights</a> <a class="btn" href="#/achievements">Achievements</a></p></div>
  `;
}
