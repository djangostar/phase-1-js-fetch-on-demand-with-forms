const init = () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById('searchByID')
    console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
   .then(res => res.json())
   .then(data => {
     const title = document.querySelector('section#movieDetails h4')
     const summary = document.querySelector('section#movieDetails p')
     debugger;
     title.textContent = data.title;
     summary.textContent = data.summary
   }) 
  })
}

document.addEventListener('DOMContentLoaded', init);