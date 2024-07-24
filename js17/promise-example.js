
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('data-container');
    container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  })
  .catch(error => console.error('Error:', error));