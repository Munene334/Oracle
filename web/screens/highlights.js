export function render(outlet){
  const mock = [ { id: 'h1', verse: 'Psalm 23:1', note: 'The Lord is my shepherd.' } ];
  outlet.innerHTML = `<div class="header">Highlights & Notes</div><div id="hl"></div>`;
  const c = outlet.querySelector('#hl');
  mock.forEach(h => {
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `<strong>${h.verse}</strong><p>${h.note}</p>`;
    c.appendChild(card);
  });
}
