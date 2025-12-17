export function createPost(post){
  const el = document.createElement('div');
  el.className = 'card';
  el.innerHTML = `
    <div><strong>${post.author}</strong></div>
    ${post.verse?`<div class="post-verse">${post.verse}</div>`:''}
    <p>${post.text}</p>
    <div class="reactions">
      <div class="reaction">Amen 🙏 ${post.reactions?.amen||0}</div>
      <div class="reaction">Share</div>
    </div>
  `;
  return el;
}

// export default for compatibility
export default createPost;
