console.log('koko')
let ul = document.querySelector('.my-form>ul');
ul.addEventListener('click',(e)=>{
    //thi if using perantNode.perantNode to get apaernt for font awasame 
    // because fontAwsame logo then paernt cold svg
    console.log(e.target.parentNode.parentNode.nodeName)
    if (e.target.parentNode.parentNode.nodeName == 'SPAN'){
   let li = e.target.parentNode.parentNode.parentNode
   //get the ul parent to delet the list after that
   let ul = li.parentNode
   ul.removeChild(li)
    }
})
//toto
document.querySelector('.btn-click').addEventListener('click',(e)=>{
    e.preventDefault();
    let name = document.querySelector('.name').value 
    let li = document.createElement('li');
    li.innerHTML = `${name}<span><i class="fa-solid fa-trash-can"></i></span>`
    
    ul.appendChild(li);
})

