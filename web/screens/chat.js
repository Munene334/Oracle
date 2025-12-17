export function render(outlet){
  const messages=[{id:'c1',author:'Amelia',text:'Praying with you.'},{id:'c2',author:'James',text:'Amen 🙏'}];
  outlet.innerHTML = `<div class="header">Plan Chat (Live)</div><div id="chat"></div><div style="margin-top:12px"><a class="btn" href="#/">Back</a></div>`;
  const c = outlet.querySelector('#chat');
  messages.forEach(m => { const node=document.createElement('div'); node.className='card'; node.innerHTML=`<strong>${m.author}</strong><p>${m.text}</p>`; c.appendChild(node); });
}
