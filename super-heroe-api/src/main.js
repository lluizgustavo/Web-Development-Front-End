const img = document.querySelector('#hero-img')
const h3 = document.querySelector('#super-hero-id')
const button = document.querySelector('#button')

button.addEventListener('click', () => {
    const id = generateHeroId()
    fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`ERROR: ${response.status}. The ID who was generated is invalid (ID: ${id}). Try it again`)
        }
        return response.json()
    })
    .then((data) => {
        renderImg(data.images.sm)
        renderName(data.name)
    })
    .catch((error) => alert(error.message))
});

function generateHeroId() {
    const id = Math.floor(Math.random() * 731);
    return id; 
};

function renderName (param) {
    h3.innerHTML = param;
};

function renderImg (param) {
    img.src = param;
}