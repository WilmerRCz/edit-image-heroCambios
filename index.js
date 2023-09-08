const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let valorIngresado; // Declara la variable

rl.question('Por favor, ingresa un valor: ', (input) => {
  valorIngresado = input // Asigna el valor a la variable
  console.log(`Ingresaste: ${valorIngresado}`)
  rl.close()
})

// Ruta de la imagen que deseas modificar
const imagePath = 'public/hero-photo.jpg'

// Crear un nuevo canvas
const canvas = createCanvas(800, 600)
const context = canvas.getContext('2d')

// Cargar la imagen
loadImage(imagePath).then(image => {
  // Asignar el ancho y alto del canvas al de la imagen
  canvas.width = image.width
  canvas.height = image.height

  // Dibujar la imagen en el canvas
  context.drawImage(image, 0, 0)

  // Agregar texto en una ubicación específica
  context.font = '50px Arial'
  context.fillStyle = '#000000'


  context.fillText('777.24', 270, 385)
  context.fillText('789.52', 270, 510)
  context.fillText('789.52', 270, 635)
  context.fillText('789.52', 270, 760)
  context.fillText('789.52', 270, 885)

  // Guardar la imagen modificada en disco
  const outputImagePath = 'public/dayPhoto/prueba.jpg'
  const out = fs.createWriteStream(outputImagePath)
  const stream = canvas.createJPEGStream()
  stream.pipe(out)
  out.on('finish', () => {
    console.log('Imagen modificada guardada con éxito.')
  })
}).catch(error => {
  console.log('Ocurrió un error al cargar la imagen:', error)
});
