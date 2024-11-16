// // details
// const btns = document.getElementsByClassName("question-btn")
// for(let i = 0; i < btns.length; i++){
// 	btns[i].addEventListener('click', function(){
// 		this.parentNode.classList.toggle("active");
// 	})
// }

// // Слайдер
// const btnLeft = document.querySelector("#btn-left")
// const btnRight = document.querySelector("#btn-right")
// const slider = document.querySelector(".slider-line")
// const slide = document.querySelector(".slide")
// let offset = 0;
// btnRight.addEventListener('click', function(){
// 	offset -= slide.offsetWidth
// 	if(offset < -slide.offsetWidth * 4) offset = 0;
// 	slider.style.left = offset + "px";
// })
// btnLeft.addEventListener('click', function(){
// 	offset += slide.offsetWidth
// 	if(offset > 0) offset = -slide.offsetWidth * 4;
// 	slider.style.left = offset + "px";
// })

// // Скролл к секциям
// const anchors = document.querySelectorAll('a[href*="#"]')
// for (let anchor of anchors) {
// anchor.addEventListener('click', function (e) {
// 	e.preventDefault()
// 	const blockID = anchor.getAttribute('href').substr(1)
// 	document.getElementById(blockID).scrollIntoView({
// 		behavior: 'smooth',
// 		block: 'start'
// 	})
// })
