var json = JSON.parse(pictures);

loadGallery();
function loadGallery(){
  for(var id in json){
    var item = json[it];
    var div = document.createElement('div');
    div.innerHTML = '<img src=' + item.src + ' />';
    document.getElementById('gallerypics1').appendChild(div);
  }
}
