export function render(outlet){
  outlet.innerHTML = `
    <div class="header">Group Plans</div>
    <div class="card"><p class="muted">Create or join devotionals with friends. Each plan has a linked chat and daily reading.</p>
    <p><a class="btn" href="#/chat">Open Plan Chat</a></p></div>
  `;
}
