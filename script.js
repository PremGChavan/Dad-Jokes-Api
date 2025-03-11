const loading = document.getElementById('loading');
const jokeContainer = document.getElementById('jokeContainer');
const jokeBtn = document.getElementById('jokeBtn');
const API_KEY = 'mR2uGt5NnvVWcwjvGFAEPg==ZZUHc1CiAQZgQoya';

jokeBtn.addEventListener('click', fetchJoke);

async function fetchJoke() {
  try {
    loading.style.display = 'block'; 
    jokeContainer.innerText = ''; 
    const response = await fetch('https://api.api-ninjas.com/v1/dadjokes', {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch joke. Please try again.');
    }
    const data = await response.json();
    displayJoke(data[0].joke);
  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeContainer.innerHTML = `<div class="error">${error.message} <span class="smiley">&#128514;</span></div>`;
  } finally {
    loading.style.display = 'none'; 
  }
}

function displayJoke(joke) {
  jokeContainer.innerHTML = `<div class="joke">${joke}</div>`;
}