import { elements } from '../base';

export const addSearchItems = item => {
    const markup = `<li class="result_item" >
    <a href="#${item.imdbID}">
    <img src="${item.Poster}" alt="img_here">
        <div class="result_text">
            <p class="result_title">${item.Title} (${item.Year})</p>
        </div>
    </a>
                </li>`;

    elements.resultList.insertAdjacentHTML("beforeend", markup)
}

export const searchForEach = item => {
    item.forEach(addSearchItems)
} 

export const clearResults = () => {
    elements.resultList.innerHTML = '';
}









