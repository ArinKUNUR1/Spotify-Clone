import { getPopular } from "./scripts/api.js";
import { renderCards,renderPlaying } from "./scripts/ui.js";

const list = document.querySelector("#list")

document.addEventListener('DOMContentLoaded', () => {
    getPopular()
    .then((data) => renderCards(data));
})

list.addEventListener("click", (e) => {
    if(e.target.id === "play-btn") {
        const card = e.target.closest(".card");
        renderPlaying(card.dataset);
    }
})