dragElement(document.getElementById('plant1')); <img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
dragElement(document.getElementById('plant2')); <img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
dragElement(document.getElementById('plant3')); <img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
dragElement(document.getElementById('plant4')); <img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
dragElement(document.getElementById('plant5')); <img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
dragElement(document.getElementById('plant6')); <img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
dragElement(document.getElementById('plant7')); <img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
dragElement(document.getElementById('plant8')); <img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
dragElement(document.getElementById('plant9')); <img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
dragElement(document.getElementById('plant10'));<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
dragElement(document.getElementById('plant11'));<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
dragElement(document.getElementById('plant12'));<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
dragElement(document.getElementById('plant13'));<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
dragElement(document.getElementById('plant14'));<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
function pointerDrag(e) {
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
document.onpointermove = elementDrag;
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
document.onpointerup = stopElementDrag;
}