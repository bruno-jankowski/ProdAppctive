var itemNotes = document.getElementsByClassName('notes')[0]
itemNotes.value = localStorage.getItem('notes')

var itemSumbit = document.getElementsByClassName('submit-notes')[0]
var itemReset = document.getElementsByClassName('reset-notes')[0]

var itemInfoNote = document.getElementsByClassName('info')[0]

itemReset.addEventListener('click', function(){
    localStorage.setItem('notes', '...')
    location.reload()
})

itemSumbit.addEventListener('click', function(){
    localStorage.setItem('notes', itemNotes.value)
    location.reload()
})

var clickCount = 0
var itemCSButton = document.getElementsByClassName('cs-add-notes')[0]
itemCSButton.addEventListener('click', function(){
    clickCount ++
    
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('cs-notes')
        itemInfoNote.innerText = 'note opened ' + itemCSButton.value
        
    }
    else if(clickCount == 2){
        localStorage.setItem('cs-notes', itemNotes.value)
        itemInfoNote.innerText = 'note sent to' + itemCSButton.value
        clickCount = 0
        itemNotes.value = '...'
        location.reload
    }
})

var clickCount = 0
var itemMathButton = document.getElementsByClassName('math-add-notes')[0]
itemMathButton.addEventListener('click', function(){
    clickCount ++
    console.log(clickCount);
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('math-notes')
        itemInfoNote.innerText = 'note opened'
        
    }
    else if(clickCount == 2){
        localStorage.setItem('math-notes', itemNotes.value)
        itemInfoNote.innerText = 'note sent'
        clickCount = 0
        itemNotes.value = '...'
        location.reload
    }
})

var clickCount = 0
var itemVAButton = document.getElementsByClassName('va-add-notes')[0]
itemVAButton.addEventListener('click', function(){
    clickCount ++
    console.log(clickCount);
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('va-notes')
        itemInfoNote.innerText = 'note opened'
        
    }
    else if(clickCount == 2){
        localStorage.setItem('va-notes', itemNotes.value)
        itemInfoNote.innerText = 'note sent'
        clickCount = 0
        itemNotes.value = '...'
        location.reload
    }
})

var clickCount = 0
var itemEnglishButton = document.getElementsByClassName('eng-add-notes')[0]
itemEnglishButton.addEventListener('click', function(){
    clickCount ++
    console.log(clickCount);
    if(clickCount == 1){
        itemNotes.value = localStorage.getItem('eng-notes')
        itemInfoNote.innerText = 'note opened'
        
    }
    else if(clickCount == 2){
        localStorage.setItem('eng-notes', itemNotes.value)
        itemInfoNote.innerText = 'note sent'
        clickCount = 0
        itemNotes.value = '...'
        location.reload
    }
})

var itemPsychoButton = document.getElementsByClassName('psycho-add-notes')[0]
itemPsychoButton.addEventListener('click', function(){
    localStorage.setItem('psycho-notes', itemNotes.value)
    location.reload
})

var itemPlButton = document.getElementsByClassName('pl-add-notes')[0]
itemPlButton.addEventListener('click', function(){
    localStorage.setItem('pl-notes', itemNotes.value)
    location.reload
})



/*
var subjectsButoons = [itemCSButton, itemMathButton, itemVAButton, itemEnglishButton, itemPsychoButton , itemPlButton]
var subjectsNotes = ['cs-notes','math-notes','va-notes','eng-notes', 'psycho-notes', 'pl-notes']

console.log(subjectsButoons);

for(var i = 0; i<subjectsButoons.length; i++){
    var button = subjectsButoons[i]
    button.setAttribute('data-index', i)
    button.addEventListener('click', function(event){
        var button_click = event.target
        var index = button_click.getAttribute('data-index')
        var value = subjectsNotes[index].toString()
        console.log(value);
        localStorage.setAttribute(value, itemNotes.value)
    })
}*/