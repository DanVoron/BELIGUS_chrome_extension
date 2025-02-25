chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'fetchPerks') {
		fetch('https://api.allorigins.win/get?url=https://nightlight.gg/shrine')
			.then(response => response.text())
			.then(html => {
				sendResponse({html: html});
			})
			.catch(error => {
				console.error(error);
				sendResponse({error: error.message});
			});
		return true;
	}
});