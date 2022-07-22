var li = document.querySelectorAll('.list-child');


li.forEach(element => {
   element.addEventListener('click',(e)=>{
   li.forEach(function(toto){
    toto.classList.remove('active');
   })
    e.target.classList.add('active');
   })
});
