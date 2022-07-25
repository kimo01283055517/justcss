let myarr = ['name','soso','koko','nono']
let input = document.querySelector('input');

let ul = document.querySelector('ul');

function loadData(arr,element,cariteria){

    let newarrr = arr.filter(function(x){
        
        return x.includes(cariteria)
    })
    console.log(newarrr);
    ul.innerHTML = '';
    newarrr.map(function(li_text){
        ul.innerHTML +=`<li>${li_text}<li>`
    })

    
}

input.addEventListener('keyup',function(e){
    
   loadData(myarr,ul,e.target.value.toLowerCase())
})

input.addEventListener('click', function(e){
    
    loadData(myarr,ul,e.target.value.toLowerCase())
    ul.style.display ='block'
})

ul.addEventListener('click',function(e){
    input.value = e.target.textContent
    ul.style.display ='none'
})
ul.addEventListener('mouseleave',function(){
    ul.style.display ='none'
})





