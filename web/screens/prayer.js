export function render(outlet){
  const mock = [
    { id: 'r1', author: 'Amelia', text: 'Please pray for my family this week.' },
    { id: 'r2', author: 'James', text: 'Praise: healed from surgery!' }
  ];

  outlet.innerHTML = `<div class="header">Community Prayer Wall</div><div id="prayers"></div>`;
  const container = outlet.querySelector('#prayers');
  mock.forEach(r => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<strong>${r.author}</strong><p>${r.text}</p><div style="margin-top:8px"><a class='btn' href="#">Prayed For</a> <a class='btn' href="#">Comment</a></div>`;
    container.appendChild(card);
  });
}
