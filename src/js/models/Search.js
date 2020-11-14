const axios = require('axios');

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = '4ec8be09'
        const title = this.query;
        const results = await axios(`http://www.omdbapi.com/?apikey=${key}&s=${title}`);
        return results.data.Search
    }
}
