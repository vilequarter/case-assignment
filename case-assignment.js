var toggle = document.createElement("input");
toggle.setAttribute("type", "checkbox");
toggle.setAttribute("onclick", "StartStopAuto()");

document.getElementsByTagName("body")[0].appendChild(toggle);

async function StartStopAuto(){
	while(toggle.checked){
		document.getElementById("j_id0:form_id:j_id29").click();
		console.log("click");
		await new Promise(r => setTimeout(r, 1000));
		var cl = document.getElementById("j_id0:messages:j_id2:j_id3:0:j_id4").children[0].classList[1];
		if(cl != "infoM3"){
			toggle.checked = false;
			var ping = new Audio("https://freesound.org/data/previews/341/341871_6114721-lq.mp3");
			console.log("case found");
			ping.play();
			break;
		};
	};
};
