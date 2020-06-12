var playlist = { artistName: "songTitle"};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
