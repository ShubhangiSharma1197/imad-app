`console.log('Loaded!');
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
};`;

//counter code
var button=document.getElementById('counter');

button.onclick=function()
{
    var request= new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
           if(request.status === 200){
               var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
           }        
        }
    };
    request.open('GET','http://sharmaneeraj.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
   
};
var nameInput= document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick = function(){

  var names = ['name1','name2','name3'];
  var list='';
  for(var i=0;i<names.length ;i++)
  {
      list += '<li>'+names[i] + '</li>';
  }
};

