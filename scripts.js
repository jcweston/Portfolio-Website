function buttonHandler(box, button, isClicked) {
    clickObj[isClicked] =! clickObj[isClicked]
    box.setAttribute('class','visible , box')
    if (clickObj[isClicked]==true){
        button.setAttribute('class','sidebar-button , sidebar-button-clicked')
    } else {
        button.setAttribute('class','sidebar-button')
        box.setAttribute('class','hidden , box')
    }
}

function setProgress(progress, slider){
    slider.style.width = progress
}

const clickObj = {
    'aboutClicked':true,
    'picturesClicked':false,
    'projectsClicked':false,
    'contactClicked':false,
    'studiesClicked':false

}
const aboutButton = document.getElementById('about-button')
const aboutBox = document.getElementById('about-box')
aboutButton.addEventListener('click', () => {
    return buttonHandler(aboutBox, aboutButton, 'aboutClicked')}
)

const picturesButton = document.getElementById('pictures-button')
const picturesBox = document.getElementById('pictures-box')
picturesButton.addEventListener('click', () => {
    return buttonHandler(picturesBox, picturesButton, "picturesClicked")}
)

const projectsButton = document.getElementById('projects-button')
const projectsBox = document.getElementById('projects-box')
projectsButton.addEventListener('click', () => {
    return buttonHandler(projectsBox, projectsButton, "projectsClicked")}
)

const contactButton = document.getElementById('contact-button')
const contactBox = document.getElementById('contact-box')
contactButton.addEventListener('click', () => {
    return buttonHandler(contactBox, contactButton, "contactClicked")}
)

const studiesButton = document.getElementById('studies-button')
const studiesBox = document.getElementById('studies-box')
studiesButton.addEventListener('click', () => {
    return buttonHandler(studiesBox, studiesButton, "studiesClicked")}
)

const jsProgress = document.getElementById('JS-progress').textContent
const jsSlider = document.getElementById('JS-slider')
setProgress(jsProgress,jsSlider)

const htmlProgress = document.getElementById('HTML-progress').textContent
const htmlSlider = document.getElementById('HTML-slider')
setProgress(htmlProgress,htmlSlider)

const cssProgress = document.getElementById('CSS-progress').textContent
const cssSlider = document.getElementById('CSS-slider')
setProgress(cssProgress,cssSlider)