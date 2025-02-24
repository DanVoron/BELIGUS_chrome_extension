const collectRewards = () => {
	console.log("123")

	const collectButton = Array.from(document.querySelectorAll('[class*="---actived-day---"]')).find(el => el.className.includes('---actived-day---'));
	if (collectButton) {
		collectButton.click();
	} else {
		console.log('Кнопка не найдена');
	}
};
setTimeout(()=>{collectRewards()},3000);