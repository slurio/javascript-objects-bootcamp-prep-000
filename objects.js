var playlist = { artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
  var newPlaylist = Object.assign({},playlist, {[Phil Ochs]: songTitle});
  return newPlaylist;
}
