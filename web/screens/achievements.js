export function render(outlet){
  const badges = [ { id: 'b1', name: 'First Read', description: 'Completed first reading plan.' }, { id: 'b2', name: '7-Day Streak', description: 'Read daily for a week.' } ];
  outlet.innerHTML = `<div class="header">Achievements</div><div id="badges"></div>`;
  const c = outlet.querySelector('#badges');
  badges.forEach(b => { const card=document.createElement('div'); card.className='card'; card.innerHTML = `<strong>${b.name}</strong><p>${b.description}</p>`; c.appendChild(card); });
}
