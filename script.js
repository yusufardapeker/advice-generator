const buttonELement = document.querySelector("button");

const adviceID = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");

// Self-Invoking Function
(generateAdvice = () => {
	fetch("https://api.adviceslip.com/advice")
		.then((res) => res.json())
		.then((data) => {
			let id = data.slip.id;
			let advice = data.slip.advice;

			adviceID.textContent = `ADVICE #${id}`;
			adviceText.textContent = `"${advice}"`;
		});
})();

alert("New advice request takes 2 seconds.");

buttonELement.addEventListener("click", generateAdvice);
