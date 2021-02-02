document.body.style.backgroundColor = 'gray'
var box = document.getElementById('box');
box.style.backgroundColor = 'black';
box.addEventListener('mouseover', function(){
    box.style.backgroundColor = 'blue';
    })
box.addEventListener('mousedown', function(){
    box.style.backgroundColor = 'red'
})
box.addEventListener('mouseup', function(){
    box.style.backgroundColor = 'yellow'
})
box.addEventListener('dblclick', function(){
    box.style.backgroundColor = 'green'
})
box.addEventListener('wheel', function(){
    box.style.backgroundColor = 'orange'
})

box.style.width = '20%'
box.style.height = '20%'
box.style.left = '40%'
box.style.top = '40%'
box.style.position = 'fixed'
