const collectRewards = () => {
	const collectButton = Array.from(document.querySelectorAll('[class*="---actived-day---"]')).find(el => el.className.includes('---actived-day---'));
	if (collectButton) {
		collectButton.click();
		setTimeout(() => {
			window.close();
		}, 1000);
	} else {
		console.log('Кнопка не найдена');
	}
};
setTimeout(()=>{collectRewards()},3000);

const collecHonkaitRewards = () => {
	const uniqueBackgroundImage = "https://upload-static.hoyoverse.com/event/2023/04/21/5ccbbab8f5eb147df704e16f31fc5788_6285576485616685271.png?x-oss-process=image%2Fresize%2Cw_142";

	const collectButton = Array.from(document.querySelectorAll('div[style]')).find(el => {
		const style = el.style.backgroundImage;
		return style.includes(uniqueBackgroundImage);
	});

	if (collectButton) {
		collectButton.click();
		setTimeout(() => {
			window.close();
		}, 1000);
	} else {
		console.log('Кнопка не найдена');
	}
};

setTimeout(() => { collecHonkaitRewards(); }, 3000);

const collecZZZRewards = () => {
	const uniqueBackgroundImage = "https://act-webstatic.hoyoverse.com/event-static/2024/06/17/3b211daae47bbfac6bed5b447374a325_3353871917298254056.png?x-oss-process=image%2Fresize%2Cw_142";

	const collectButton = Array.from(document.querySelectorAll('div[style]')).find(el => {
		const style = el.style.backgroundImage;
		return style.includes(uniqueBackgroundImage);
	});

	if (collectButton) {
		collectButton.click();
		setTimeout(() => {
			window.close();
		}, 1000);
	} else {
		console.log('Кнопка не найдена');
	}
};

setTimeout(() => { collecZZZRewards(); }, 3000);