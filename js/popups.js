document.addEventListener("DOMContentLoaded", function() {
  let openPopup = document.querySelectorAll('[data-open-popup]')
  let popupShadow = document.querySelector('.popup-background')
  let popupClose = document.querySelectorAll('[data-close-popup]')
  let transactionPopupBtn = document.querySelectorAll('[data-open-transaction-popup]')

  if (openPopup) { openPopup.forEach(item => item.addEventListener('click', openPopupFunction)) }
  if (popupClose) { popupClose.forEach(item => item.addEventListener('click', closePopupFunction)) }
  if (transactionPopupBtn) { transactionPopupBtn.forEach(popup => popup.addEventListener('click', openTransactionPopup)) }


  function openPopupFunction() {
    let target = document.querySelector('#' + item.getAttribute('data-open-popup'))
    let btns = document.querySelectorAll('header .btn.mobile-only')
    target.style.display = 'block'
    popupShadow.style.display = 'block'
    setTimeout(function() {
      target.classList.add('show')
      popupShadow.classList.add('show')
      btns.forEach(btn => {
        btn.classList.remove('show')
        btn.setAttribute('data-active', "second")

        if (btn.getAttribute('data-close-popup') === item.getAttribute('data-open-popup')) {
          btn.classList.add('show')
          btn.setAttribute('data-active', true)
        }
      })
    }, 10)
  }
  function closePopupFunction() {
    let target = document.querySelector('#' + this.getAttribute('data-close-popup'))
    let deleteBg = this.getAttribute('data-delete-bg')
    let planetIso = this.getAttribute('data-iso') // для транзакций, для удаления класса
    if (deleteBg !== 'false') popupShadow.classList.remove('show')
    target.classList.remove('show')

    setTimeout(function() {
      target.style.display = ''
      if (deleteBg !== 'false') popupShadow.style.display = ''
    }, 500)

    if (this.getAttribute('data-close-popup') === 'transactionPopup') { //Если была транзакция, удаляем доп класс
      document.querySelector('.root').classList.remove('transaction-confirmed-' + planetIso)
    }

      let btns = document.querySelectorAll('header .btn.mobile-only')
      let btnClose = document.querySelector( `[data-close-popup="${this.getAttribute('data-close-popup')}"]` )
      btnClose.setAttribute('data-active', false)
      btnClose.classList.remove('show')
      setTimeout(function() {
        btns.forEach(btn => {
          if (btn.getAttribute('data-active') === 'second') {
            btn.classList.add('show')
            btn.setAttribute('data-active', true)
          }
        })
      }, 500)
  }
  function openTransactionPopup() {
    let target = document.querySelector('#' + this.getAttribute('data-open-transaction-popup'))
    let transactionLoader = document.querySelector('#transactionLoaderPopup')
    let planetName = this.getAttribute('data-name')
    let planetIso = this.getAttribute('data-iso')
    let root = document.querySelector('.root')
    let closeTransactionPopupBtn = target.querySelector('.popup-close')
    closeTransactionPopupBtn.setAttribute('data-iso', planetIso)
    transactionLoader.style.display = 'block'
    popupShadow.style.display = 'block'
    setTimeout(function() {
      transactionLoader.classList.add('show')
      popupShadow.classList.add('show')

      // Подключаем попап congrats после загрузки
      setTimeout(function() {
        transactionLoader.classList.remove('show')
        root.classList.add('transaction-confirmed-' + planetIso)
        target.style.display = 'block'
        target.querySelector('.planet-name').innerHTML = planetName
        setTimeout(function() {
          transactionLoader.style.display = ''
          target.classList.add('show')
        }, 10)
      }, 4000)
    }, 10)
  }
})
