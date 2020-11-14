import { elements, classStrings } from "../base"

export const renderLike = (movie) => {
    const arr = Array.from(elements.allFavBtns);
    
    for(let el of arr) {
        if(el.innerHTML == "Favourite Here") {
            el.innerHTML = movie.Title;
            el.closest(classStrings.favItem).id = movie.imdbID
            break
        }
    }
} 

export const removeLike = (item) => {
    item.remove();
    const likebtn = `<li class="fav_item">
    <a class="fav_btn">Favourite Here</a>
    <button class="delete_fav">x</button>
</li>`
    elements.favList.insertAdjacentHTML("beforeend", likebtn)
}