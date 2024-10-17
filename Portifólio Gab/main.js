const home = document.getElementById('home')
const main = document.getElementById('main')
const end = document.getElementById('end')

home.addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({behavior: "smooth"})
})
main.addEventListener('click', () => {
    document.querySelector('.me').scrollIntoView({behavior: "smooth"})
})
end.addEventListener('click', () => {
    document.getElementById('footer').scrollIntoView({behavior: "smooth"})
})