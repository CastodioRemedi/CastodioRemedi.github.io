export function sliderSwiper() {
  // Swiper
  let catalogSlider = null
  let catalogSliderSecond = null
  let catalogSliderThird = null
  const mediaQuerySize = 768

  const showBtn = document.querySelector('.show-more')
  const hideBtn = document.querySelector('.hide-all')

  const myClientWidth = document.documentElement.clientWidth

  const showBtnTech = document.querySelector('.show-more-technique')
  const hideBtnTech = document.querySelector('.hide-all-technique')

  const brandBlock = document.querySelector('.swiper-container-brand')
  const texhBlock = document.querySelector('.swiper-container-technique')

  catalogSliderInit()
  window.addEventListener('resize', checkMediaSize)
  checkMediaSize()

  function checkMediaSize() {
    // Если ширина экрана меньше mediaQuerySize
    if (document.documentElement.clientWidth < mediaQuerySize) {
      // Инициализировать слайдер если он ещё не был инициализирован
      // Скрыть кнопки показать / скрыть
      catalogSliderInit()
      hideBtns()
      texhBlock.style.maxHeight = '200px'
    } else {
      // Уничтожить слайдер если он был инициализирован
      // Показать кнопки показать / скрыть
      catalogSliderDestroy()
      showBtns()
    }
  }

  function catalogSliderInit() {
    if (!catalogSlider) {
      catalogSlider = new Swiper('.swiper-container-brand', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }

    if (!catalogSliderSecond) {
      catalogSliderSecond = new Swiper('.swiper-container-technique', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination-technique',
          clickable: true
        }
      })
    }

    if (!catalogSliderThird) {
      catalogSliderThird = new Swiper('.swiper-container--prices', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination--prices',
          clickable: true
        }
      })
    }
  }

  function catalogSliderDestroy() {
    if (catalogSlider) {
      catalogSlider.destroy()
      catalogSlider = null
    }

    if (catalogSliderSecond) {
      catalogSliderSecond.destroy()
      catalogSliderSecond = null
    }

    if (catalogSliderThird) {
      catalogSliderThird.destroy()
      catalogSliderThird = null
    }
  }

  // Показать / скрыть
  showBtn.addEventListener('click', function () {
    if (myClientWidth >= 768) {
      brandBlock.classList.add('swiper-container-brand--active')
      showBtn.classList.toggle('show-more--none')
      hideBtn.classList.toggle('hide-all--active')
    }
  })

  hideBtn.addEventListener('click', function () {
    if (myClientWidth >= 768) {
      brandBlock.classList.remove('swiper-container-brand--active')
      showBtn.classList.toggle('show-more--none')
      hideBtn.classList.toggle('hide-all--active')
    }
  })

  showBtnTech.addEventListener('click', function () {
    if (myClientWidth >= 768) {
      texhBlock.classList.add('swiper-container-technique--active')
      showBtnTech.classList.toggle('show-more-technique--none')
      hideBtnTech.classList.toggle('hide-all-technique--active')
    }
  })

  hideBtnTech.addEventListener('click', function () {
    if (myClientWidth >= 768) {
      texhBlock.classList.remove('swiper-container-technique--active')
      showBtnTech.classList.toggle('show-more-technique--none')
      hideBtnTech.classList.toggle('hide-all-technique--active')
    }
  })

  function hideBtns() {
    showBtn.classList.add('show-more--none')
    hideBtn.classList.remove('hide-all--active')
    hideBtnTech.classList.remove('hide-all-technique--active')
    showBtnTech.classList.add('show-more-technique--none')
  }

  function showBtns() {
    showBtn.classList.remove('show-more--none')
    showBtnTech.classList.remove('show-more-technique--none')
  }
}
