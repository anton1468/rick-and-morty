
const getEpisodes = () => {
  fetch('https://rickandmortyapi.com/api/episode')
    .then((response) => {
      return response.json();
    })
    .then(data => {
      return data;
    })
}

export default getEpisodes
