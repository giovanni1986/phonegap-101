// JavaScript Document

jQuery(document).ready(function(e) {
	//alert('hi');
 //    $('#send').click(function(){
	// 	alert('Message Sent');
	// });

	// $('#alert').bind("click",function(){
	// 	alert('This is an alert');
	// });

	// $("#pic").click(function(){
	// 	alert("Take a pictureeeeeee");
	// 	//navigator.notification.alert("Take a picture");
	// });

	// $("#file").bind("tap",function(){
	// 	alert("Update a File");
	// 	//navigator.notification.alert("Update a File");
	// });

});

function onBodyLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	navigator.notification.alert("Button Alert is working");
	
	function onSuccess(acceleration) {
	    $("#result").html(
	    		'Show the data'+'<br/>'+
	    		'Acceleration X: ' + acceleration.x + '<br/>' +
	          	'Acceleration Y: ' + acceleration.y + '<br/>' +
	          	'Acceleration Z: ' + acceleration.z + '<br/>' +
	          	'Timestamp: '      + acceleration.timestamp + '<br/>');
	};

	function onError() {
	    alert('onError!');
	};

	//navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

	//var watch = navigator.accelerometer.watchAcceleration(onSuccess, OnError, {frequency:1000});
	var watch = navigator.accelerometer.watchAcceleration(onSuccess, onError, {frequency:1000});



	//NOTIFICATIONS
	$('#alert').bind("tap",function(){	 	
	 	navigator.notification.alert("Button Alert is working", alertCallback,"Phonegap","Done");
	});

	$('#confirm').bind("tap",function(){	 	
	 	navigator.notification.confirm("¿Esta seguro de realizar esta acción?", confirmCallback, "Confirmación", ["Claro :)","No :("]);	
	});

	$('#prompt').bind("tap",function(){	 	
	 	navigator.notification.prompt("¿Cuál es tu nombre?", promptCallback,"Información personal",["Ok","Cancel"],"Phonegap");
	});

	$('#beep').bind("tap",function(){	 	
	 	navigator.notification.beep(2);
	 	navigator.notification.vibrate(2500);
	});

	//MEDIA CAPTURE
	// $("#pic").bind("tap",function(){
	// 	alert('Media Capture');
	// 	navigator.device.capture.captureImage(captureSuccess,captureError, {limit:1});		
	// });

	$("#pic").click(function(){
		navigator.device.capture.captureImage(captureSuccess,captureError, {limit:1});			
		//navigator.notification.alert("Take a picture");
	});

	$("#file").bind("tap",function(){
		navigator.notification.alert("Update a File");
	});



	$("#close-app").bind("tap",function(){
		navigator.app.exitApp();
	});
}



function captureSuccess(mediaFiles){
	var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
    }
    alert(path);
}

function captureError(){
	alert("Error, Try again");
}

function confirmCallback(buttonIndex){
	var respuesta =["","Selecciono SI","Selecciono NO"];
	alert(respuesta[buttonIndex]);
}

function alertCallback(){

}

function promptCallback(results){
	alert("Gracias "+results.input1);

}



