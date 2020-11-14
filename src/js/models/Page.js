const axios = require('axios');

export default class Page {
    constructor(id) {
        this.id = id;
    }

    async getPage() {
        const key = '4ec8be09'
        const id = this.id;
        const results = await axios(`http://www.omdbapi.com/?apikey=${key}&i=${id}`);
        return results.data;
    }

}