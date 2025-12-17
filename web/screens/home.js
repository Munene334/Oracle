import './post.js';

export function render(outlet){
  outlet.innerHTML = `
    <div class="header">Main Feed</div>
    <div id="feed"></div>
  `;

  const feed = outlet.querySelector('#feed');
  const posts = [
    {id:'p1', author:'Sarah Joy', verse:'Romans 8:28', text:'This verse encourages me to trust God in hard times.', reactions:{amen:12}},
  ];

  posts.forEach(p => {
    const node = createPost(p);
    feed.appendChild(node);
  });
}
