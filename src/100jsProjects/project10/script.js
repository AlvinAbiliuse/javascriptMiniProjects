let openBtn = document.querySelector(".openBtn");
let closeBtn = document.querySelector(".closeBtn");
let modal = document.querySelector("dialog");

openBtn.addEventListener("click", () => {
	modal.showModal();
});

closeBtn.addEventListener("click", () => {
	modal.close();
});
