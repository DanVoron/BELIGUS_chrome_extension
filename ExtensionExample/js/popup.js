document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('alertButton');
	button.addEventListener('click', () => {
		alert("hello dolaeb");
		console.info("%cUR MOM GAY", "color: green; background: #c7c7c7; padding: 8px; font-size: 20px");
	});
});

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

