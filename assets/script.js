const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

console.log('test')

const mot = 'test1'

const chiffre = 2

const nombre = 33

console.log(mot)

console.log(chiffre)

console.log(nombre)

const addition = chiffre + nombre

console.log(addition)

console.log(slides)

slides.forEach((item, index) => {
	console.log("image:", item.image)
	console.log("tagLine:", item.tagLine)
	console.log('index:', index)
})

for (let i = 0; i < slides.length; i++) {
	console.log("image:", slides[i].image)
	console.log("tagLine:", slides[i].tagLine)
	console.log('index:', i)
}
