//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event){
  event.preventDefault();

  var age = document.getElementById('age').value;
  var name = document.getElementById('name').value;

  if(!age || !name){
    alert('Please enter valid details');
    return;
  }

  var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
      if(age>18){
        resolve();
      }else{
        reject();
      }
    },4000);
  });

  promise.then(function(){
    alert('Welcome, ' + name + '. You can vote.');
  }).catch(function(){
   alert('Oh sorry, ' + name + '. You aren\'t old enough.');
  });


})