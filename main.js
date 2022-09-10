const iconMenu = document.querySelector('.bx-menu');
const menu = document.querySelector('#deployMenu');
const btnHome = document.querySelector("#btn-home");
const btnAbout = document.querySelector("#btn-about");
const btnSkills = document.querySelector("#btn-skills");
const btnContact = document.querySelector("#btn-contact");
const hiddenNav = document.querySelector('#hiddenNav');
const hiddenNavBar = document.querySelector('#hiddenNavBar')

iconMenu.addEventListener('click', (e) => {
    menu.classList.toggle('deployMenu');
})


    btnHome.addEventListener('click', (e) => {
        if(e.target) {
            menu.classList.toggle('deployMenu');   
        }

    })
    
    btnAbout.addEventListener('click', (e) => {
        if(e.target) {
            menu.classList.toggle('deployMenu');   
        }

    }) 

    btnSkills.addEventListener('click', (e) => {
        if(e.target) {
            menu.classList.toggle('deployMenu');   
        }

    }) 

    btnContact.addEventListener('click', (e) => {
        if(e.target) {
            menu.classList.toggle('deployMenu');   
        }

    }) 
    
    window.addEventListener('scroll', () => {
        if(window.scrollY >= 50) {
            hiddenNav.classList.add('hiddenNav')
            
        } else {
            hiddenNav.classList.remove('hiddenNav')
        }
    })

 


