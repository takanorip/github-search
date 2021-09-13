const searchGithub = (keyword) => {
  const api = "https://api.github.com/search/repositories"
  fetch(api + 'q=topic:ruby+topic:rails')
    .then(response => response.json())
    .then(data => console.log(data));
}

searchGithub()