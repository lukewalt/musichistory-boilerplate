//capture elements from the DOM
var songTitle = document.querySelector('.songTitle');
var artist = document.querySelector('.artist');
var album = document.querySelector('.songTitle');


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// placed a new song at the beginning and end of the starter array
songs.unshift("Buffalo > by Toro y Mio on the album What For?");
songs.push("a Walk > by Tycho on the album Dive");
console.log(songs);


for(var i = songs.length -1; i >= 0 ; i--){
  songs[i] = songs[i].replace(/@/, ""); 
}

console.log(songs);
