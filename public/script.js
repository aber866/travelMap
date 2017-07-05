var map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "light",
    "dataProvider": {
        "map": "worldHigh",
        "zoomLevel": 5,
        "zoomLongitude": 0,
        "zoomLatitude": 46,
        "areas": [ {
            "id": "DK",
            "color": "#088A08"
        }, {
            "id": "GB",
            "color": "#FFFF00"
        }, {
            "id": "FR",
            "color": "#01A9DB"
        }, {
            "id": "ES",
            "color": "#DF0101"
        }, {
            "id": "PT",
            "color": "#8A0868"
        }, {
            "id": "MA",
            "color": "#FF8000"
        }],
        "images": [ {
            type: "circle",
            width: 20,
            height: 20,
            longitude: -8,
            latitude: 39.5,
            title: "title",
            value: 2,
            label: 2,
            balloonText: "<img src='img/oporto.jpg' style='width: 100px; float: left; margin-right: 10px;'>" +
                "<span>" +
                "<strong>" + "Portugal: 2 viajes, 4 ciudades" + ":</strong></br> Algarve (Laos, San Vicente, Villa d'Obispo): Agosto 2014 </br> Oporto: Julio 2016" +
                "<img src='img/algarve.jpg' style='width: 150px; float: right; margin-left: 10px; margin-top:10px'>",
            zoomLevel: 10,
            labelShiftY: -2,
        },
        {
            type: "circle",
            width: 20,
            height: 20,
            longitude: -5,
            latitude: 32,
            title: "title",
            value: 1,
            label: 1,
            balloonText: "<img src='img/marruecos.jpg' style='width: 150px; float: left; margin-right: 10px;'>" +
                "<strong>" + "Marruecos: 1 viaje, 3 ciudades" + ":</strong></br> Marruecos (Marrakech, Casablanca, Essaouira): Agosto 2015",
            zoomLevel: 10,
            labelShiftY: -2,
        },
        {
            type: "circle",
            width: 20,
            height: 20,
            longitude: 2,
            latitude: 46,
            title: "title",
            value: 1,
            label: 1,
            balloonText: "<img src='img/paris.jpg' style='width: 150px; float: left; margin-right: 10px;'>" +
                "<strong>" + "Francia: 1 viaje, 1 ciudad" + ":</strong></br> Paris: Abril 2017",
            zoomLevel: 10,
            labelShiftY: -2,
        },
        {
            type: "circle",
            width: 20,
            height: 20,
            longitude: 10,
            latitude: 56,
            title: "title",
            value: 1,
            label: 1,
            balloonText: "<img src='img/copenaghe.jpg' style='width: 200px; float: right; margin-left: 10px;'>" +
                "<strong>" + "Dinamarca: 1 viaje, 1 ciudad" + ":</strong></br> Copenhague: Mayo 2017",
            zoomLevel: 10,
            labelShiftY: -2,
        }, {
            type: "circle",
            width: 20,
            height: 20,
            longitude: -4,
            latitude: 40,
            title: "title",
            value: 3,
            label: 3,
            balloonText: "<img src='img/barcelona.jpg' style='width: 100px; float: left; margin-right: 10px;'>" +
                "<span>" +
                "<strong>" + "Espania: muchos viajes" + ":</strong></br> Barcelona: Diciembre 2016 </br> Huesca: Diciembre 2015" +
                "<img src='img/huesca.jpg' style='width: 150px; float: right; margin-left: 10px; margin-top:10px'>",
            zoomLevel: 10,
            labelShiftY: -2
        },
        {
            type: "circle",
            width: 20,
            height: 20,
            longitude: -2,
            latitude: 54,
            title: "title",
            value: 6,
            label: 6,
            balloonText: "<div>" +
                "<img src='img/londres.jpg' style='width: 100px; float: left; margin-right: 10px;'>" +
                "<img src='img/canterbury.jpg' style='width: 100px; float: left; margin-right: 10px;'>" +
                "<img src='img/birmingham.jpg' style='width: 100px; float: left; margin-right: 10px;'>" +
                "<img src='img/oxford.jpg' style='width: 100px; float: left; margin-right: 10px;'>" +
                "<img src='img/cambridge.jpg' style='width: 100px; float: left; margin-right: 10px;'>" +
                "<img src='img/edimburgo.jpg' style='width: 100px; float: left; margin-right: 10px;'></div>" +
                "<div><strong>" + "Reino Unido: muchos viaje, 6 ciudad" + ":</strong></br> Edimburgo: Junio 2017 </br> Birmingham: Junio 2017 </br> Londres: Mayo 2017 </br> Cambridge: Junio 2016 </br> Oxford: Julio 2016 </br> Canterbury: Agosto 2016</div>",
            zoomLevel: 10,
            labelShiftY: -2
        }]
    },
    balloon: {
        maxWidth: 350,
        adjustBorderColor: true,
        borderThickness: 1,
        color: "#444444",
        fontSize: 12,
        textAlign: "left",
        fixedPosition: false
    },
    imagesSettings: {
        labelPosition: "middle",
        labelColor: "#fff",
        labelRollOverColor: "#fff",
        color: "#EC0000",
        descriptionWindowWidth: 500
    },
    "areasSettings": {
        "rollOverOutlineColor": "#111111",
        "rollOverColor": "#0B0B3B",
        "alpha": 0.8,
        "unlistedAreasAlpha": 0
    }
});
