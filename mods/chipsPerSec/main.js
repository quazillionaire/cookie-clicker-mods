Game.registerMod("chipsPerSec", {
	init: () => {
		// A function to calculate the current number of heavenly chips
		const calcCurrentChips = () => {
			var chipsOwned = Game.HowMuchPrestige(Game.cookiesReset);
			var ascendNowToOwn = Math.floor(Game.HowMuchPrestige(Game.cookiesReset + Game.cookiesEarned));
			var ascendNowToGet = ascendNowToOwn - Math.floor(chipsOwned);
			return BigInt(ascendNowToGet);
		};

		let chipsPerSecond = 0;
		let lastChips = calcCurrentChips();
		let currentChips = lastChips;

		const chipsPerSecStr = () => (Beautify(chipsPerSecond, 1) + '/sec').replace(' ', '&nbsp;');

		// Create the new HTML element and give it the same attributes as the current ascend chip number
		const el = document.createElement('div');
		el.innerHTML = chipsPerSecStr();
		el.className = "roundedPanel";
		el.setAttribute('id', 'chipsPerSec');

		el.style.position = 'absolute';
		el.style.right = '115px';
		el.style.top = '0';
		el.style.fontSize = '12px';
		el.style.fontWeight = 'bold';
		el.style.fontFamily = 'Georgia';
		el.style.color = '#999';

		// Find the parent node and the reference node to prepend the new element to
		const parent = document.querySelector('#legacyButton'),
			reference = document.querySelector('#ascendNumber');

		// Insert the new div
		parent.insertBefore(el, reference);

		const logic = () => {
			if (lastChips) {
				lastChips = currentChips;
				currentChips = calcCurrentChips();
				chipsPerSecond = Number(currentChips - lastChips);
				el.innerHTML = chipsPerSecStr();
				el.style.display = 'block';
			} else {
				lastChips = calcCurrentChips();
				el.style.display = 'none';
			}
		};

		Game.registerHook('logic', () => {
			if (Game.T % Game.fps == 0) logic();
		});

		logic();
	}
});