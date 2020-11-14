import { elements } from '../base';

export const renderPage = item => {
    const markup = `
    <img src="${item.Poster}" alt="${item.Title}">
    <div class="page_text">
        <p class="page_title">${item.Title}</b> <span>(${item.Year})</span></p>
        <p>${item.Plot}</p>
        <p class="details"><b>Genre:</b> ${item.Genre}</p>
        <p class="details"><b>Cast:</b> ${item.Actors}</p>
        <p class="details"><b>Writer:</b> ${removeParenthesesText(item.Writer)}</p>
        <p class="details"><b>Country:</b> ${item.Country}</p>
        <p class="details"><b>IMDB Rating:</b> ${item.imdbRating}</p>
        <div class="details-anchors">
        <p><a class="page_btn fav_add">Add to favorites </a></p>
        <p><a class="page_btn external_link" href="https://www.imdb.com/title/${item.imdbID}" target="_blank">IMDB page</a></p>
        </div>
        
    </div>
    `
    elements.pageContainer.insertAdjacentHTML("beforeend", markup)
}

export const clearPage = () => {
    elements.pageContainer.innerHTML = '';
}

const removeParenthesesText = text => {
    return text.replace(/ *\([^)]*\) */g, "");
}















