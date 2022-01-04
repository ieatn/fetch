const picture = document.querySelector('.picture')
const catBtn = document.querySelector('#catBtn')
const dogBtn = document.querySelector('#dogBtn')

catBtn.addEventListener('click', getRandomCat)
dogBtn.addEventListener('click', getRandomDog)

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            picture.innerHTML = `<img src = "${data.file}"/>`
        })
}
function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog()
            } else {
                picture.innerHTML = `<img src = "${data.url}"/>`
            }
        })
}