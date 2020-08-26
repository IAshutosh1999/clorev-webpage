const men = document.querySelector('#men')
const women = document.querySelector('#women')
const kids = document.querySelector('#kids')
const household = document.querySelector('#household')
const table = document.querySelector('#table')
const table1 = document.querySelector('#table-1')

const navBtn = document.querySelector('#nav-btn')
const closeBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('#sidebar')

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})

men.addEventListener('click', function (e) {
  table1.classList.remove('show-items')
  e.preventDefault()
  if (!table.classList.contains('show-items')) {
    table.classList.add('show-items')
  } else {
    table.classList.remove('show-items')
  }
})
women.addEventListener('click', function (e) {
  table1.classList.remove('show-items')
  e.preventDefault()
  if (!table.classList.contains('show-items')) {
    table.classList.add('show-items')
  } else {
    table.classList.remove('show-items')
  }
})
kids.addEventListener('click', function (e) {
  table1.classList.remove('show-items')
  e.preventDefault()
  if (!table.classList.contains('show-items')) {
    table.classList.add('show-items')
  } else {
    table.classList.remove('show-items')
  }
})
household.addEventListener('click', function (e) {
  e.preventDefault()
  table.classList.remove('show-items')
  if (!table1.classList.contains('show-items')) {
    table1.classList.add('show-items')
  } else {
    table1.classList.remove('show-items')
  }
})
