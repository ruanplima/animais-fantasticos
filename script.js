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