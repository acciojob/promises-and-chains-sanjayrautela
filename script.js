//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event){
  event.preventDefault();

  var age = document.getElementById('age').value;
  var name = document.getElementById('name').value;

  if(!age || !name){
    alert('please fill in all the fields');
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
    alert('welcome,' + name + '.you can vote');
  }).catch(function(){
    alert('oh sorry' + name + 'you cnnot vote');
  });


})