var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NINACADKOLOKANI_1 = new ol.format.GeoJSON();
var features_NINACADKOLOKANI_1 = format_NINACADKOLOKANI_1.readFeatures(json_NINACADKOLOKANI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NINACADKOLOKANI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NINACADKOLOKANI_1.addFeatures(features_NINACADKOLOKANI_1);
var lyr_NINACADKOLOKANI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NINACADKOLOKANI_1, 
                style: style_NINACADKOLOKANI_1,
                popuplayertitle: 'NINACAD KOLOKANI',
                interactive: true,
                title: '<img src="styles/legend/NINACADKOLOKANI_1.png" /> NINACAD KOLOKANI'
            });
var format_REGIONS_2 = new ol.format.GeoJSON();
var features_REGIONS_2 = format_REGIONS_2.readFeatures(json_REGIONS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGIONS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGIONS_2.addFeatures(features_REGIONS_2);
var lyr_REGIONS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGIONS_2, 
                style: style_REGIONS_2,
                popuplayertitle: 'REGIONS',
                interactive: true,
                title: '<img src="styles/legend/REGIONS_2.png" /> REGIONS'
            });
var format_CercledeKolokani_3 = new ol.format.GeoJSON();
var features_CercledeKolokani_3 = format_CercledeKolokani_3.readFeatures(json_CercledeKolokani_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CercledeKolokani_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CercledeKolokani_3.addFeatures(features_CercledeKolokani_3);
var lyr_CercledeKolokani_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CercledeKolokani_3, 
                style: style_CercledeKolokani_3,
                popuplayertitle: 'Cercle de Kolokani',
                interactive: true,
                title: '<img src="styles/legend/CercledeKolokani_3.png" /> Cercle de Kolokani'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NINACADKOLOKANI_1.setVisible(true);lyr_REGIONS_2.setVisible(true);lyr_CercledeKolokani_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NINACADKOLOKANI_1,lyr_REGIONS_2,lyr_CercledeKolokani_3];
lyr_NINACADKOLOKANI_1.set('fieldAliases', {'id': 'id', 'ninacad': 'ninacad', 'section': 'section', 'surface': 'surface', 'perimetre': 'perimetre', 'numeroparc': 'numeroparc', 'numero_dep': 'numero_dep', 'code_rga': 'code_rga', 'localite': 'localite', 'nom': 'nom', 'prenom': 'prenom', 'layer': 'layer', 'path': 'path', });
lyr_REGIONS_2.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_CercledeKolokani_3.set('fieldAliases', {'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_NINACADKOLOKANI_1.set('fieldImages', {'id': 'TextEdit', 'ninacad': 'TextEdit', 'section': 'TextEdit', 'surface': 'TextEdit', 'perimetre': 'TextEdit', 'numeroparc': 'TextEdit', 'numero_dep': 'TextEdit', 'code_rga': 'TextEdit', 'localite': 'TextEdit', 'nom': 'TextEdit', 'prenom': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_REGIONS_2.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_CercledeKolokani_3.set('fieldImages', {'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_NINACADKOLOKANI_1.set('fieldLabels', {'id': 'hidden field', 'ninacad': 'hidden field', 'section': 'hidden field', 'surface': 'inline label - always visible', 'perimetre': 'inline label - always visible', 'numeroparc': 'hidden field', 'numero_dep': 'inline label - always visible', 'code_rga': 'inline label - always visible', 'localite': 'inline label - always visible', 'nom': 'inline label - always visible', 'prenom': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_REGIONS_2.set('fieldLabels', {'GID_1': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'NAME_1': 'inline label - always visible', 'VARNAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'TYPE_1': 'hidden field', 'ENGTYPE_1': 'hidden field', 'CC_1': 'hidden field', 'HASC_1': 'hidden field', 'ISO_1': 'hidden field', });
lyr_CercledeKolokani_3.set('fieldLabels', {'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'inline label - always visible', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', });
lyr_CercledeKolokani_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});