const colorContainer = document.querySelector(".colorContainer");
const msg = document.querySelector(".msg");
for (let i = 1; i <= 200; i++) {
	let colorDiv = document.createElement("div");
	let color = document.createElement("div");
	color.classList.add("color");
	colorDiv.classList.add("colorDiv");
	const i = document.createElement("i");
	i.classList.add("fas");
	i.classList.add("fa-clipboard");
	i.classList.add("clipBoard");
	colorContainer.appendChild(colorDiv);
	colorDiv.appendChild(color);
	colorDiv.appendChild(i);
}

let color = document.querySelectorAll(".clipBoard");
color.forEach(e => {
	e.addEventListener("click", () => {
		navigator.clipboard.writeText(e.value).then(() => {
			msg.classList.add("display");
			setTimeout(() => {
				msg.classList.remove("display");
			}, 2000);
		}, err => {
			console.error('Async: Could not copy text: ', err);
		});
	});
})
const generate = () => {
	let color = document.querySelectorAll(".color");
	let clipBoard = document.querySelectorAll(".clipBoard");
	for (let i = 0; i < color.length; i++) {
		let randomColor = generateColor();
		color[i].innerText = randomColor;
		color[i].style.backgroundColor = randomColor;
		clipBoard[i].value = randomColor;
	};

}

const generateColor = () => {
	const match = "0123456789abcdef";
	let color = "";
	for (let i = 1; i <= 6; i++) {
		let randomPos = Math.floor(Math.random() * match.length);
		let randomChar = match.substr(randomPos, 1);
		color += randomChar;
	}
	return "#" + color;
}
generate();
document.querySelector(".refreshBtn").addEventListener('click', generate);