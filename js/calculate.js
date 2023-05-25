window.addEventListener('DOMContentLoaded', () => {
	
	const calculateForm = document.querySelector('.js__calculateForm');
	if(calculateForm){
		const submitBtn = calculateForm.querySelector('.js__submit');
		const calcResult = calculateForm.querySelector('.js__calcResult');
		if(submitBtn && calcResult){
			submitBtn.addEventListener('click', () => {
				let waga = calculateForm.querySelector('input[name=waga]');
				let ilosc = calculateForm.querySelector('input[name=ilosc]');
				let prc = calculateForm.querySelector('input[name=prc]');
				let sex = calculateForm.querySelector('input[name=sex]:checked');
				
				waga = (waga.value) ? parseFloat(waga.value) : null;
				ilosc = (ilosc.value) ? parseFloat(ilosc.value) : null;
				prc = (prc.value) ? parseFloat(prc.value) : null;
				sex = (sex.value) ? parseFloat(sex.value) : null;
				
				if(waga && ilosc && prc && ( sex===0.6 || sex === 0.7 )) {
					let result = 0;
					result = ((((prc / 100) * ilosc) * 0.79) / (waga * sex)).toFixed(2);
					
					calcResult.innerHTML = result;
				}
			});
		}
	}
});