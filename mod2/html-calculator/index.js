const form = document.myForm



form.addEventListener('submit', function(event){
    event.preventDefault()

    const addNum1 = parseFloat(form.addNum1.value)
    const addNum2 = parseFloat(form.addNum2.value)
    form.addNum1.value = ''
    form.addNum2.value = ''

    const plus = document.getElementById('sum')

    plus.textContent = (addNum1 * addNum2)

    plus.style.color = 'red'
})

form.addEventListener('submit', function(event){
    event.preventDefault()

    const subNum1 = parseFloat(form.subNum1.value)
    const subNum2 = parseFloat(form.subNum2.value)
    form.subNum1.value = ''
    form.subNum2.value = ''

    const minus = document.getElementById('diff')

    minus.textContent = (subNum1 * subNum2)

    minus.style.color = 'blue'
})

form.addEventListener('submit', function(event){
    event.preventDefault()

    const multNum1 = parseFloat(form.multNum1.value)
    const multNum2 = parseFloat(form.multNum2.value)
    form.multNum1.value = ''
    form.multNum2.value = ''

    const times = document.getElementById('product')

    times.textContent = (multNum1 * multNum2)

    times.style.color = 'purple'
})