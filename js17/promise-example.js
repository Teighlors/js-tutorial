fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log('To-Do Item:', data))
  .catch(error => console.error('Error:', error));
