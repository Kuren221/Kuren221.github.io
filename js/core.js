function convertTZ(date, tzString) {
	return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
}
function doDate() {
	var str = "";

	var days = new Array("Niedziela", "Poniedzialek", "Wtorek", "Sroda", "Czwartek", "Piatek", "Sobota");
	var months = new Array("Styczen", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien", "Pazdziernik", "Listopad", "Grudzien");
	var now = new Date();
	now= convertTZ(now, "Asia/Baku");
	str += days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.toISOString().substr(11, 8);
	document.getElementById("todaysDate").innerHTML = str;
}
function mainSlider(){
	const mainSlider = document.querySelector('.js__mainSlider');
	const mainSlidesArrows = document.querySelectorAll('.js__mainSlideArrow');
	
	if(mainSlider && mainSlidesArrows.length){
		mainSlidesArrows.forEach((mainSlidesArrow) => {
			mainSlidesArrow.addEventListener('click', () => {
				let mainActiveSlide = document.querySelector('.js__mainSlide.-active');
				let nextSlide = null;
				
				if(mainSlidesArrow.classList.contains('mainSlider__arrow--left')){
					nextSlide = mainActiveSlide.previousElementSibling;
					if(!nextSlide){
						nextSlide = mainSlider.querySelector('.js__mainSlide:last-of-type');
					}
				} else {
					nextSlide = mainActiveSlide.nextElementSibling;
					console.log(nextSlide);
					if(!nextSlide){
						nextSlide = mainSlider.querySelector('.js__mainSlide');
					}
				
				}
				console.log(nextSlide);
				
				
				mainActiveSlide.classList.remove('-active');
				nextSlide.classList.add('-active');
			});
		});
	}
}


window.addEventListener('DOMContentLoaded', () => {
	mainSlider();
	doDate();
	setInterval(doDate, 1000);
	
	const upButton = document.querySelector('.js__upButton');
	if(upButton){
		upButton.addEventListener('click', () => {
			window.scroll({
				top: 0,
				behavior: 'smooth'
			});
		})
	}

	const polandMap = document.querySelector('.js__polandMap');
	if (polandMap) {
		const voivodeships = polandMap.querySelectorAll('.js__voivodeship');
		if (voivodeships.length) {
			voivodeships.forEach((voivodeship) => {
				voivodeship.addEventListener('click', () => {
					if (!voivodeship.classList.contains('-active')) {
						const lastVoivodeship = polandMap.querySelector('.js__voivodeship.-active');
						if (lastVoivodeship) {
							lastVoivodeship.classList.remove('-active');
						}
						voivodeship.classList.add('-active');

						const voivodeshipInfoId = voivodeship.getAttribute('data-infoid');
						if (voivodeshipInfoId) {
							let voivodeshipInfo = polandMap.querySelector(`#${voivodeshipInfoId}.js__polandMapInfo`);
							if (voivodeshipInfo) {
								let lastVoivodeshipInfo = polandMap.querySelector('.js__polandMapInfo.-active');
								if (lastVoivodeshipInfo) {
									lastVoivodeshipInfo.classList.remove('-active');
								}

								voivodeshipInfo.classList.add('-active');
							}
						}
					}
				});
			})
		}
	}
	
	const blogLink = document.querySelector('.js__blogLink');
	if(blogLink){
		blogLink.addEventListener('click',(e)=>{
			e.preventDefault();
			window.open("./prezentacja.html","Prezentacja","width=1200,height=700");
		});
	}
});
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("nag").style.top = "0";
  } else {
    document.getElementById("nag").style.top = "-80px";
  }
  
  prevScrollPos = currentScrollPos;
}

function startCounter() {
var startTime = new Date().getTime();

if (localStorage.getItem('elapsedTime')) {
  startTime -= parseInt(localStorage.getItem('elapsedTime'));
}

setInterval(function() {
  var currentTime = new Date().getTime();
  var elapsedTime = currentTime - startTime;

  localStorage.setItem('elapsedTime', elapsedTime.toString());

  document.getElementById('counter').textContent = Math.floor(elapsedTime / 1000);
}, 1000);
}

window.addEventListener('load', startCounter);