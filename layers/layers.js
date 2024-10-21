var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_KelurahanTerpilih_2 = new ol.format.GeoJSON();
var features_KelurahanTerpilih_2 = format_KelurahanTerpilih_2.readFeatures(json_KelurahanTerpilih_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelurahanTerpilih_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanTerpilih_2.addFeatures(features_KelurahanTerpilih_2);
var lyr_KelurahanTerpilih_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanTerpilih_2, 
                style: style_KelurahanTerpilih_2,
                popuplayertitle: "Kelurahan Terpilih",
                interactive: true,
                title: '<img src="styles/legend/KelurahanTerpilih_2.png" /> Kelurahan Terpilih'
            });
var format_Sampel_3 = new ol.format.GeoJSON();
var features_Sampel_3 = format_Sampel_3.readFeatures(json_Sampel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sampel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sampel_3.addFeatures(features_Sampel_3);
var lyr_Sampel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sampel_3, 
                style: style_Sampel_3,
                popuplayertitle: "Sampel",
                interactive: true,
                title: '<img src="styles/legend/Sampel_3.png" /> Sampel'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_KelurahanTerpilih_2.setVisible(true);lyr_Sampel_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleHybrid_1,lyr_KelurahanTerpilih_2,lyr_Sampel_3];
lyr_KelurahanTerpilih_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKC': 'Kecamatan', 'WADMKD': 'Kelurahan', 'WADMKK': 'Kota', 'WADMPR': 'Provinsi', 'WIADKD': 'WIADKD', 'UUPP': 'Sumber', 'LUAS': 'LUAS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sampel_3.set('fieldAliases', {'WADMKC': 'Kecamatan', 'WADMKD': 'Kelurahan', 'WADMKK': 'Kota', 'WADMPR': 'Provinsi', 'Shape_Leng': 'Shape_Leng', 'NAME': 'NAME', 'googlemaps': 'googlemaps', });
lyr_KelurahanTerpilih_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sampel_3.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'NAME': 'TextEdit', 'googlemaps': 'TextEdit', });
lyr_KelurahanTerpilih_2.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Sampel_3.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'NAME': 'inline label - always visible', 'googlemaps': 'inline label - always visible', });
lyr_Sampel_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});