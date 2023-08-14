let regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

const submitEmail = () => {
  let emailInput = document.querySelector('.hero__input-bar')
  let email = emailInput.value
  
  if(regex.test(email)) {
    emailInput.classList.remove('input-error')
    document.querySelector('.errorMessage').innerHTML = ""
    document.querySelector('body').innerHTML = `
    <div class="container">
      <div class="response">
        <div class="response__logo-container">
          <svg class="response__logo" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
        </div>

        <h1 class="response__title">Thanks for subscribing!</h1>

        <p class="response__description">
          A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.
        </p>

        <button class="response__btn">Dismiss message</button>
      </div>

        
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/tonnysei">Seif Telmini</a>.
      </div>
    </div>
    `
  } else {
    emailInput.classList.add('input-error')
    document.querySelector('.errorMessage').innerHTML = "invalid input"
  }
}

document.querySelector('.hero__subscribe-btn').addEventListener('click', () => {
  submitEmail()
})

