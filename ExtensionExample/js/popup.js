//Для дбд
async function GetPerks() {
	try {
		const response = await fetch('https://api.allorigins.win/get?url=https://nightlight.gg/shrine');

		if (!response.ok) {
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

		const container = document.querySelector('.icon-container');
		for (const perk of perks) {
			const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(perk.src)}`);
			const jsonResponse = await response.json();
			const imageData = jsonResponse.contents;

			const perkDiv = document.createElement('div');
			perkDiv.classList.add('perk-item', 'text-center', 'm-2');

			const img = document.createElement('img');
			img.src = imageData;
			img.alt = perk.alt;

			img.classList.add('dbd-images', 'img-fluid');

			const text = document.createElement('p');
			text.textContent = perk.alt;

			perkDiv.appendChild(img);
			perkDiv.appendChild(text);

			container.appendChild(perkDiv);
		}

	} catch (e) {
		console.error(e);
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


