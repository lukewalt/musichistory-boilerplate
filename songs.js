//created empty object to store new values in the form of arrays
var library = {
    songs: [],
    artist: [],
    album: [],
    genre: []
};
console.log("Library  ", library);


//capture elements from the DOM in the form of a NODE List
var songTitle = document.getElementsByClassName('songTitle');
var artistDisplay = document.getElementsByClassName('artist');
var albumDisplay = document.getElementsByClassName('album');
var genreDisplay = document.getElementsByClassName('genre');
var deleteSongArray = document.getElementsByClassName('delete-song')

var globalData;

var songsJSON = new XMLHttpRequest();
songsJSON.addEventListener("load", getSongs);
songsJSON.open("GET", "songs.json");
songsJSON.send();



function getSongs(e) {
    //sets song data to global variable
    globalData = JSON.parse(e.target.responseText);
    populateObj(globalData)

}


function populateObj(globalData) {
    for (var i = 0; i < globalData.songs.length; i++) {

        library.songs.push(globalData.songs[i].song);
        library.artist.push(globalData.songs[i].artist);
        library.album.push(globalData.songs[i].album);
        library.genre.push(globalData.songs[i].genre);
    }
    console.log(library);
    display();
}


var songsDisplayed = document.getElementById("songs")

function display() {
    //looping throught the arrays stored as object values and setting them equal to the counter indexing each node in the Node list
    var appendedSongs = "";
    console.log(library.songs);
    for (var i = 0; i < library.songs.length; i++) {
        appendedSongs += `<div class="indvSong">
                            <h2 class="songTitle">${library.songs[i]}</h2>
                            <p class="artist">${library.artist[i]}</p>
                            <p class="album">${library.album[i]}</p>
                            <p class="genre">${library.genre[i]}</p>
                            <button type="button" name="button" class="delete-song">Delete</button>
                           </div>`
    }

    songsDisplayed.innerHTML = appendedSongs
    deleteSongs();
}

addMusicButton()

var viewMusicNav = document.getElementById('main-nav');
var addMusicNav = document.getElementById("add-nav");

var mainView = document.getElementById("mainView")
var addMusic = document.getElementById("addMusic")

viewMusicNav.addEventListener("click", function(){
    mainView.className = " container view-music"
    addMusic.className += " hide"
})

addMusicNav.addEventListener("click", function(){
    mainView.className += " hide"
    addMusic.className = " container add-music-sect"
})


var userInputSong = document.getElementById("addSong")
var userInputArtist = document.getElementById("addArtist")
var userInputAlbum = document.getElementById("addAlbum")


//get user input from search fields
function addMusicButton() {
    var addMusicButton = document.getElementById("add-music")
    addMusicButton.addEventListener("click", function(){
        getUserSearch()
    })
}

function getUserSearch() {
    library.songs.unshift(userInputSong.value);
    library.artist.unshift(userInputArtist.value);
    library.album.unshift(userInputAlbum.value);
    alert("Added song "+ userInputSong.value + " by " + userInputArtist.value + " to Library")
    clearInputField()
    display();
    console.log(library);
}

function clearInputField() {
    userInputSong.value = "";
    userInputArtist.value = "";
    userInputAlbum.value = "";
}


function deleteSongs() {
    for (var i = 0; i < deleteSongArray.length; i++) {
        deleteSongArray[i].addEventListener("click", removal)
    }
}

function removal(e){
    e.target.parentNode.remove();
}




// $('#add-nav').click(function(){
//     $('.view-music').addClass('hide');
//     $('.add-music-sect-sect').removeClass('hide');
// })
//
// $('#main-nav').click(function(){
//     $('.view-music').removeClass('hide');
//     $('.add-music-sect').addClass('hide');
//
// })
//
//
// $('#add-music').click(function(){
//
//
// })
