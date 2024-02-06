/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/renderFunctions.js
const queryApp = container => {
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
      maestro
    },
    formBlock: {
      form,
      input,
      submit
    },
    message
  };
  return app;
};
const showModal = (message, isValid) => {
  console.log(isValid);
  const modal = document.querySelector(".message-block");
  modal.textContent = message;
  modal.classList.remove("hidden-item");
  modal.classList.add(isValid);
};
const hideModal = isValid => {
  const modal = document.querySelector(".message-block");
  modal.textContent = "";
  modal.classList.add("hidden-item");
  modal.classList.remove(isValid);
};
const clearInput = () => {
  const input = document.querySelector(".input-text");
  input.value = "";
};
const showActivePlaymenrSystem = system => {
  const carts = document.querySelector(".carts-block");
  const oldActiveSystem = carts.querySelectorAll(".cart-item_active");
  oldActiveSystem.forEach(item => {
    item.classList.add("cart-item_passive");
    item.classList.remove("cart-item_active");
  });
  if (system !== "unknown") {
    const newActiveSystem = carts.querySelector(`.${system}`);
    newActiveSystem.classList.remove("cart-item_passive");
    newActiveSystem.classList.add("cart-item_active");
  }
};

;// CONCATENATED MODULE: ./src/js/validationFunctions.js

const startValide = number => {
  const numberStr = '' + number;
  const clearNumber = numberStr.replaceAll(/[^\d]/g, "");
  if (clearNumber.length < 16) {
    showModal("Слишком короткимй номер карты", "invalid");
    setTimeout(() => {
      hideModal("invalid");
    }, 1000);
    return;
  }
  if (clearNumber.length > 16) {
    showModal("Слишком длинный номер карты", "invalid");
    setTimeout(() => {
      hideModal("invalid");
    }, 1000);
    return;
  }
  const playmentSystem = chekPlaymentSystem(clearNumber[0]);
  showActivePlaymenrSystem(playmentSystem);
  const chek = chekNumberValidity(clearNumber);
  const mess = chek ? "Корректный номер карты" : "Некоректный номер карты";
  const isValid = chek ? "valid" : "invalid";
  showModal(mess, isValid);
  setTimeout(() => {
    hideModal(isValid);
  }, 1000);
};
const chekPlaymentSystem = number => {
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
const chekNumberValidity = number => {
  const numberStr = '' + number;
  const isEven = numberStr.length % 2 === 0 ? true : false;
  const arrayNumbers = numberStr.split("");
  const sum = arrayNumbers.reduce((acc, item, index) => {
    if (isEven && index % 2 === 0 || !isEven && index % 2 === 1) {
      const doubleNum = item > 4 ? item * 2 - 9 : item * 2;
      return acc + +doubleNum;
    }
    return acc + +item;
  }, 0);
  const chek = sum % 10 === 0 ? true : false;
  return chek;
};
/* harmony default export */ const validationFunctions = (startValide);

;// CONCATENATED MODULE: ./src/js/inputFunctions.js
const formation = input => {
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
/* harmony default export */ const inputFunctions = (formation);
;// CONCATENATED MODULE: ./src/js/app.js



const {
  formBlock
} = queryApp("#app");
formBlock.form.addEventListener("submit", event => {
  event.preventDefault();
  validationFunctions(formBlock.input.value);
});
formBlock.input.addEventListener("input", event => {
  inputFunctions(event.target);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;