let apiKey = '18623550-dab6c274e7256e60b198db2a4';

export default {
  prePage: 4,
  page : 1,
  _searchQ: "",

  getFetch() {
    let url = `https://pixabay.com/api/videos/?key=${apiKey}&q=${this._searchQ}&per_page=${this.prePage}&page=${this.page}`;
    return fetch(url).then(response => response.json())
  },

  get searchQ() {
    return this._search
  },
  set searchQ(newSearch) {
    this._searchQ = newSearch
  },

  setPage() {
    return this.page++
  }
}