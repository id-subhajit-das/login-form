const body = document.querySelector('body')
const container = document.createElement('div')
const divWrap = document.createElement('div')
const heading = document.createElement('h1')
const eyeOn = document.createElement('img')
const userLogo = document.createElement('div')


divWrap.className="divWrap"
container.className="container"
userLogo.className="user-logo"


userLogo.style.backgroundImage="url('./user.png')"
container.appendChild(userLogo)


heading.innerHTML="Login User"
heading.className="heading"
container.appendChild(heading)

const inputText = document.createElement('input')
inputText.setAttribute('type','text')
inputText.placeholder="Enter your name"
inputText.className="input-text"
container.appendChild(inputText)



const inputPassword = document.createElement('input')
inputPassword.setAttribute('type','password')
inputPassword.placeholder="Enter your password"
inputPassword.className="input-password"
divWrap.appendChild(inputPassword)

const eyeButton = document.createElement('button')
 eyeButton.className="eye-button"
// eyeOn.setAttribute('src','./eye-slash.svg')
// eyeOn.width="20"
// eyeButton.onclick=()=>{
//     eyeOn.src=inputPassword.type==='password'?'./eyeOn.svg':'./eye-slash.svg'
//     inputPassword.type=inputPassword.type==='password'?'text':'password'
// }

eyeOn.setAttribute('src','')
eyeOn.width="20"
inputPassword.addEventListener('input',(e)=>{
    const inputValue=inputPassword.value
   
    if(e.inputType=='insertText'){
    eyeOn.setAttribute('src','./eye-slash.svg')
    eyeButton.onclick=()=>{
    eyeOn.src=inputPassword.type==='password'?'./eyeOn.svg':'./eye-slash.svg'
    inputPassword.type=inputPassword.type==='password'?'text':'password'
            }
        }
    else if(inputValue===''){
    eyeOn.setAttribute('src','')
        }
})

eyeButton.appendChild(eyeOn)
divWrap.appendChild(eyeButton)

const submitButton = document.createElement('button')
submitButton.innerHTML="Log in"
submitButton.className="submit-button"

container.appendChild(divWrap)
container.appendChild(submitButton)
body.appendChild(container)
