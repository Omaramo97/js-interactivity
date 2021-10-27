console.log('hello world')

const message = document.querySelector('#message')

function addmovie(e){
    e.preventDefault()
const inputField = document.querySelector('input')

const movie = document.createElement('li')

const movieTitle = document.createElement("span")
movieTitle.textContent = inputField.value
movie.addEventListener('click' , crossOffMovie)
movie.appendChild(movieTitle)

const deletebtn = document.createElement("button")
deletebtn.textContent = "x"
deletebtn.addEventListener('click', deleteMovie)
movie.appendChild(deletebtn)

const movieList = document.querySelector('ul')
movieList.appendChild(movie)
inputField.value=''
}

document.querySelector('form').addEventListener('submit', addmovie)


function deleteMovie(e){
    e.target.parentNode.remove()
    message.textContent='Movie Deleted!'
}

function crossOffMovie(e) {
    e.target.classList.toggle('checked')
    if (e.target.classList.contains === true){
        message.textContent = 'Watched'
    } else {
        message.textContent = 'Movie added back'
    }
}