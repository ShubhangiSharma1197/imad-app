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
/*
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
*/
var submit=document.getElementById('submit_btn');
submit.onclick = function(){
var request= new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //take some action
           if(request.status === 200){
            console.log('user logged in');
            alert('Logged in successfully');
           }else if(request.status === 403){
               alert('invalid username/password');
           }else if(request.status === 500){
               alert('Something went wrong on the server');
           }        
        }
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
   console.log(username);
   console.log(password);
  request.open('POST','http://sharmaneeraj.imad.hasura-app.io/login',true);
request.setRequestHeader('Content-Type', 'application/json');  
    request.send(JSON.stringify({username:username,password:password}));
};


