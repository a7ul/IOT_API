$('#form-button').click(function (e) {
	var stateVal = $('#state-options').find(":selected").val();
	console.log(stateVal);
	$.post("/set-state", {state: stateVal}, function(result){
        $("#status").html(result);
    });
});
