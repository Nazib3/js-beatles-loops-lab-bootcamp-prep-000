function theBeatlesPlay(arm, ari) {
  var beatles = [];
  for(var i=0; i<arm.length; i++){
      beatles.push(`${arm[i]} plays ${ari[i]}`)
  }
  return beatles;
}
