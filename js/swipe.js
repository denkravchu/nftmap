window.addEventListener('load', function() {
  // Переключение планет на главном экране -------------------------
  const mobileCarousel = {
    planets: ['earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'sun', 'mercury', 'venus'],
    activeIndex: 0
  }
  let readyToSwipe = true
  detectSwipe('swipe', (root, direction) => {
    if (root.classList.contains('zoom-out') && window.outerWidth < 799 && readyToSwipe) {

      readyToSwipe = false
      setTimeout(function() {
        readyToSwipe = true
      }, 0)

      switch ( direction ) {
        case 'left':
        swipePlanet(root, mobileCarousel, 1)
        break
        case 'right':
        swipePlanet(root, mobileCarousel, -1)
        break
      }
    }
  })
})

function swipePlanet(root, mobileCarousel, step) {
  const previousIndex = mobileCarousel.activeIndex
  let newIndex = mobileCarousel.activeIndex + step
  if ( newIndex < 0 ) newIndex = mobileCarousel.planets.length - 1
  if ( newIndex === mobileCarousel.planets.length ) newIndex = 0
  mobileCarousel.activeIndex = newIndex

  const previousPlanetName = mobileCarousel.planets[previousIndex]
  const newPlanetName = mobileCarousel.planets[newIndex]

  root.classList.add('planet-mobile-active-' + newPlanetName)
  root.classList.remove('planet-mobile-active-' + previousPlanetName)
}
function detectSwipe(id, func, deltaMin = 90) {
  const swipe_det = {
    sX: 0,
    sY: 0,
    eX: 0,
    eY: 0
  }
  // Directions enumeration
  const directions = Object.freeze({
    UP: 'up',
    DOWN: 'down',
    RIGHT: 'right',
    LEFT: 'left'
  })
  let direction = null
  const el = document.getElementById(id)
  el.addEventListener('touchstart', function(e) {
    const t = e.touches[0]
    swipe_det.sX = t.screenX
    swipe_det.sY = t.screenY
    swipe_det.eX = swipe_det.sX
    swipe_det.eY = swipe_det.sY
  }, false)
  el.addEventListener('touchmove', function(e) {
    // Prevent default will stop user from scrolling, use with care
    // e.preventDefault();
    const t = e.touches[0]
    swipe_det.eX = t.screenX
    swipe_det.eY = t.screenY
  }, false)
  el.addEventListener('touchend', function(e) {
    const deltaX = swipe_det.eX - swipe_det.sX
    const deltaY = swipe_det.eY - swipe_det.sY

    // Min swipe distance, you could use absolute value rather
    // than square. It just felt better for personnal use
    if (deltaX ** 2 + deltaY ** 2 < deltaMin ** 2) return
    // horizontal
    if (deltaY === 0 || Math.abs(deltaX / deltaY) > 1)
      direction = deltaX > 90 ? directions.RIGHT : directions.LEFT
    else // vertical
      direction = deltaY > 90 ? directions.UP : directions.DOWN

    if (direction && typeof func === 'function') func(el, direction)

    direction = null
  }, false)
}
