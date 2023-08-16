/*
document.getElementById('item-1').addEventListener('click', function(myEvent){
    console.log('Item 1 Clicked');
    // myEvent.stopPropagation();
    myEvent.stopImmediatePropagation();
});

document.getElementById('uls').addEventListener('click', function(){
    console.log('Ul Clicked');
});

document.getElementById('section').addEventListener('click', function(){
    console.log('Section Clicked');
});

document.getElementById('body').addEventListener('click', function(){
    console.log('Html Body Clicked');
});
*/ 


// let items = document.getElementsByClassName('item');
// for(let item of items){
//     item.addEventListener('click', function(myEvent){
//         myEvent.target.parentNode.removeChild(myEvent.target);
//     });
// }

document.getElementById('list-container').addEventListener('click', function(myEvent){
    myEvent.target.parentNode.removeChild(myEvent.target);
});



document.getElementById('btn-add-item').addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerText = 'Item add by JavaScript';
    li.classList.add('item');
    document.getElementById('list-container').appendChild(li);
});







 





