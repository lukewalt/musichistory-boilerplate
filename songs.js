


var songs = [];
var cleanedArray = [];


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


function populateArray() {

    songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
    songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
    songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
    songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
    songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

    // placed a new song at the beginning and end of the starter array
    songs.unshift("Buffalo > by Toro y Mio on the album What For?");
    songs.unshift("A Walk > by Tycho on the album Dive");
    // console.log(songs);

    //added missing genres
    for (var i = 0; i < 1; i++) {
        songs[0] += " - Alt";
        songs[1] += " - Rock"
        songs[2] += " - Elctr"
        songs[3] += " - Rock"
        songs[4] += " - Rock"
        songs[5] += " - Rock"
        songs[6] += " - Elctr"
    }
    regexArray();
}


//removed unwanted characters from each array
function regexArray(){
    for(var i = songs.length -1; i >= 0 ; i--){
        cleanedArray[i] = songs[i].replace(/@/, "").replace(/[*]/, "").replace(/>/, "-").replace(/!/, "").replace(/[(]/, "").replace("by ", "").replace("on the album", "-");
    }
    console.log("Cleaned Array  ", cleanedArray);
    populateObj()
}

function populateObj() {

    for (var i = 0; i < cleanedArray.length; i++) {
        var songInfoSplit = cleanedArray[i].split("-");
        // taking split items and pushing them to arrays in library object
        library.songs.push(songInfoSplit[0]);
        library.artist.push(songInfoSplit[1]);
        library.album.push(songInfoSplit[2]);
        library.genre.push(songInfoSplit[3]);
    }
    console.log(library);
    display()
}


var songsDisplayed = document.getElementById("songs")

function display() {
    //looping throught the arrays stored as object values and setting them equal to the counter indexing each node in the Node list
    var appendedSongs = "";
    console.log(library.artist);
    for (var i = 0; i < library.songs.length; i++) {
        appendedSongs += `<div class="indvSong">
                            <h2 class="songTitle">${library.songs[i]}</h2>
                            <p class="artist">${library.artist[i]}</p>
                            <p class="album">${library.album[i]}</p>
                            <p class="genre">${library.genre[i]}</p>
                           </div>`
    }

    songsDisplayed.innerHTML = appendedSongs

}

populateArray()
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
