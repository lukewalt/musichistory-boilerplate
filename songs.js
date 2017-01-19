//created empty object to store new values in the form of arrays
var library = {
    songs: [],
    artist: [],
    album: [],
    genre: []
};

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
    console.log("global data", globalData);
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
    for (var i = 0; i < library.songs.length; i++) {
        appendedSongs += `<div class="indvSong row">
                                <h3 class="songTitle col-md-12">${library.songs[i]}</h3>
                                    <p class="artist col-md-4">${library.artist[i]}</p>
                                    <p class="album col-md-4">${library.album[i]}</p>
                                    <p class="genre col-md-4">${library.genre[i]}</p>
                                <button type="button" name="button" class="btn">Delete</button>
                           </div>`
    }

    songsDisplayed.innerHTML = appendedSongs + `<button type="button" name="button" id="moreSongs" class="btn more-songs-btn">More Songs</button>`
    deleteSongs();

    var moreSongs = document.getElementById("moreSongs")
    loadMoreEventListener();
}


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
addMusicButton()

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

//------------- Second XML Request Load More Songs --------

function loadMoreEventListener() {
    console.log("hey");
    moreSongs.addEventListener("click", fetchMoreSongs)
}

function fetchMoreSongs() {
    var goAgain = new XMLHttpRequest();
    goAgain.addEventListener("load", getSongs);
    goAgain.open("GET", "songs.json");
    goAgain.send();
}

var secondData;

function getMoreSongs(e){
    secondData = JSON.parse(e.target.responseText);
    globalData += secondData
    populateObj(globalData);
}
