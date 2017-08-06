console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="New Value";
var marginLeft=0;
function moveRight(){
    marginLeft= marginLeft+5;
    img.style.marginLeft=marginLeft + 'px';
}
var img=document.getElementById('madi');
img.onclick = function() {
    //img.style.marginLeft='100px';
    var interval = setInterval(moveRight,50);
};
