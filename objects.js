var playlist = { artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
  newPlaylist = Object.assign({},playlist, {artistName: "songTitle"});
  return newPlaylist;
}