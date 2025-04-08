let openBtn = document.querySelector(".openBtn");
let closeBtn = document.querySelector(".closeBtn");
let modal = document.querySelector("dialog");
let video = document.querySelector("video");

openBtn.addEventListener("click", () => {
	modal.showModal();
	video.controls = true;
	video.play();
});

closeBtn.addEventListener("click", () => {
	modal.close();
	video.pause();
	video.currentTime = 0;
});
