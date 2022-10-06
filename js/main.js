const load = document.querySelector('.load')
const spinnerBorder = document.querySelector('.spinner-border')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelectorAll('.btn')
const submit = document.querySelector('.submit')
const four = document.querySelector('.four')
const first = document.querySelector('.first')

const closeIcon = () => {
    load.style.display = 'none'
    spinnerBorder.style.display = 'none'
}


const waitingPage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            closeIcon()
            resolve()
        }, 2000)
    })
}


const servPage = () => {
    return new Promise((resolve) => {
        resolve()
        second.style.display = 'flex'
    })
}


async function someAsyncFunction() {
    await waitingPage()
    await servPage()
}

someAsyncFunction()


btn.forEach(btnopen => btnopen.addEventListener('click', () => {
    second.style.display = 'none'
    third.style.display = 'block'
}))


