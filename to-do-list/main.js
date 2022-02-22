const btn = document.getElementById('btnID')
const input = document.getElementById('inputID')
const content = document.getElementById('toDoContainerID')

btn.addEventListener('click', function (e) {
    var toDoInput = document.getElementById('inputID').value // Making the input a string  with ".value"

    if (toDoInput !== "") { // If input is (!==) not empty do the following

        var toDoList = document.createElement('div');
        content.appendChild(toDoList) // apending "div" to content/container

        var toDoText = document.createElement('p')
        toDoText.innerText = input.value // Anything typed on the input LOwill show in the content
        toDoList.appendChild(toDoText) // apending "p" to div element we just created

        var toDoDel = document.createElement('span')
        toDoDel.innerText = "🗑️"
        toDoList.appendChild(toDoDel) // apending "span" element to "div" element we just created. The "Span" element has a content with "🗑️"

        input.value = "";
    } else {
        alert('Please provide to do list') // if input is empyt alert the user
    }

    toDoText.addEventListener('click', function () { 
        if (toDoText.style.textDecoration == 'line-through') { // If the the to do text has "line-through" 
            toDoText.style.textDecoration = 'none' // remove the "line-through" textDecoration styling
        } else {
            toDoText.style.textDecoration = 'line-through' // if the to do text does not have line-through we add the "line-through" text decoration
        }
    })


    toDoDel.addEventListener('click', function () {
        if (toDoText.style.textDecoration == 'line-through') { // if the text has "line-through" when we click on the delete btn we will remove the toDoList
            toDoList.remove()
        } else if (toDoText.style.textDecoration !== 'line-through') {
            alert(`Did you finish your task?`) // if the text does not "line-through" when clicked on the delete btn an alert will pop up
        }
    })


})


