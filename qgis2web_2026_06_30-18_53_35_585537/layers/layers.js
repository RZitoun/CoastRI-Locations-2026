ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-13812211.802854, -5863501.081529, 19750319.752591, 7908763.335355]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IMOSNRSSites_2 = new ol.format.GeoJSON();
var features_IMOSNRSSites_2 = format_IMOSNRSSites_2.readFeatures(json_IMOSNRSSites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMOSNRSSites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOSNRSSites_2.addFeatures(features_IMOSNRSSites_2);
var lyr_IMOSNRSSites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOSNRSSites_2, 
                style: style_IMOSNRSSites_2,
                popuplayertitle: 'IMOS NRS Sites',
                interactive: true,
                title: '<img src="styles/legend/IMOSNRSSites_2.png" /> IMOS NRS Sites'
            });
var format_GeneralWQSites_3 = new ol.format.GeoJSON();
var features_GeneralWQSites_3 = format_GeneralWQSites_3.readFeatures(json_GeneralWQSites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeneralWQSites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeneralWQSites_3.addFeatures(features_GeneralWQSites_3);
var lyr_GeneralWQSites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeneralWQSites_3, 
                style: style_GeneralWQSites_3,
                popuplayertitle: 'General WQ Sites',
                interactive: true,
                title: '<img src="styles/legend/GeneralWQSites_3.png" /> General WQ Sites'
            });
var format_TERNOzSETsitesplanned2026_4 = new ol.format.GeoJSON();
var features_TERNOzSETsitesplanned2026_4 = format_TERNOzSETsitesplanned2026_4.readFeatures(json_TERNOzSETsitesplanned2026_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERNOzSETsitesplanned2026_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERNOzSETsitesplanned2026_4.addFeatures(features_TERNOzSETsitesplanned2026_4);
var lyr_TERNOzSETsitesplanned2026_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERNOzSETsitesplanned2026_4, 
                style: style_TERNOzSETsitesplanned2026_4,
                popuplayertitle: 'TERN OzSET sites planned 2026',
                interactive: true,
                title: '<img src="styles/legend/TERNOzSETsitesplanned2026_4.png" /> TERN OzSET sites planned 2026'
            });
var format_IMOSWQECFMsites_5 = new ol.format.GeoJSON();
var features_IMOSWQECFMsites_5 = format_IMOSWQECFMsites_5.readFeatures(json_IMOSWQECFMsites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMOSWQECFMsites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOSWQECFMsites_5.addFeatures(features_IMOSWQECFMsites_5);
var lyr_IMOSWQECFMsites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOSWQECFMsites_5, 
                style: style_IMOSWQECFMsites_5,
                popuplayertitle: 'IMOS WQ ECFM sites',
                interactive: true,
                title: '<img src="styles/legend/IMOSWQECFMsites_5.png" /> IMOS WQ ECFM sites'
            });
var format_IMOSCoastalWaveBuoySites_6 = new ol.format.GeoJSON();
var features_IMOSCoastalWaveBuoySites_6 = format_IMOSCoastalWaveBuoySites_6.readFeatures(json_IMOSCoastalWaveBuoySites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IMOSCoastalWaveBuoySites_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOSCoastalWaveBuoySites_6.addFeatures(features_IMOSCoastalWaveBuoySites_6);
var lyr_IMOSCoastalWaveBuoySites_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOSCoastalWaveBuoySites_6, 
                style: style_IMOSCoastalWaveBuoySites_6,
                popuplayertitle: 'IMOS Coastal Wave Buoy Sites',
                interactive: true,
                title: '<img src="styles/legend/IMOSCoastalWaveBuoySites_6.png" /> IMOS Coastal Wave Buoy Sites'
            });
var format_AuScopefixedstation_7 = new ol.format.GeoJSON();
var features_AuScopefixedstation_7 = format_AuScopefixedstation_7.readFeatures(json_AuScopefixedstation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AuScopefixedstation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AuScopefixedstation_7.addFeatures(features_AuScopefixedstation_7);
var lyr_AuScopefixedstation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AuScopefixedstation_7, 
                style: style_AuScopefixedstation_7,
                popuplayertitle: 'AuScope fixed station',
                interactive: true,
                title: '<img src="styles/legend/AuScopefixedstation_7.png" /> AuScope fixed station'
            });
var format_AuScopeLowCostDrones_8 = new ol.format.GeoJSON();
var features_AuScopeLowCostDrones_8 = format_AuScopeLowCostDrones_8.readFeatures(json_AuScopeLowCostDrones_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AuScopeLowCostDrones_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AuScopeLowCostDrones_8.addFeatures(features_AuScopeLowCostDrones_8);
var lyr_AuScopeLowCostDrones_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AuScopeLowCostDrones_8, 
                style: style_AuScopeLowCostDrones_8,
                popuplayertitle: 'AuScope Low Cost Drones',
                interactive: true,
                title: '<img src="styles/legend/AuScopeLowCostDrones_8.png" /> AuScope Low Cost Drones'
            });
var format_CoastSnapSites_9 = new ol.format.GeoJSON();
var features_CoastSnapSites_9 = format_CoastSnapSites_9.readFeatures(json_CoastSnapSites_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastSnapSites_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastSnapSites_9.addFeatures(features_CoastSnapSites_9);
var lyr_CoastSnapSites_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastSnapSites_9, 
                style: style_CoastSnapSites_9,
                popuplayertitle: 'CoastSnap Sites',
                interactive: true,
                title: '<img src="styles/legend/CoastSnapSites_9.png" /> CoastSnap Sites'
            });
var format_AuScopeLongRangeDrones_10 = new ol.format.GeoJSON();
var features_AuScopeLongRangeDrones_10 = format_AuScopeLongRangeDrones_10.readFeatures(json_AuScopeLongRangeDrones_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AuScopeLongRangeDrones_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AuScopeLongRangeDrones_10.addFeatures(features_AuScopeLongRangeDrones_10);
var lyr_AuScopeLongRangeDrones_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AuScopeLongRangeDrones_10, 
                style: style_AuScopeLongRangeDrones_10,
                popuplayertitle: 'AuScope Long Range Drones',
                interactive: true,
                title: '<img src="styles/legend/AuScopeLongRangeDrones_10.png" /> AuScope Long Range Drones'
            });
var format_TERNOzSETsites_11 = new ol.format.GeoJSON();
var features_TERNOzSETsites_11 = format_TERNOzSETsites_11.readFeatures(json_TERNOzSETsites_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERNOzSETsites_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERNOzSETsites_11.addFeatures(features_TERNOzSETsites_11);
var lyr_TERNOzSETsites_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERNOzSETsites_11, 
                style: style_TERNOzSETsites_11,
                popuplayertitle: 'TERN OzSET sites',
                interactive: true,
                title: '<img src="styles/legend/TERNOzSETsites_11.png" /> TERN OzSET sites'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_IMOSNRSSites_2.setVisible(true);lyr_GeneralWQSites_3.setVisible(true);lyr_TERNOzSETsitesplanned2026_4.setVisible(true);lyr_IMOSWQECFMsites_5.setVisible(true);lyr_IMOSCoastalWaveBuoySites_6.setVisible(true);lyr_AuScopefixedstation_7.setVisible(true);lyr_AuScopeLowCostDrones_8.setVisible(true);lyr_CoastSnapSites_9.setVisible(true);lyr_AuScopeLongRangeDrones_10.setVisible(true);lyr_TERNOzSETsites_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_IMOSNRSSites_2,lyr_GeneralWQSites_3,lyr_TERNOzSETsitesplanned2026_4,lyr_IMOSWQECFMsites_5,lyr_IMOSCoastalWaveBuoySites_6,lyr_AuScopefixedstation_7,lyr_AuScopeLowCostDrones_8,lyr_CoastSnapSites_9,lyr_AuScopeLongRangeDrones_10,lyr_TERNOzSETsites_11];
lyr_IMOSNRSSites_2.set('fieldAliases', {'Site': 'Site', 'Operator': 'Operator', 'Station Code': 'Station Code', 'State': 'State', 'Start': 'Start', 'Depth': 'Depth', 'Lat': 'Lat', 'Long': 'Long', });
lyr_GeneralWQSites_3.set('fieldAliases', {'Site': 'Site', 'Operator': 'Operator', 'Buoy': 'Buoy', 'State': 'State', 'Start': 'Start', 'Depth': 'Depth', 'Lat': 'Lat', 'Long': 'Long', });
lyr_TERNOzSETsitesplanned2026_4.set('fieldAliases', {'site.label': 'site.label', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_IMOSWQECFMsites_5.set('fieldAliases', {'Region': 'Region', 'Site': 'Site', 'Lattitude': 'Lattitude', 'Longitude': 'Longitude', });
lyr_IMOSCoastalWaveBuoySites_6.set('fieldAliases', {'National Coastal Wave Buoy Network': 'National Coastal Wave Buoy Network', 'Funding': 'Funding', 'Type': 'Type', 'State': 'State', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_AuScopefixedstation_7.set('fieldAliases', {'Location/name': 'Location/name', 'State': 'State', 'Lat': 'Lat', 'long': 'long', 'Length of coastline (km)': 'Length of coastline (km)', 'Single or Network': 'Single or Network', 'Proposed/Existing': 'Proposed/Existing', 'If existing, duration?': 'If existing, duration?', 'Outputs': 'Outputs', 'Purpose': 'Purpose', 'Infrastructure fixed to': 'Infrastructure fixed to', 'Camera/System Type': 'Camera/System Type', 'Primary Contact (name, email)': 'Primary Contact (name, email)', 'Notes': 'Notes', });
lyr_AuScopeLowCostDrones_8.set('fieldAliases', {'Location/name': 'Location/name', 'VIC': 'VIC', 'Focus': 'Focus', 'Lat': 'Lat', 'long': 'long', 'Length of coastline (km)': 'Length of coastline (km)', 'Area (ha)': 'Area (ha)', 'Proposed/Existing': 'Proposed/Existing', 'If existing, duration?': 'If existing, duration?', 'If existing, No. of datasets?': 'If existing, No. of datasets?', 'Who collects the data?': 'Who collects the data?', 'Airframe': 'Airframe', 'Sensor Name': 'Sensor Name', 'Purpose for monitoring?': 'Purpose for monitoring?', 'Mapping Type': 'Mapping Type', 'Outputs': 'Outputs', 'Ground Control': 'Ground Control', 'Traditional Owner engangement': 'Traditional Owner engangement', 'Funding - Approx. duration remaining': 'Funding - Approx. duration remaining', 'Primary Contact (name, email)': 'Primary Contact (name, email)', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', });
lyr_CoastSnapSites_9.set('fieldAliases', {'Country': 'Country', 'Institution': 'Institution', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Hashtag': 'Hashtag', 'Date Installed': 'Date Installed', 'App Root ID': 'App Root ID', 'Contact': 'Contact', 'Status (1 = active, 2 = not active/destroyed/taken away, 1.5 = still there but needs repair)': 'Status (1 = active, 2 = not active/destroyed/taken away, 1.5 = still there but needs repair)', 'Comments': 'Comments', });
lyr_AuScopeLongRangeDrones_10.set('fieldAliases', {'Younghusband peninsula': 'Younghusband peninsula', 'State': 'State', 'Focus': 'Focus', 'Lat': 'Lat', 'long': 'long', 'Length of coastline (km)': 'Length of coastline (km)', 'Area (ha)': 'Area (ha)', 'Proposed/Existing': 'Proposed/Existing', 'If existing, duration?': 'If existing, duration?', 'If existing, No. of datasets?': 'If existing, No. of datasets?', 'Who collects the data?': 'Who collects the data?', 'Airframe': 'Airframe', 'Sensor Type': 'Sensor Type', 'Sensor Model': 'Sensor Model', 'Purpose for monitoring?': 'Purpose for monitoring?', 'Outputs': 'Outputs', 'Correction Type': 'Correction Type', 'Traditional Owner engangement': 'Traditional Owner engangement', 'Primary Contact (name, email)': 'Primary Contact (name, email)', 'Site Comments': 'Site Comments', });
lyr_TERNOzSETsites_11.set('fieldAliases', {'site.label': 'site.label', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_IMOSNRSSites_2.set('fieldImages', {'Site': 'TextEdit', 'Operator': 'TextEdit', 'Station Code': 'TextEdit', 'State': 'TextEdit', 'Start': 'TextEdit', 'Depth': 'Range', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_GeneralWQSites_3.set('fieldImages', {'Site': 'TextEdit', 'Operator': 'TextEdit', 'Buoy': 'TextEdit', 'State': 'TextEdit', 'Start': 'TextEdit', 'Depth': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_TERNOzSETsitesplanned2026_4.set('fieldImages', {'site.label': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_IMOSWQECFMsites_5.set('fieldImages', {'Region': 'TextEdit', 'Site': 'TextEdit', 'Lattitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_IMOSCoastalWaveBuoySites_6.set('fieldImages', {'National Coastal Wave Buoy Network': 'TextEdit', 'Funding': 'TextEdit', 'Type': 'TextEdit', 'State': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_AuScopefixedstation_7.set('fieldImages', {'Location/name': 'TextEdit', 'State': 'TextEdit', 'Lat': 'TextEdit', 'long': 'TextEdit', 'Length of coastline (km)': 'TextEdit', 'Single or Network': 'TextEdit', 'Proposed/Existing': 'TextEdit', 'If existing, duration?': 'TextEdit', 'Outputs': 'TextEdit', 'Purpose': 'TextEdit', 'Infrastructure fixed to': 'TextEdit', 'Camera/System Type': 'TextEdit', 'Primary Contact (name, email)': 'TextEdit', 'Notes': 'TextEdit', });
lyr_AuScopeLowCostDrones_8.set('fieldImages', {'Location/name': 'TextEdit', 'VIC': 'TextEdit', 'Focus': 'TextEdit', 'Lat': 'TextEdit', 'long': 'TextEdit', 'Length of coastline (km)': 'TextEdit', 'Area (ha)': 'Range', 'Proposed/Existing': 'TextEdit', 'If existing, duration?': 'TextEdit', 'If existing, No. of datasets?': 'TextEdit', 'Who collects the data?': 'TextEdit', 'Airframe': 'TextEdit', 'Sensor Name': 'TextEdit', 'Purpose for monitoring?': 'TextEdit', 'Mapping Type': 'TextEdit', 'Outputs': 'TextEdit', 'Ground Control': 'TextEdit', 'Traditional Owner engangement': 'CheckBox', 'Funding - Approx. duration remaining': 'TextEdit', 'Primary Contact (name, email)': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', });
lyr_CoastSnapSites_9.set('fieldImages', {'Country': 'TextEdit', 'Institution': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Hashtag': 'TextEdit', 'Date Installed': 'TextEdit', 'App Root ID': 'TextEdit', 'Contact': 'TextEdit', 'Status (1 = active, 2 = not active/destroyed/taken away, 1.5 = still there but needs repair)': 'TextEdit', 'Comments': 'TextEdit', });
lyr_AuScopeLongRangeDrones_10.set('fieldImages', {'Younghusband peninsula': 'TextEdit', 'State': 'TextEdit', 'Focus': 'TextEdit', 'Lat': 'TextEdit', 'long': 'TextEdit', 'Length of coastline (km)': 'TextEdit', 'Area (ha)': 'Range', 'Proposed/Existing': 'TextEdit', 'If existing, duration?': 'TextEdit', 'If existing, No. of datasets?': 'TextEdit', 'Who collects the data?': 'TextEdit', 'Airframe': 'TextEdit', 'Sensor Type': 'TextEdit', 'Sensor Model': 'TextEdit', 'Purpose for monitoring?': 'TextEdit', 'Outputs': 'TextEdit', 'Correction Type': 'TextEdit', 'Traditional Owner engangement': 'CheckBox', 'Primary Contact (name, email)': 'TextEdit', 'Site Comments': 'TextEdit', });
lyr_TERNOzSETsites_11.set('fieldImages', {'site.label': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_IMOSNRSSites_2.set('fieldLabels', {'Site': 'no label', 'Operator': 'no label', 'Station Code': 'no label', 'State': 'no label', 'Start': 'no label', 'Depth': 'no label', 'Lat': 'no label', 'Long': 'no label', });
lyr_GeneralWQSites_3.set('fieldLabels', {'Site': 'no label', 'Operator': 'no label', 'Buoy': 'inline label - always visible', 'State': 'no label', 'Start': 'no label', 'Depth': 'no label', 'Lat': 'no label', 'Long': 'no label', });
lyr_TERNOzSETsitesplanned2026_4.set('fieldLabels', {'site.label': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_IMOSWQECFMsites_5.set('fieldLabels', {'Region': 'no label', 'Site': 'no label', 'Lattitude': 'no label', 'Longitude': 'no label', });
lyr_IMOSCoastalWaveBuoySites_6.set('fieldLabels', {'National Coastal Wave Buoy Network': 'no label', 'Funding': 'no label', 'Type': 'no label', 'State': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_AuScopefixedstation_7.set('fieldLabels', {'Location/name': 'no label', 'State': 'no label', 'Lat': 'no label', 'long': 'no label', 'Length of coastline (km)': 'no label', 'Single or Network': 'no label', 'Proposed/Existing': 'no label', 'If existing, duration?': 'no label', 'Outputs': 'no label', 'Purpose': 'no label', 'Infrastructure fixed to': 'no label', 'Camera/System Type': 'inline label - always visible', 'Primary Contact (name, email)': 'no label', 'Notes': 'no label', });
lyr_AuScopeLowCostDrones_8.set('fieldLabels', {'Location/name': 'no label', 'VIC': 'no label', 'Focus': 'no label', 'Lat': 'no label', 'long': 'no label', 'Length of coastline (km)': 'no label', 'Area (ha)': 'no label', 'Proposed/Existing': 'no label', 'If existing, duration?': 'no label', 'If existing, No. of datasets?': 'no label', 'Who collects the data?': 'no label', 'Airframe': 'no label', 'Sensor Name': 'no label', 'Purpose for monitoring?': 'no label', 'Mapping Type': 'no label', 'Outputs': 'no label', 'Ground Control': 'no label', 'Traditional Owner engangement': 'no label', 'Funding - Approx. duration remaining': 'no label', 'Primary Contact (name, email)': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', });
lyr_CoastSnapSites_9.set('fieldLabels', {'Country': 'no label', 'Institution': 'no label', 'Location': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Hashtag': 'no label', 'Date Installed': 'no label', 'App Root ID': 'no label', 'Contact': 'no label', 'Status (1 = active, 2 = not active/destroyed/taken away, 1.5 = still there but needs repair)': 'no label', 'Comments': 'no label', });
lyr_AuScopeLongRangeDrones_10.set('fieldLabels', {'Younghusband peninsula': 'no label', 'State': 'no label', 'Focus': 'no label', 'Lat': 'no label', 'long': 'no label', 'Length of coastline (km)': 'no label', 'Area (ha)': 'no label', 'Proposed/Existing': 'no label', 'If existing, duration?': 'no label', 'If existing, No. of datasets?': 'no label', 'Who collects the data?': 'no label', 'Airframe': 'no label', 'Sensor Type': 'inline label - always visible', 'Sensor Model': 'no label', 'Purpose for monitoring?': 'no label', 'Outputs': 'no label', 'Correction Type': 'no label', 'Traditional Owner engangement': 'no label', 'Primary Contact (name, email)': 'no label', 'Site Comments': 'no label', });
lyr_TERNOzSETsites_11.set('fieldLabels', {'site.label': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_TERNOzSETsites_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});