$(document).ready(function () {
    var myWindow = $("#window"),
        undo = $("#undo");

    undo.click(function () {
        myWindow.data("kendoWindow").open();
        undo.fadeOut();
    });

    function onClose() {
        undo.fadeIn();
    }

    myWindow.kendoWindow({
        width: "600px",
        title: "Technician home location",
        visible: false,
        actions: [
            "Minimize",
            "Maximize",
            "Close"
        ],
        close: onClose,
        activate: buildMap
    }).data("kendoWindow").center().open();
});

function buildMap() {
    const lat = 63.427378;
    const long = 10.431251;
    var position = new google.maps.LatLng(lat, long)


    var myOptions = {
        center: position,
        zoom: 14,
        zoomControl: true,
        disableDefaultUI: true
    };

    var mapElement = $("#map_canvas");
    var map = new google.maps.Map(mapElement[0], myOptions);
    var icon = './baseline_local_shipping_black_18dp.png';
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: icon,
        dragable: true
    });

    google.maps.event.addListener(map, 'click', function (event) {
        marker.setPosition(event.latLng);
    });
}
