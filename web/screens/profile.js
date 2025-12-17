export function render(outlet){
  const user = { name: 'Sarah Joy', faithBio:{favoriteVerse:'Romans 8:28', denomination:'Non-denominational'}, streak:3, completedBooks:['Romans'] };

  outlet.innerHTML = `
    <div class="header">${user.name}</div>
    <div class="card"><p><strong>Favorite verse:</strong> ${user.faithBio.favoriteVerse}</p>
    <p><strong>Denomination:</strong> ${user.faithBio.denomination}</p>
    <p><strong>Reading streak:</strong> ${user.streak} days</p>
    <p><strong>Completed books:</strong> ${user.completedBooks.join(', ')}</p>
    <p><a class="btn" href="#/verse-creator">Create Verse Image</a></p>
    </div>
  `;
}
