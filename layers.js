var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_15mindrivingdistance_3 = new ol.format.GeoJSON();
var features_15mindrivingdistance_3 = format_15mindrivingdistance_3.readFeatures(json_15mindrivingdistance_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15mindrivingdistance_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15mindrivingdistance_3.addFeatures(features_15mindrivingdistance_3);
var lyr_15mindrivingdistance_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15mindrivingdistance_3, 
                style: style_15mindrivingdistance_3,
                popuplayertitle: '15 min driving distance',
                interactive: true,
                title: '<img src="styles/legend/15mindrivingdistance_3.png" /> 15 min driving distance'
            });
var format_15mincyclingdistance_4 = new ol.format.GeoJSON();
var features_15mincyclingdistance_4 = format_15mincyclingdistance_4.readFeatures(json_15mincyclingdistance_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15mincyclingdistance_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15mincyclingdistance_4.addFeatures(features_15mincyclingdistance_4);
var lyr_15mincyclingdistance_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15mincyclingdistance_4, 
                style: style_15mincyclingdistance_4,
                popuplayertitle: '15 min cycling distance',
                interactive: true,
                title: '<img src="styles/legend/15mincyclingdistance_4.png" /> 15 min cycling distance'
            });
var format_30minwalkingdistance_5 = new ol.format.GeoJSON();
var features_30minwalkingdistance_5 = format_30minwalkingdistance_5.readFeatures(json_30minwalkingdistance_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_30minwalkingdistance_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30minwalkingdistance_5.addFeatures(features_30minwalkingdistance_5);
var lyr_30minwalkingdistance_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_30minwalkingdistance_5, 
                style: style_30minwalkingdistance_5,
                popuplayertitle: '30 min walking distance',
                interactive: true,
                title: '<img src="styles/legend/30minwalkingdistance_5.png" /> 30 min walking distance'
            });
var format_15minwalkingdistance_6 = new ol.format.GeoJSON();
var features_15minwalkingdistance_6 = format_15minwalkingdistance_6.readFeatures(json_15minwalkingdistance_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15minwalkingdistance_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15minwalkingdistance_6.addFeatures(features_15minwalkingdistance_6);
var lyr_15minwalkingdistance_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15minwalkingdistance_6, 
                style: style_15minwalkingdistance_6,
                popuplayertitle: '15 min walking distance',
                interactive: true,
                title: '<img src="styles/legend/15minwalkingdistance_6.png" /> 15 min walking distance'
            });
var format_MetroRoute_7 = new ol.format.GeoJSON();
var features_MetroRoute_7 = format_MetroRoute_7.readFeatures(json_MetroRoute_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetroRoute_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetroRoute_7.addFeatures(features_MetroRoute_7);
var lyr_MetroRoute_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetroRoute_7, 
                style: style_MetroRoute_7,
                popuplayertitle: 'Metro Route',
                interactive: false,
                title: '<img src="styles/legend/MetroRoute_7.png" /> Metro Route'
            });
var format_MetroStations_8 = new ol.format.GeoJSON();
var features_MetroStations_8 = format_MetroStations_8.readFeatures(json_MetroStations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetroStations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetroStations_8.addFeatures(features_MetroStations_8);
var lyr_MetroStations_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetroStations_8, 
                style: style_MetroStations_8,
                popuplayertitle: 'Metro Stations',
                interactive: true,
                title: '<img src="styles/legend/MetroStations_8.png" /> Metro Stations'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleMaps_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(true);lyr_15mindrivingdistance_3.setVisible(false);lyr_15mincyclingdistance_4.setVisible(false);lyr_30minwalkingdistance_5.setVisible(false);lyr_15minwalkingdistance_6.setVisible(false);lyr_MetroRoute_7.setVisible(true);lyr_MetroStations_8.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,lyr_OpenStreetMap_2,lyr_15mindrivingdistance_3,lyr_15mincyclingdistance_4,lyr_30minwalkingdistance_5,lyr_15minwalkingdistance_6,lyr_MetroRoute_7,lyr_MetroStations_8];
lyr_15mindrivingdistance_3.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_15mincyclingdistance_4.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_30minwalkingdistance_5.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_15minwalkingdistance_6.set('fieldAliases', {'stop_id': 'stop_id', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_MetroRoute_7.set('fieldAliases', {'shape_id': 'shape_id', 'begin': 'begin', 'end': 'end', });
lyr_MetroStations_8.set('fieldAliases', {'stop_id': 'stop_id', 'stop_name': 'stop_name', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', 'zone_id': 'zone_id', 'wheelchair_boarding': 'wheelchair_boarding', });
lyr_15mindrivingdistance_3.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_15mincyclingdistance_4.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_30minwalkingdistance_5.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_15minwalkingdistance_6.set('fieldImages', {'stop_id': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_MetroRoute_7.set('fieldImages', {'shape_id': '', 'begin': '', 'end': '', });
lyr_MetroStations_8.set('fieldImages', {'stop_id': 'TextEdit', 'stop_name': 'TextEdit', 'stop_lat': 'TextEdit', 'stop_lon': 'TextEdit', 'zone_id': 'TextEdit', 'wheelchair_boarding': 'CheckBox', });
lyr_15mindrivingdistance_3.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'header label - visible with data', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'header label - always visible', });
lyr_15mincyclingdistance_4.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'header label - visible with data', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'header label - visible with data', });
lyr_30minwalkingdistance_5.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'header label - visible with data', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'header label - visible with data', });
lyr_15minwalkingdistance_6.set('fieldLabels', {'stop_id': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'header label - visible with data', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'header label - visible with data', });
lyr_MetroRoute_7.set('fieldLabels', {'shape_id': 'header label - always visible', 'begin': 'header label - always visible', 'end': 'header label - always visible', });
lyr_MetroStations_8.set('fieldLabels', {'stop_id': 'hidden field', 'stop_name': 'header label - always visible', 'stop_lat': 'hidden field', 'stop_lon': 'hidden field', 'zone_id': 'hidden field', 'wheelchair_boarding': 'hidden field', });
lyr_MetroStations_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});