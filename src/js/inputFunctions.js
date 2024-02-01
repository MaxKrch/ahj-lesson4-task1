const formation = (input) => {
	const value = input.value;
	let positionCursor = input.selectionStart;
	let clearValue = value.replaceAll(/[^\d]/g, "");
	const count = clearValue.length;
	if (count > 3) {
		const arrayNumber = clearValue.split("");
		clearValue = "";
		arrayNumber.forEach((item, index) => {
			clearValue += item;
			if ((index + 1) % 4 === 0) {
				clearValue += " ";
			}
		});
	}

	if ((positionCursor - 4) % 5 === 0) {
		positionCursor += 1;
	}

	input.value = clearValue;
	input.selectionStart = positionCursor;
	input.selectionEnd = positionCursor;
};

export default formation;
