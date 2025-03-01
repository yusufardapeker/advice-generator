const buttonELement = document.querySelector("button");

const adviceID = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");

const getData = async () => {
	const res = await fetch("https://api.adviceslip.com/advice");
	const data = await res.json();

	const {
		slip: { id, advice },
	} = data;

	return { id, advice };
};

// Self-Invoking Function for first invoke
(displayData = async () => {
	const { id, advice } = await getData();

	adviceID.textContent = `advice #${id}`;
	adviceText.textContent = `"${advice}"`;
})();

alert("New advice request takes 2 seconds.");

buttonELement.addEventListener("click", displayData);
