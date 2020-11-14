import { elements } from '../base';

export default class Like {
    constructor (likedMovie) {
        this.likeArr = []
    }

    addLike(item) {
        this.likeArr.push(item)
    }

    isLiked(id) {
        return this.likeArr.findIndex(el => el.imdbID === id) !== -1;
    }

    deleteLike(itemID) {
        if(itemID) {
            const itemIndex = this.likeArr.findIndex(x => x.imdbID === itemID)
            this.likeArr.splice(itemIndex,1)
        }
    }
}