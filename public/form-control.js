$('#form-button').click(function (e) {
	var stateLedVal = $('#state-options-led').find(":selected").val();
	var stateBuzzerVal = $('#state-options-buzzer').find(":selected").val();
	var state={
		led : stateLedVal,
		buzzer : stateBuzzerVal
	};	
	console.log(state);
	$.post("/set-state", state, function(result){
        $("#status").html(result);
    });
});
