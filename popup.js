window.onload = function() {
	chrome.storage.local.get('time', function (result) {
    	var time = parseInt(result.time);
    	if (!time) {
    		document.getElementById("min").value = 1;
			setTime();
    	}
    	else {
    		getTime(time);
    	}	
	});
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('saveButton').addEventListener('click', setTime);
});

function setTime() {
	var minVal = document.getElementById("min").value;
	var secVal = document.getElementById("sec").value;
	if (minVal == '') {
		minVal = 0;
	}
	if (secVal == '') {
		secVal = 0;
	}
	if (minVal != '' && secVal != '') {
		var minVal = document.getElementById("min").value * 60000;
    	var secVal = document.getElementById("sec").value * 1000;
	}
    var total = minVal + secVal;
    chrome.storage.local.set({'time': total});
}

function getTime(time) {
	if (time < 60000) {
    	document.getElementById("min").value = 0;
    	document.getElementById("sec").value = time/1000;
    }
    else {
    	document.getElementById("min").value = parseInt(time/60000);
    	document.getElementById("sec").value = (time%60000)/1000;
    }
}