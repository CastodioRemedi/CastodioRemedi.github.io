export function sidebar() {
  const openSidebar = document.querySelector('.menu-select-menu')
  const closeSidebar = document.querySelector('.cross-btn')
  const toggleSidebar = document.querySelector('.sidebar')
  const toggleBlur = document.querySelector('.main-inform-blur')

  openSidebar.addEventListener('click', function () {
    toggleSidebar.classList.add('sidebar--active')
    toggleBlur.classList.toggle('main-inform-blur--active-blur')
  })

  closeSidebar.addEventListener('click', function () {
    toggleSidebar.classList.remove('sidebar--active')
    toggleBlur.classList.toggle('main-inform-blur--active-blur')
  })

  toggleBlur.addEventListener('click', function () {
    toggleSidebar.classList.remove('sidebar--active')
    toggleBlur.classList.toggle('main-inform-blur--active-blur')
  })
}
