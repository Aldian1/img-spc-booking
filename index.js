$(() => {

  const pages = [
    $('#page-1'),
    $('#page-2'),
    $('#page-3'),
    $('#page-4'),
    $('#page-5'),
    $('#page-6')
  ]

  const confirms = [
    $('#confirm-1'),
    $('#confirm-2'),
    $('#confirm-3'),
    $('#confirm-4'),
    $('#confirm-5'),
    $('#confirm-6')
  ]

  const backArrows = [
    $('#back-arrow-2'),
    $('#back-arrow-3'),
    $('#back-arrow-4'),
    $('#back-arrow-5')
  ]

  confirms.forEach(($confirm, i) => {
    $confirm.on('click', () => {
      pages[i].removeClass('show')
      if (i === pages.length - 1) {
        pages[0].addClass('show')
      } else {
        pages[i + 1].addClass('show')
      }
    })
  })

  backArrows.forEach(($backArrow, i) => {
    $backArrow.on('click', () => {
      pages[i + 1].removeClass('show')
      pages[i].addClass('show')
    })
  })

  const $practitioners = $('.practitioner')

  $practitioners.each(function() {
    $(this).on('click', () => {
      pages[1].removeClass('show')
      pages[2].addClass('show')
    })
  })

  setupCalendar(30, 4)

  reAddOutlineOnMouseMove()

})

function setupCalendar (days, offset) {
  const $calendarGrid = $('#calendar-grid')

  for (let i = 1; i <= days; i++) {
    $calendarGrid.append($(`<div class="calendar-day"><div class="calendar-date">${i}</div></div>`))
  }

  $calendarGrid.children().eq(7).css("grid-column-start", `${offset}`)
}

function reAddOutlineOnMouseMove () {
  window.addEventListener('mousemove', () => {
    $("body").removeClass('user-is-tabbing')
  })
}
