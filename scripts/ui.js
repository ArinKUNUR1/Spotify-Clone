const list = document.querySelector("#list");
const playingInfo = document.querySelector(".playing");

export const renderCards = (songs) => {
    songs.forEach((song) => {
        const div = document.createElement("div");
        div.dataset.url = song.hub.actions.pop().uri;
        div.dataset.title = song.title;
        div.dataset.photo = song.images.coverart;
        div.className = "card";
        div.innerHTML = `
            <figure>
                <img src="${song.images.coverart}" />
                <div class="play">
                   <i id="play-btn" class="bi bi-play-fill"></i>
                </div>
            </figure>
            <h4>${song.subtitle}</h4>
            <p>${song.title}</p>
        `
        list.appendChild(div);
    })
}

export const renderPlaying = (data) => {
    playingInfo.innerHTML = `
        <div class="info">
            <img class="animate" src="${data.photo}" />
            <div>
               <p>Şuan Oynatılıyor...</p>
               <h3>${data.title}</h3>
            </div>
        </div>
        <audio autoplay controls src="${data.url}"></audio>
    `
}