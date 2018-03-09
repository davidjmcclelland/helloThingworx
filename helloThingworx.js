

var createThing = function() {
    var thingName = document.getElementById('thingNameText').value;
    console.log("thingName: " + thingName);
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://dmcclelland0ml.local:8080/Thingworx/Resources/EntityServices/Services/CreateThing?name=" +
    thingName + "&thingTemplateName=GenericThing&Content-Type=application/json&Accept-Charset=UTF-8");
    xhr.setRequestHeader("AppKey", "10000000-0000-0000-0000-000000000001");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Cache-Control", "no-cache");

    xhr.send(data);
};