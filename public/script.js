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
        }]
    },
    "areasSettings": {
        "rollOverOutlineColor": "#111111",
        "rollOverColor": "#0B0B3B",
        "alpha": 0.8,
        "unlistedAreasAlpha": 0
    }
});
