const queryApp = (container) => {
	const appCont = document.querySelector(container);

	const carts = appCont.querySelector(".carts-block");
	const mir = carts.querySelector(".mir");
	const visa = carts.querySelector(".visa");
	const master = carts.querySelector(".master");
	const maestro = carts.querySelector(".maestro");

	const form = appCont.querySelector("form");
	const input = form.querySelector(".input-text");
	const submit = form.querySelector(".input-button");
	const message = appCont.querySelector(".message-block");
	const app = {
		cartsBlock: {
			carts,
			mir,
			visa,
			master,
			maestro,
		},
		formBlock: {
			form,
			input,
			submit,
		},
		message,
	};

	return app;
};

const showModal = (message) => {
	const modal = document.querySelector(".message-block");
	modal.textContent = message;
	modal.classList.remove("hidden-item");
};

const hideModal = () => {
	const modal = document.querySelector(".message-block");
	modal.textContent = "";
	modal.classList.add("hidden-item");
};

const clearInput = () => {
	const input = document.querySelector(".input-text");
	input.value = "";
};

const showActivePlaymenrSystem = (system) => {
	const carts = document.querySelector(".carts-block");
	const oldActiveSystem = carts.querySelectorAll(".cart-item_active");
	oldActiveSystem.forEach((item) => {
		item.classList.add("cart-item_passive");
		item.classList.remove("cart-item_active");
	});

	if (system !== "unknown") {
		const newActiveSystem = carts.querySelector(`.${system}`);
		newActiveSystem.classList.remove("cart-item_passive");
		newActiveSystem.classList.add("cart-item_active");
	}
};

export { queryApp, showModal, hideModal, clearInput, showActivePlaymenrSystem };
