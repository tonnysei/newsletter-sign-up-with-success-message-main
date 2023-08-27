const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const heroElement = document.getElementById('heroContainer')
const responseElement = document.getElementById('responseContainer')

const submitEmail = () => {
  const emailInput = document.querySelector('.hero__input-bar')
  let email = emailInput.value
  
  if(regex.test(email)) {
    emailInput.classList.remove('input-error')
    document.querySelector('.errorMessage').innerHTML = ""

    document.querySelector('.response__description').innerHTML = `A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.`

    heroElement.classList.add('invisible__container')
    responseElement.classList.remove('invisible__container')
    
  } else {
    emailInput.classList.add('input-error')
    document.querySelector('.errorMessage').innerHTML = "invalid input"
  }
}

document.querySelector('.hero__subscribe-btn').addEventListener('click', () => {
  submitEmail()
})

