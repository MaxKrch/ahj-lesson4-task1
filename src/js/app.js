import startValide from "./validationFunctions";
import formation from "./inputFunctions";
import { queryApp } from "./renderFunctions";

const { formBlock } = queryApp("#app");

formBlock.form.addEventListener("submit", (event) => {
	event.preventDefault();
	startValide(formBlock.input.value);
});

formBlock.input.addEventListener("input", (event) => {
	formation(event.target);
});
