/*
Credits: Tania Rascia: https://github.com/taniarascia
Tutorial: https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
Loading in JSON (Javascript object notation) through API (Application programming interface)

Note: This repo is based of a tutorial written by Tania Rascia.
However, in the tutorial they still make use of XHR objects(XMLHttpRequest JavaScript ES5)
So I decided to update the code using the fetch() API (JavaScript ES6)
*/




//fetch way
var app = document.getElementById('root')

var logo = document.createElement('img')

logo.src = 'logo.png'

const container = document.createElement('div')

 container.setAttribute('class','container')

app.appendChild(logo)
app.appendChild(container)


async function getMovies(){

    // set up the fetch
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const movies = await response.json()

        movies.forEach(movie => {

            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = movie.title;

            const h2 = document.createElement('h2')
            h2.textContent = movie.original_title;

            const p = document.createElement('p')
            
            //Limit to 300 chars
            //End with Ellipses
            movie.description = movie.description.substring(0,300)
            p.textContent = `${movie.description}...`

            const span = document.createElement('span')
            span.textContent = `Director: ${movie.director}`;
            
            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(h2)
            card.appendChild(p)
            card.appendChild(span)
        });   

}
        
getMovies();




