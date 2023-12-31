function initTabNav() {

    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')


    if (tabContent.length && tabMenu.length) {

        tabContent[0].classList.add('ativo')

        function activeTab(index) {

            tabContent.forEach((i) => {
                i.classList.remove('ativo')
            })

            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((img, index) => {
            img.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
initTabNav()

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')

    if (accordionList.length) {
        accordionList[0].classList.add('ativo')
        accordionList[0].nextElementSibling.classList.add('ativo')

        function activeAccordion() {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}
initAccordion()

function initScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }


    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollSection)
    })
}
initScroll()