
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// placed a new song at the beginning and end of the starter array
songs.unshift("Buffalo > by Toro y Mio on the album What For?");
songs.push("A Walk > by Tycho on the album Dive");
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

//removed unwanted characters from each array
cleanedArray = [];
for(var i = songs.length -1; i >= 0 ; i--){
  cleanedArray[i] = songs[i].replace(/@/, "").replace(/[*]/, "").replace(/>/, "-").replace(/!/, "").replace(/[(]/, "").replace("by ", "").replace("on the album", "-");
}
console.log(cleanedArray);



//created empty object to store new values in the form of arrays
var library = {
    songs: [],
    artist: [],
    album: [],
    genre: []
};
console.log(library);


 //capture elements from the DOM in the form of a NODE List
 var songTitle = document.getElementsByClassName('songTitle');
 var artistDisplay = document.getElementsByClassName('artist');
 var albumDisplay = document.getElementsByClassName('album');
 var genreDisplay = document.getElementsByClassName('genre');

var display = function() {
    for (var i = 0; i < cleanedArray.length; i++) {
        var songInfoSplit = cleanedArray[i].split("-");
        // taking split items and pushing them to arrays in library object
        library.songs.push(songInfoSplit[0]);
        library.artist.push(songInfoSplit[1]);
        library.album.push(songInfoSplit[2]);
        library.genre.push(songInfoSplit[3]);
    }
    console.log(library);
    //looping throught the arrays stored as object values and setting them equal to the counter indexing each node in the Node list
    for (var j = 0; j < library.songs.length; j++) {
        console.log(songTitle[j]);
        songTitle[j].innerHTML = library.songs[j];
    }
    for (var j = 0; j < library.artist.length; j++) {
        console.log(artistDisplay[j])
        artistDisplay[j].innerHTML = library.artist[j];
    }
    for (var j = 0; j < library.album.length; j++) {
        console.log(albumDisplay[j])
        albumDisplay[j].innerHTML = library.album[j];
    }
    for (var j = 0; j < library.genre.length; j++) {
        console.log(genreDisplay[j])
        genreDisplay[j].innerHTML = library.genre[j];
    }

}

display()
