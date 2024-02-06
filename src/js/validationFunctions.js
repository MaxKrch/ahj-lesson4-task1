import { showModal, hideModal, showActivePlaymenrSystem } from "./renderFunctions";

const startValide = (number) => {
	const numberStr = '' + number;
	const clearNumber = numberStr.replaceAll(/[^\d]/g, "");

	if (clearNumber.length < 16) {
		showModal("Слишком короткимй номер карты", "invalid");
		setTimeout(() => {
		hideModal("invalid")
	}, 1000);
		return;
	}

	if (clearNumber.length > 16) {
		showModal("Слишком длинный номер карты", "invalid");
		setTimeout(() => {
		hideModal("invalid")
	}, 1000);
		return;
	}

	const playmentSystem = chekPlaymentSystem(clearNumber[0]);
	showActivePlaymenrSystem(playmentSystem);
	const chek = chekNumberValidity(clearNumber);
	const mess = (chek) ? "Корректный номер карты" : "Некоректный номер карты";
	const isValid = (chek) ? "valid" : "invalid";

	showModal(mess, isValid);
	setTimeout(() => {
		hideModal(isValid)
	}, 1000);
};

const chekPlaymentSystem = (number) => {
	let system;

	switch (number) {
		case "2":
			system = "mir";
			break;

		case "4":
			system = "visa";
			break;

		case "5":
			system = "master";
			break;

		case "6":
			system = "maestro";
			break;

		default:
			system = "unknown";
	}

	return system;
};

const chekNumberValidity = (number) => {
	const numberStr = '' + number;
	const isEven = numberStr.length % 2 === 0 ? true : false;
	const arrayNumbers = numberStr.split("");

	const sum = arrayNumbers.reduce((acc, item, index) => {
		if ((isEven && index % 2 === 0) || (!isEven && index % 2 === 1)) {
			const doubleNum = item > 4 ? item * 2 - 9 : item * 2;
			return acc + +doubleNum;
		}
		return acc + +item;
	}, 0);
	const chek = (sum % 10 === 0) ? true : false;
	return chek;
};

export default startValide;
export { chekPlaymentSystem, chekNumberValidity }