let apiKey = '18623550-dab6c274e7256e60b198db2a4';

export default {
  url: `https://pixabay.com/api/videos/?key=${apiKey}&q=yellow+flowers`,

  getFetch() {
    return fetch(this.url).then(response => response.json())
  }
}