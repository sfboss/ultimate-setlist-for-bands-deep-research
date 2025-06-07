document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  const body = document.body;
  
  // Remove any existing band classes
  body.classList.remove('grateful-dead', 'phish', 'pearl-jam', 'dmb', 'stones');
  
  // Add the appropriate class based on the URL path
  if (path.includes('/dead/')) {
    body.classList.add('grateful-dead');
    document.title = '⚡💀🌹 ' + document.title;
  } else if (path.includes('/phish/')) {
    body.classList.add('phish');
    document.title = '🐠 ' + document.title;
  } else if (path.includes('/pj/')) {
    body.classList.add('pearl-jam');
    document.title = '🎸 ' + document.title;
  } else if (path.includes('/dmb/')) {
    body.classList.add('dmb');
    document.title = '🎷 ' + document.title;
  } else if (path.includes('/stones/')) {
    body.classList.add('stones');
    document.title = '👅 ' + document.title;
  }
  
  // Add CSS class to song lists
  document.querySelectorAll('ul').forEach(function(ul) {
    // Simple heuristic: If the list has mostly short items and many of them, it's likely a song list
    const items = ul.querySelectorAll('li');
    if (items.length > 5) {
      let shortItemCount = 0;
      items.forEach(function(li) {
        if (li.textContent.trim().length < 50) shortItemCount++;
      });
      
      if (shortItemCount / items.length > 0.7) {
        ul.classList.add('song-listing');
      }
    }
  });
  
  // Add album-card class to blockquotes that might be album descriptions
  document.querySelectorAll('blockquote').forEach(function(blockquote) {
    blockquote.classList.add('album-card');
  });
});
