var playlist = { artistName: "songTitle"};

function removeFromPlaylist(playlist, artistName) {
  var newPlaylist = delete playlist[artistName];
  return newPlaylist;
}
