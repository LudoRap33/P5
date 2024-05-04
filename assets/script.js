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

const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.getElementById('arrow_right')
const dost = document.querySelector('.dots')


let indexSlide = 0


// événement au click sur l'élément image avec la classe arrow_left
arrowLeft.addEventListener('click', () => {
	// affiche dans la console 'click gauche'
	console.log('click gauche')

	indexSlide = indexSlide - 1
	
	if (indexSlide === - 1){
		indexSlide = slides.length - 1
	}

	updateSlide()

})

// événement qui se déclenche au click sur l'élément image avec l'id arrow_right
arrowRight.addEventListener('click', () => {
	console.log('click droit')

	indexSlide = indexSlide + 1
	
	if (indexSlide === slides.length - 1){
		indexSlide = 0
	}

	updateSlide() 

})

const updateSlide = () => {
	console.log('indexSlide:', indexSlide)

	dost.innerHTML =

	slides.forEach((item, index) => {

		//console.log("image:", item.image)
		//console.log("tagLine:", item.tagLine)
		//console.log('index:', index)
		
		const dot = document.createElement('span')
		dot.setAttribute('class', 'dot')
		dost.appendChild(dot)

		bannerImg.setAttribute('src', /assets/images/slideshow/$(slides[indexSlide].image))
		tagLine.innerHTML = slides[indexSlide].tagLine

		if (index === indexSlide) {
			dot.setAttribute('class , dot dot-selected')
		}
	})
}

updateSlide()

for (let i = 0; i < slides.length; i++)
