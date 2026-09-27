const randomDog = document.querySelector('.random-dog')
const randomCat = document.querySelector('.random-cat')
const surpriseMe = document.querySelector('.surprise-me')
const img = document.querySelector('#img')

const dogImageAPI = 'https://dog.ceo/api/breeds/image/random';
const catImageAPI = "https://api.thecatapi.com/v1/images/search"

randomDog.addEventListener('click', () => {
    fetch(dogImageAPI)
        .then((response) => response.json())
        .then((data) => {
            renderImg(data.message);
        })
});

randomCat.addEventListener('click', () => {
    fetch(catImageAPI)
        .then((response) => response.json())
        .then((data) => {
            renderImg(data[0].url);
        })
});

surpriseMe.addEventListener('click', () => {
    Promise.any([getDogImg(), getCatImg()])
        .then((url) => {
            renderImg(url)
        })
        .catch(() => {
            alert('ERROR 404. Image not found. Try again...')
        })
});

function renderImg(param) {
    img.src = param;
}

function randomAnimal (param) {
    img.src = param;
}

function getDogImg () {
    return fetch(dogImageAPI)
    .then((response) => {
        if(!response.ok) {
            throw new Error(`Erro: ${response.status}`)
        }
        return response.json()
    })
    .then((data) => data.message)
}

function getCatImg ()  {
    return fetch(catImageAPI)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`Erro: ${response.status})`)
            }
            return response.json()
        })
        .then((data) => data[0].url)
}

