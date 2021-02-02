let form = document.myForm


form.addEventListener('submit', function(event){
    event.preventDefault()
    
    let goombas = form.Goomba.value
    let bomb = form.Bomb.value
    let hammer = form.Hammer.value

    let goombaCost = goombas * 5
    let bombCost = bomb * 7
    let hammerCost = hammer * 11

    let total = goombaCost + bombCost + hammerCost

    alert(`You owe Mario ${total} coins for his services to the Kingdom`)
})