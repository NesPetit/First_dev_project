var callBackGetSuccess = function(data) {
    console.log("donnnées api", data)
    var element = document.getElementById("zoneApi");
    element.innerHTML = "Le joueur est " + data.player_number;
}

function buttonClickGET() {
    var keyId = "668ff53fa7ef5ced7b67e8eea75b3d61ece44fe84313dc21d76a474d046854b1"
    var element = document.getElementById("namePlayer").value;
    var url = "https://apiv2.apifootball.com/?action=get_players&player_name="+element+"&APIkey="+keyId;
    
    $.get(url, callBackGetSuccess).done(function() {
        //alert("second success");
    })
    .fail(function() {
        alert("error");
    })
    .always(function() {
        //alert("finished");

    });

}