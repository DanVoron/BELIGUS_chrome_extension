//Для DBD
async function GetPerks() {
	try {
		const response = await fetch('https://api.allorigins.win/get?url=https://nightlight.gg/shrine');

		const errorContainer = document.querySelector('.error-messages');
		errorContainer.innerHTML = '';

		if (!response.ok) {
			errorContainer.innerHTML = `Network response was not ok<br/>`;
			throw new Error('Network response was not ok');
		}

		const jsonResponse = await response.json();
		const html = jsonResponse.contents;

		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');

		const perks = [];
		const perkElements = doc.querySelectorAll('.cidahu3.perk_img');

		perkElements.forEach(element => {
			const src = element.getAttribute('src');
			const alt = element.getAttribute('alt');
			perks.push({src, alt});
		});

		const timerContainer = document.querySelector('.timer');
		if (timerContainer) {
			updateTimer(timerContainer);
			setInterval(() => updateTimer(timerContainer), 1000);
		} else {
			console.warn('Timer container not found');
		}

		const container = document.querySelector('.icon-container');
		container.innerHTML = '';

		const fetchPromises = perks.map(async (perk) => {
			const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(perk.src)}`);
			if (!response.ok) {
				throw new Error(`Failed to fetch image: ${perk.src}`);
			}
			const jsonResponse = await response.json();
			return {
				imageData: jsonResponse.contents,
				alt: perk.alt
			};
		});

		const results = await Promise.allSettled(fetchPromises);

		results.forEach(result => {
			if (result.status === 'fulfilled') {
				const {imageData, alt} = result.value;

				const perkDiv = document.createElement('div');
				perkDiv.classList.add('perk-item', 'text-center', 'm-2');

				const img = document.createElement('img');
				img.src = imageData;
				img.alt = alt;

				img.classList.add('dbd-images', 'img-fluid');

				const text = document.createElement('span');
				text.textContent = alt;

				perkDiv.appendChild(img);
				perkDiv.appendChild(text);

				container.appendChild(perkDiv);
			} else {
				console.error('Error fetching perk image:', result.reason);
				errorContainer.innerHTML += `Error fetching image: ${result.reason.message}<br/>`;
			}
		});

	} catch (e) {
		console.error('Error fetching perks:', e);
		errorContainer.innerHTML = `Error fetching perks: ${e.message} <br/>`;
	}
}

function updateTimer(timerContainer) {
	const now = new Date();
	const nextTuesday = new Date();

	nextTuesday.setDate(now.getDate() + (2 + 7 - now.getDay()) % 7);
	nextTuesday.setHours(18, 0, 0, 0);

	const timeDiff = nextTuesday - now;

	if (timeDiff > 0) {
		const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

		timerContainer.innerHTML = `До обновления: ${days}д ${hours}ч ${minutes}м ${seconds}с`;
	} else {
		nextTuesday.setDate(nextTuesday.getDate() + 7);
		nextTuesday.setHours(18, 0, 0, 0);

		const timeDiffNext = nextTuesday - now;

		const days = Math.floor(timeDiffNext / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeDiffNext % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeDiffNext % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDiffNext % (1000 * 60)) / 1000);

		timerContainer.innerHTML = `Обновится через: ${days}д ${hours}ч ${minutes}м ${seconds}с`;
	}
}

GetPerks();


//Для хоевёрс
document.getElementById('collect').addEventListener('click', () => {
	const url = 'https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&lang=ru-ru';

	chrome.tabs.create({url: url}, (tab) => {
		setTimeout(() => {
			chrome.scripting.executeScript({
				target: {tabId: tab.id},
				function: collectRewards
			});
		}, 5000);
	});
});

document.getElementById('collect').addEventListener('click', () => {
	const url = 'https://act.hoyolab.com/bbs/event/signin/hkrpg/index.html?act_id=e202303301540311&hyl_auth_required=true&hyl_presentation_style=fullscreen&lang=ru-ru&bbs_theme=light&bbs_theme_device=1';

	chrome.tabs.create({url: url}, (tab) => {
		setTimeout(() => {
			chrome.scripting.executeScript({
				target: {tabId: tab.id},
				function: collecHonkaitRewards
			});
		}, 5000);
	});
});

document.getElementById('collect').addEventListener('click', () => {
	const url = 'https://act.hoyolab.com/bbs/event/signin/zzz/e202406031448091.html?act_id=e202406031448091&hyl_auth_required=true&hyl_presentation_style=fullscreen';

	chrome.tabs.create({url: url}, (tab) => {
		setTimeout(() => {
			chrome.scripting.executeScript({
				target: {tabId: tab.id},
				function: collecZZZRewards
			});
		}, 5000);
	});
});


