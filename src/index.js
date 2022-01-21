const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('input#searchByID')
    console.log(input.value)
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(data => {
      const title = document.querySelector('h4')
      title.textContent = data.title
      const summary = document.querySelector('section#movieDetails p')
      summary.textContent = data.summary
    })
    inputForm.reset()
  })
}

document.addEventListener('DOMContentLoaded', init);