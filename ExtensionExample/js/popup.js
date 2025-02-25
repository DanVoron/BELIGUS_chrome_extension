document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('alertButton');
	button.addEventListener('click',  () => {
		 // GetPerks()
		console.info("%cUR MOM GAY", "color: green; background: #c7c7c7; padding: 8px; font-size: 20px");

	});
});


function GetPerks() {
	chrome.runtime.sendMessage({ action: "fetchPerks" }, (response) => {
		if (chrome.runtime.lastError) {
			console.error("Error:", chrome.runtime.lastError);
			return;
		}

		if (response && response.html) {
			const parser = new DOMParser();
			const doc = parser.parseFromString(response.html, 'text/html');
			const perks = [];

			const perkElements = doc.querySelectorAll('.cidahu3.perk_img');
			perkElements.forEach(element => {
				const src = element.getAttribute('src');
				const alt = element.getAttribute('alt');
				perks.push({ src, alt });
			});

			console.log(perks);
		} else {
			console.error("Response error:", response.error);
		}
	});
}

// Вызов функции
GetPerks();








//Для хоевёрс
document.getElementById('collect').addEventListener('click', () => {
	const url = 'https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&lang=ru-ru';

	chrome.tabs.create({ url: url }, (tab) => {
		setTimeout(() => {
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				function: collectRewards
			});
		}, 5000);
	});
});

document.getElementById('collect').addEventListener('click', () => {
	const url = 'https://act.hoyolab.com/bbs/event/signin/hkrpg/index.html?act_id=e202303301540311&hyl_auth_required=true&hyl_presentation_style=fullscreen&lang=ru-ru&bbs_theme=light&bbs_theme_device=1';

	chrome.tabs.create({ url: url }, (tab) => {
		setTimeout(() => {
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				function: collecHonkaitRewards
			});
		}, 5000);
	});
});

document.getElementById('collect').addEventListener('click', () => {
	const url = 'https://act.hoyolab.com/bbs/event/signin/zzz/e202406031448091.html?act_id=e202406031448091&hyl_auth_required=true&hyl_presentation_style=fullscreen';

	chrome.tabs.create({ url: url }, (tab) => {
		setTimeout(() => {
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				function: collecZZZRewards
			});
		}, 5000);
	});
});


