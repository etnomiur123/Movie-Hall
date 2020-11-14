import "../css/main.scss";
import { elements, classStrings } from './base';
import Page from "./models/Page";
import Search from './models/Search';
import Like from "./models/Like";
import { searchForEach, clearResults } from './view/searchView';
import { renderPage, clearPage} from './view/pageView';
import { renderLike, removeLike } from './view/likeView'



const state = {};
window.state = state

/**
 * 
 * SEARCH CONTROLLER
 * 
 */
const controlSearch = async () => {

    //get search results and set it in state
    state.search = elements.searchInput.value;
    const newSearch = new Search(state.search);
    const resultsData = await newSearch.getResults()
    state.results = resultsData;

    
    //add the search data to the ui
    elements.searchInput.value = "";
    clearPage()
    clearResults()
    searchForEach(state.results)
}


elements.searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    controlSearch();
})


/**
 * 
 * PAGE CONTROLLER
 * 
 */


const controlPage = async () => {
    
    //get the id from the url 
    const url = window.location.href;
    const id = url.split("#")[1];
    
    // search for the movie
    const movie = new Page(id);
    const moviePage = await movie.getPage();
    state.page = moviePage;

    //display the movie on the UI
    clearPage();
    clearResults()
    if(id) {
        renderPage(state.page);
    }

}


["load", "hashchange"].forEach(e => window.addEventListener(e, controlPage));


/**
 * 
 * LIKE CONTROLLER
 * 
 */

const controlLike = () => {
    const curID = state.page.imdbID

    if (!state.favorites) state.favorites = new Like();

    if(!state.favorites.isLiked(curID) && state.favorites.likeArr.length < 7) {
        state.favorites.addLike(state.page);
        renderLike(state.page)
    }
    
    elements.allFavBtns.forEach(el => el.parentElement.addEventListener("click", (e) => {
        if(e.target.closest(classStrings.favItem).id) {
            clearPage();
            clearResults();
            renderPage(state.favorites.likeArr.find(el => el.imdbID === e.target.closest(classStrings.favItem).id))
        }
    }))
}


elements.favList.addEventListener("click", e => {
    if(e.target.closest(classStrings.favItem).id){
        const parEl = e.target.closest(classStrings.favItem);
        if(e.target.classList.value === classStrings.delfav) {
            state.favorites.deleteLike(parEl.id)
            removeLike(parEl)
        }
    }
})

elements.pageContainer.addEventListener("click", (e) => {
    if (e.target.classList.value.includes(classStrings.addFav)) {
        controlLike()
    }
})    
