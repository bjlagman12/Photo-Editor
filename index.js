console.log('initial test')

const loadFile = (event) => {
  let image = document.querySelector('.output')
  let controls = document.querySelector('.controls')

  image.src = URL.createObjectURL(event.target.files[0])

  //unhide controls
  controls.style.display = 'flex'
  image.style.display = 'block'

}

const inputs = document.querySelectorAll('.controls input')

const handleUpdate = (e) => {
  let change = e.target.value; 
  let unit = e.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${e.target.name}`, change + unit)
}

// const saveImage = () => {
//   var
// }


inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))