const colorContainer = document.querySelector(".colorContainer");
for (let i = 1; i <= 200; i++) {
	let color = document.createElement("div");
	color.classList.add("color");
	colorContainer.appendChild(color);
}
const generate = () => {
	let color = document.querySelectorAll(".color");
	color.forEach(element => {
		randomColor = generateColor();
		element.innerHTML = randomColor;
		element.style.backgroundColor = randomColor;
	});
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