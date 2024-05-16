// Variable slides qui contient tous les slides du carrousel
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

// les variables pour selectionner les éléments du DOM
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.getElementById('arrow_right')
const dots = document.querySelector('.dots')
const bannerImg = document.querySelector('.banner-img')
const tagLine = document.querySelector('#banner p')

// la variable index du carrousel
let indexSlide = 0


// événement au click sur l'élément image avec la classe arrow_left
arrowLeft.addEventListener('click', () => {
	// affiche dans la console 'click gauche'
	console.log('click gauche')

	// on décrémente la variable de l'index du carrousel pour reculer
	indexSlide = indexSlide - 1

	// la condition pour faire une boucle infini avec le slider dans le sens inverse
	// on revient au dernier slide si on est positioné au premier slide
	if (indexSlide === - 1) {
		indexSlide = slides.length - 1
	}

	// on met à jour le carrousel en appelant la fonction updateSlide()
	updateSlide()

})

// événement qui se déclenche au click sur l'élément image avec l'id arrow_right
arrowRight.addEventListener('click', () => {
	console.log('click droit')

	// on incrémente la variable de l'index du carrousel pour avancer
	indexSlide = indexSlide + 1

	// la condition pour faire une boucle infini avec le slider dans le sens normal
	// on revient au premier slide si on est positioné sur le slide
	if (indexSlide === slides.length) {
		indexSlide = 0
	}

	// on met à jour le carrousel
	updateSlide()

})

// Fonction pour mettre à jour le carrousel (image, tagLine, les dots)
const updateSlide = () => {
	console.log('indexSlide:', indexSlide)

	// on efface les dots
	dots.innerHTML = ''

	// on parcours les slides avec forEach
	slides.forEach((item, index) => {

		// on créé un dot dans le HTML
		const dot = document.createElement('span')
		// on lui ajout une classe 'dot'
		dot.setAttribute('class', 'dot')
		// on ajoute 'dot' au container 'dots'
		dots.appendChild(dot)

		// On met à jour l'image du carrousel en fonction du slide actuel
		bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[indexSlide].image}`)
		// pareil pour le tagLine
		tagLine.innerHTML = slides[indexSlide].tagLine

		// on met à jour la position du 'dot'
		if (index === indexSlide) {
			dot.setAttribute('class', 'dot dot_selected')
		}
	})
}

// on lance la première fois la mise à jour du carrousel
updateSlide()

