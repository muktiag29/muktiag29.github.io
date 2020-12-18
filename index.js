// ! VARIABLE WINDOW
const body = document.getElementById("body");

// ! VARIABLE STARTING
const starter = document.getElementById("starter");
const rules = document.getElementById("rules");
const boxgame = document.getElementById("viewNumber");
const statusbar = document.getElementById("result");
const viewNav = document.getElementById("viewChoosen");
const endgame = document.getElementById("over");
const restart = document.getElementById("restart");

// ! VARIABLE PLAYING GAME
const num = document.querySelector(".number p");
const guest = document.querySelector(".guest p");

const moreThan = document.querySelector(".more");
const moreThanEqual = document.querySelector(".moreequal");
const equal = document.querySelector(".equal");
const lessThanEqual = document.querySelector(".lessequal");
const lessThan = document.querySelector(".less");

// ! VARIABLE AUDIO
const audioTrue = document.getElementById("audioTrue");
const audioFalse = document.getElementById("audioFalse");

// ! VARIABLE RESULT
const score = document.getElementById("scoring");
const chance = document.getElementById("chance");

// ! VARIABLE FINAL
const final = document.getElementById("final");

// ! VARIABLE SUPPORT
let angkaDisplay;
let angkaTebakan;
let totalPoints = 0;
let lifePoints = 3;
let trueAnswer = 0;
let inputBenar = document.getElementById("tda");
let inputScore = document.getElementById("tdb");
let inputTitle = document.getElementById("tdc");
let name = prompt("What is Your Name:");

// TODO: STARTING GAME
starter.addEventListener("click", function () {
	angkaDisplay = Math.ceil(Math.random() * 20);
	num.innerHTML = angkaDisplay;

	starter.style.display = "none";
	rules.style.display = "none";
	statusbar.style.display = "inline-block";
	viewNav.style.display = "inline-block";
	boxgame.style.display = "inline-block";
});

// TODO: PLAYING GAME
moreThan.addEventListener("click", function () {
	angkaTebakan = Math.ceil(Math.random() * 20);

	if (angkaTebakan > angkaDisplay) {
		totalPoints += angkaDisplay * 7;
		trueAnswer++;
		score.innerText = totalPoints;
		audioTrue.controls = true;
		audioTrue.play();
	} else {
		lifePoints--;
		chance.innerText = `${lifePoints} MORE LEFT`;
		audioFalse.controls = true;
		audioFalse.play();
		if (lifePoints === 0) {
			endgame.style.display = "inline";
			boxgame.style.display = "none";
			viewNav.style.display = "none";
			statusbar.style.display = "none";
		}
	}
	angkaDisplay = angkaTebakan;
	num.innerText = angkaDisplay;
	guest.innerText = "?";

	inputTitle.innerText = `: ${name}`;
	inputBenar.innerText = `: ${trueAnswer + 3} Items`;
	inputScore.innerText = `: ${totalPoints} Points`;
});

moreThanEqual.addEventListener("click", function () {
	angkaTebakan = Math.ceil(Math.random() * 20);

	if (angkaTebakan > angkaDisplay || angkaTebakan === angkaDisplay) {
		totalPoints += angkaDisplay * 5;
		trueAnswer++;
		inputBenar.innerText = `: ${trueAnswer + 3} Items`;
		score.innerText = totalPoints;
		audioTrue.controls = true;
		audioTrue.play();
	} else {
		lifePoints--;
		chance.innerText = `${lifePoints} MORE LEFT`;
		audioFalse.controls = true;
		audioFalse.play();
		if (lifePoints === 0) {
			endgame.style.display = "inline";
			boxgame.style.display = "none";
			viewNav.style.display = "none";
			statusbar.style.display = "none";
		}
	}
	angkaDisplay = angkaTebakan;
	num.innerText = angkaDisplay;
	guest.innerText = "?";

	inputTitle.innerText = `: ${name}`;
	inputBenar.innerText = `: ${trueAnswer + 3} Items`;
	inputScore.innerText = `: ${totalPoints} Points`;
});

equal.addEventListener("click", function () {
	angkaTebakan = Math.ceil(Math.random() * 20);

	if (angkaTebakan === angkaDisplay) {
		totalPoints += 500;
		trueAnswer++;
		score.innerText = totalPoints;
		audioTrue.controls = true;
		audioTrue.play();
	} else {
		lifePoints--;
		chance.innerText = `${lifePoints} MORE LEFT`;
		audioFalse.controls = true;
		audioFalse.play();
		if (lifePoints === 0) {
			endgame.style.display = "inline";
			boxgame.style.display = "none";
			viewNav.style.display = "none";
			statusbar.style.display = "none";
		}
	}
	angkaDisplay = angkaTebakan;
	num.innerText = angkaDisplay;
	guest.innerText = "?";

	inputTitle.innerText = `: ${name}`;
	inputBenar.innerText = `: ${trueAnswer + 3} Items`;
	inputScore.innerText = `: ${totalPoints} Points`;
});

lessThanEqual.addEventListener("click", function () {
	angkaTebakan = Math.ceil(Math.random() * 20);

	if (angkaTebakan < angkaDisplay || angkaTebakan === angkaDisplay) {
		totalPoints += (20 - angkaDisplay) * 5;
		trueAnswer++;
		score.innerText = totalPoints;
		audioTrue.controls = true;
		audioTrue.play();
	} else {
		lifePoints--;
		chance.innerText = `${lifePoints} MORE LEFT`;
		audioFalse.controls = true;
		audioFalse.play();
		if (lifePoints === 0) {
			endgame.style.display = "inline";
			boxgame.style.display = "none";
			viewNav.style.display = "none";
			statusbar.style.display = "none";
		}
	}
	angkaDisplay = angkaTebakan;
	num.innerText = angkaDisplay;
	guest.innerText = "?";

	inputTitle.innerText = `: ${name}`;
	inputBenar.innerText = `: ${trueAnswer + 3} Items`;
	inputScore.innerText = `: ${totalPoints} Points`;
});

lessThan.addEventListener("click", function () {
	angkaTebakan = Math.ceil(Math.random() * 20);

	if (angkaTebakan < angkaDisplay) {
		totalPoints += (20 - angkaDisplay) * 7;
		trueAnswer++;
		score.innerText = totalPoints;
		audioTrue.controls = true;
		audioTrue.play();
	} else {
		lifePoints--;
		chance.innerText = `${lifePoints} MORE LEFT`;
		audioFalse.controls = true;
		audioFalse.play();
		if (lifePoints === 0) {
			endgame.style.display = "inline";
			boxgame.style.display = "none";
			viewNav.style.display = "none";
			statusbar.style.display = "none";
		}
	}
	angkaDisplay = angkaTebakan;
	num.innerText = angkaDisplay;
	guest.innerText = "?";

	inputTitle.innerText = `: ${name}`;
	inputBenar.innerText = `: ${trueAnswer + 3} Items`;
	inputScore.innerText = `: ${totalPoints} Points`;
});

// TODO: END GAME
endgame.addEventListener("click", function () {
	endgame.style.display = "none";
	final.style.display = "inline-block";
});

restart.addEventListener("click", function () {
	rules.style.display = "inline-block";
	starter.style.display = "inline-block";
	final.style.display = "none";
	totalPoints = 0;
	lifePoints = 3;
	trueAnswer = 0;
	chance.innerText = `${lifePoints} MORE LEFT`;
	score.innerText = totalPoints;
});
