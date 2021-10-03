// attaching event to the form

const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')


form.addEventListener('submit', e => {
    // prevent from the browser from refreshing
    e.preventDefault();
    // getting the value from the form
    const username = form.username.value
    const usernamePattern = /^[a-z]{6,}$/

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = "username is valid"
    } else {
        // feedback help info
        feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long'
    }
})

