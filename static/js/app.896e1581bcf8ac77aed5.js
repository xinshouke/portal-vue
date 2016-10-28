webpackJsonp([1,0],[function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var r=i(9),a=s(r),n=i(38),o=s(n);new a.default({el:"#app",template:"<App/>",components:{App:o.default}})},,,function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(9),a=s(r);t.default=new a.default},function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Group=t.Context=t.Layer=t.config=void 0;var r=i(17),a=s(r),n=i(16),o=s(n),l=function e(t){(0,o.default)(this,e),this.id=t.id,this.label=t.label||null,this.baseUrl=t.baseUrl||null,this.wmsTime=t.wmsTime||null,this.wmsName=t.wmsName||null,this.imageFormat=t.imageFormat||"image/png8",this.visible=!!t.visible,this.legend=t.legend||null,this.queryable=!!t.queryable,this.sourceLink=t.sourceLink||null,this.sourceLabel=t.sourceLabel||null,this.type=t.type||"WMS",this.active=!1},d=function e(t,i){(0,o.default)(this,e),this.id=t.id,this.active=!!t.active,this.infoFile=t.infoFile||null,this.label=t.label;var i=t.layers&&t.layers.map(function(e){return g(i,e)}).filter(function(e){return!!e});this.layers=i||[],this.inlineLegendUrl=t.inlineLegendUrl||null,this.hasLegends=this.layers.some(function(e){return e.legend})},c=function e(t,i){(0,o.default)(this,e),this.label=t.label,this.infoFile=t.infoFile||null,this.items=t.items&&t.items.map(function(t){return t.context?g(i,t.context):t.group?new e(t.group,i):null})},g=function(e,t){return e.find(function(e){return e.id===t})},m=function(){function e(t){var i=this;(0,o.default)(this,e),this.layers=t.layers.map(function(e){return new l(e)}),this.contexts=t.contexts.map(function(e){return new d(e,i.layers)}),this.contexts.forEach(function(e){return e.layers.forEach(function(t){t.active=e.active})}),this.groups=new c(t.contextGroups,this.contexts)}return(0,a.default)(e,[{key:"layer",value:function(e){return g(this.layers,e)}}]),e}(),u=new m(i(35));t.config=u,t.Layer=l,t.Context=d,t.Group=c},,,,,,function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(39),a=s(r),n=i(42),o=s(n),l=i(41),d=s(l);t.default={name:"app",components:{Banner:a.default,MapPane:o.default,LayerSelector:d.default}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"banner"}},function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(3),a=s(r);t.default={name:"item",props:{model:Object},data:function(){return{open:!this.model.label,active:this.model.active}},computed:{isContext:function(){return!this.model.items},isGroup:function(){return!this.isContext},isRoot:function(){return!this.model.label},hasLayers:function(){return!!this.model.layers.length}},methods:{toggleGroup:function(){this.open=!this.open},toggleLayer:function(){this.active=!this.active},showLegend:function(){console.log("Not implemented yet")}},watch:{active:function(e){var t=this;this.model.layers.forEach(function(e){return a.default.$emit("layer-toggled",e.id,t.active)})}}}},function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(4),a=i(40),n=s(a);t.default={name:"layerSelector",components:{item:n.default},data:function(){return{treeData:r.config.groups}}}},function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(4),a=i(3),n=s(a),o=void 0,l=function(e){var t=[];e.sourceLink&&t.push(new ol.Attribution({html:'<a href="'+e.sourceLink+'">'+(e.sourceLabel||e.sourceLink)+"</a>"}));var i=void 0;switch(e.type){case"OSM":i=new ol.source.OSM;break;default:i=new ol.source.TileWMS({url:e.baseUrl,params:{LAYERS:e.wmsName,TILED:!0,VERSION:"1.3.0",FORMAT:e.imageFormat,WIDTH:256,HEIGHT:256,CRS:"EPSG:900913"},serverType:"geoserver",attributions:t})}if(i){var s=new ol.layer.Tile({visible:e.active,source:i});return o.addLayer(s),s}};t.default={name:"mapPane",data:function(){return{olLayers:{}}},mounted:function(){o=new ol.Map({target:"map",view:new ol.View({center:ol.proj.fromLonLat([37.41,8.82]),zoom:4})}),r.config.layers.forEach(function(e){try{!function(){var t=l(e);t&&n.default.$on("layer-toggled",function(i,s){i===e.id&&t.setVisible(s&&e.visible)})}()}catch(e){console.log(e)}})}}},,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports={layers:[{id:"blueMarble",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:blue_marble",imageFormat:"image/jpeg",visible:!0},{id:"openstreetmap",type:"OSM",visible:!0},{id:"forestClassification",label:"FACET Forest Classification",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:facet_forest_classification",imageFormat:"image/png8",visible:!0,legend:"facet_forest_classification.png",sourceLink:"http://osfac.net/facet.html",sourceLabel:"FACET"},{id:"FnFMask1990",label:"DRC 1990 Forest non Forest Mask",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:RDC_FNF_1990_V008C",imageFormat:"image/png8",visible:!0,legend:"RDC_FnF.png",sourceLink:"http://rdc-snsf.org",sourceLabel:"DIAF DRC"},{id:"uclForestClassification",label:"UCL Forest Classification",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:ucl_forest_classification",imageFormat:"image/png8",visible:!0,legend:"ucl_2010.png",sourceLink:"http://sites.uclouvain.be/enge/map_server/UCL_RDC_classification.color.tif",sourceLabel:"UCL"},{id:"landsat",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsTime:"2000,2005",wmsName:"unredd:landsat",imageFormat:"image/png8",visible:!0,sourceLink:"http://osfac.net/facet.html",sourceLabel:"FACET"},{id:"hillshade",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:color_hillshade",imageFormat:"image/png8",visible:!0,sourceLink:"http://srtm.csi.cgiar.org/",sourceLabel:"CGIAR"},{id:"fire",label:"Fire",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:fires_2011",imageFormat:"image/png8",visible:!0,legend:"fire.png",sourceLink:"https://lpdaac.usgs.gov/products/modis_products_table/myd14a2",sourceLabel:"Thermal Anomalies and Fire"},{id:"deforestation",label:"Deforestation (Gross forest cover loss)",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:deforestation",wmsTime:"",imageFormat:"image/png8",visible:!0,legend:"deforestation.png",sourceLink:"http://osfac.net/facet.html",sourceLabel:"FACET"},{id:"trainingData",label:"National Training Data",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:nov_2011_workshop",imageFormat:"image/png8",visible:!0,legend:"nov_workshop_data.png"},{id:"reddPlusProjects",label:"REDD+ Projects",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:redd_plus_projects",imageFormat:"image/png8",visible:!0,sourceLink:"http://www.observatoire-comifac.net/",sourceLabel:"OFAC"},{id:"reddPlusProjects_simp",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:redd_plus_projects_simp",imageFormat:"image/png8",visible:!1,queryable:!0},{id:"reddPlusInitiatives",label:"REDD+ Initiatives",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:redd_plus_initiatives",imageFormat:"image/png8",visible:!0,sourceLink:"http://www.observatoire-comifac.net/",sourceLabel:"OFAC"},{id:"reddPlusInitiatives_simp",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:redd_plus_initiatives_simp",imageFormat:"image/png8",visible:!1,queryable:!0},{id:"hydrography",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:hydrography",imageFormat:"image/png8",visible:!0,sourceLink:"http://www.wri.org/publication/interactive-forest-atlas-democratic-republic-of-congo",sourceLabel:"WRI"},{id:"intactForest",label:"Intact Forest",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsTime:"2000,2005,2010",wmsName:"unredd:intact_forest",imageFormat:"image/png8",visible:!0,legend:"intact_forest.png",sourceLink:"http://www.intactforests.org/",sourceLabel:"www.intactforests.org"},{id:"loggingConcessions",label:"Logging Concessions",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:logging_concessions",imageFormat:"image/png8",visible:!0,sourceLink:"http://www.wri.org/publication/interactive-forest-atlas-democratic-republic-of-congo",sourceLabel:"WRI"},{id:"loggingConcessions_simp",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:logging_concessions_simp",imageFormat:"image/png8",visible:!1,queryable:!0},{id:"protectedAreas",label:"Protected Areas",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:protected_areas",imageFormat:"image/png8",visible:!0,sourceLink:"http://www.wri.org/publication/interactive-forest-atlas-democratic-republic-of-congo",sourceLabel:"WRI"},{id:"protectedAreas_simp",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:protected_areas_simp",imageFormat:"image/png8",visible:!1,queryable:!0},{id:"countryBoundaries",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:boundaries",imageFormat:"image/png8",visible:!0,sourceLink:"http://www.wri.org/publication/interactive-forest-atlas-democratic-republic-of-congo",sourceLabel:"WRI"},{id:"administrativeUnits",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:admin_units",imageFormat:"image/png8",visible:!0,sourceLink:"http://www.wri.org/publication/interactive-forest-atlas-democratic-republic-of-congo",sourceLabel:"WRI"},{id:"administrativeUnits_simp",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:admin_units_simp",imageFormat:"image/png8",visible:!1,queryable:!0},{id:"provinces",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:provinces",imageFormat:"image/png8",visible:!0,sourceLink:"http://www.wri.org/publication/interactive-forest-atlas-democratic-republic-of-congo",sourceLabel:"WRI"},{id:"provinces_simp",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:provinces_simp",imageFormat:"image/png8",visible:!1,queryable:!0},{id:"roads",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:roads",imageFormat:"image/png8",visible:!0,sourceLink:"http://www.wri.org/publication/interactive-forest-atlas-democratic-republic-of-congo",sourceLabel:"WRI"},{id:"settlements",label:"Settlements",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:settlements",imageFormat:"image/png8",visible:!0,legend:"settlements.png",sourceLink:"http://www.wri.org/publication/interactive-forest-atlas-democratic-republic-of-congo",sourceLabel:"WRI"},{id:"ecoregions",label:"Ecoregions",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:ecoregions",imageFormat:"image/png8",visible:!0,legend:"ecoregions.png",sourceLink:"http://www.worldwildlife.org/science/ecoregions/item1267.html)",sourceLabel:"WWF"},{id:"plots",label:"Plots",baseUrl:"http://rdc-snsf.org/diss_geoserver/wms",wmsName:"unredd:plots",imageFormat:"image/png8",visible:!0,queryable:!0,queryDialogType:"custom"}],contexts:[{id:"blueMarble",active:!0,infoFile:"bluemarble_def.html",label:"Blue Marble",layers:["blueMarble"]},{id:"facetForestClassification",infoFile:"forest_classification_def.html",label:"FACET Forest Classification",layers:["forestClassification"],downloadLink:"/portal/static/data/gis/facet_forest_classification.tif.zip"},{id:"FnFMask1990",infoFile:"/RDC_FnF.html",label:"DRC 1990 Forest non Forest Mask",layers:["FnFMask1990"]},{id:"uclForestClassification",infoFile:"ucl_2010_forest_classification_def.html",label:"UCL Forest Classification",layers:["uclForestClassification"],downloadLink:"/portal/static/data/gis/ucl_forest_classification.tif.zip"},{id:"landsat",infoFile:"landsat_def.html",label:"Landsat",layers:["landsat"]},{id:"hillshade",infoFile:"hillshade_def.html",label:"Hillshade",layers:["hillshade"]},{id:"deforestation",infoFile:"deforestation_def.html",label:"Deforestation (Gross forest cover loss)",layers:["deforestation"]},{id:"trainingData",infoFile:"training_data_def.html",label:"National Training Data",layers:["trainingData"]},{id:"reddPlusProjects",infoFile:"redd_plus_projects_def.html",label:"REDD+ Projects",layers:["reddPlusProjects","reddPlusProjects_simp"],inlineLegendUrl:"http://rdc-snsf.org/diss_geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=unredd:redd_plus_projects&TRANSPARENT=true"},{id:"reddPlusInitiatives",infoFile:"redd_plus_initiatives_def.html",label:"REDD+ Initiatives",layers:["reddPlusInitiatives","reddPlusInitiatives_simp"],inlineLegendUrl:"http://rdc-snsf.org/diss_geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=unredd:redd_plus_initiatives&TRANSPARENT=true"},{id:"hydrography",infoFile:"hydrography_def.html",label:"Hydrography",layers:["hydrography"],inlineLegendUrl:"http://rdc-snsf.org/diss_geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=unredd:hydrography&TRANSPARENT=true"},{id:"loggingConcessions",infoFile:"logging_concessions_def.html",label:"Logging Concessions",layers:["loggingConcessions","loggingConcessions_simp"],inlineLegendUrl:"http://rdc-snsf.org/diss_geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=unredd:logging_concessions&TRANSPARENT=true"},{id:"protectedAreas",infoFile:"protected_areas_def.html",label:"Protected Areas",layers:["protectedAreas","protectedAreas_simp"],inlineLegendUrl:"http://rdc-snsf.org/diss_geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=unredd:protected_areas&TRANSPARENT=true"},{id:"provinces",infoFile:"provinces_def.html",label:"Provinces",layers:["provinces","provinces_simp"],inlineLegendUrl:"http://rdc-snsf.org/diss_geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=unredd:provinces&TRANSPARENT=true&RULE=border"},{id:"administrativeUnits",infoFile:"administrative_boundaries_def.html",label:"Administrative Units",layers:["administrativeUnits","administrativeUnits_simp"],inlineLegendUrl:"http://rdc-snsf.org/diss_geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=unredd:admin_units&TRANSPARENT=true"},{id:"countryBoundaries",active:!0,infoFile:"country_boundaries_def.html",label:"Country Boundaries",layers:["countryBoundaries"],inlineLegendUrl:"http://rdc-snsf.org/diss_geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=unredd:boundaries&TRANSPARENT=true"},{id:"roads",infoFile:"roads_def.html",label:"Roads",layers:["roads"]},{id:"settlements",infoFile:"settlements_def.html",label:"Settlements",layers:["settlements"]},{id:"intactForest",infoFile:"intact_forest_def.html",label:"Intact Forest",layers:["intactForest"]},{id:"ecoregions",infoFile:"ecoregions_def.html",label:"Ecoregions",layers:["ecoregions"]},{id:"reddPlusActivitiesDeforestation",infoFile:"data_not_available.html",label:"Deforestation (Gross forest cover loss)"},{id:"reddPlusActivitiesDegradation",infoFile:"data_not_available.html",label:"Degradation"},{id:"reddPlusActivitiesEnhancement",infoFile:"data_not_available.html",label:"Enhancement"},{id:"reddPlusActivitiesConservation",infoFile:"data_not_available.html",label:"Conservation"},{id:"reddPlusActivitiesSustainableForestManagement",infoFile:"data_not_available.html",label:"Sustainable Forest Management"},{id:"plots",label:"Plots",layers:["plots"],inlineLegendUrl:"http://rdc-snsf.org/diss_geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=unredd:plots&TRANSPARENT=true"},{id:"degradation",infoFile:"data_not_available.html",label:"Degradation"},{id:"regrowth",infoFile:"data_not_available.html",label:"regrowth"},{id:"conservation",infoFile:"data_not_available.html",label:"Conservation"},{id:"afforestation",infoFile:"afforestation_def.html",label:"Afforestation"},{id:"reforestation",infoFile:"reforestation_def.html",label:"Reforestation"},{id:"activeFire",infoFile:"fire_def.html",label:"Fire 2011",layers:["fire"]},{id:"burntArea",infoFile:"data_not_available.html",label:"Burnt area"},{id:"openstreetmap",label:"OpenStreetMap",layers:["openstreetmap"],active:!1}],contextGroups:{items:[{group:{label:"Base Layers",items:[{context:"openstreetmap"},{context:"blueMarble"},{context:"FnFMask1990"},{context:"facetForestClassification"},{context:"uclForestClassification"},{context:"landsat"},{context:"hillshade"}]}},{group:{label:"Administrative Areas",items:[{context:"countryBoundaries"},{context:"provinces"},{context:"administrativeUnits"}]}},{group:{label:"REDD+ Initiatives",infoFile:"redd_plus_activities_def.html",items:[{context:"reddPlusActivitiesDeforestation"},{context:"reddPlusActivitiesDegradation"},{context:"reddPlusActivitiesEnhancement"},{context:"reddPlusActivitiesConservation"},{context:"reddPlusActivitiesSustainableForestManagement"}]}},{group:{label:"REDD+ Registry",items:[{context:"reddPlusProjects"},{context:"reddPlusInitiatives"}]}},{group:{label:"Forest area and forest area change",infoFile:"forest_area_and_forest_area_changes_def.html",items:[{group:{label:"Forest land remaining forest land",items:[{context:"degradation"},{context:"regrowth"},{context:"conservation"}]}},{group:{label:"Forest land converted to non-forest land",items:[{context:"deforestation"},{context:"trainingData"},{context:"intactForest"}]}},{group:{label:"Non-forest land converted to forest land",items:[{context:"afforestation"},{context:"reforestation"}]}},{group:{label:"Biomass fire",items:[{context:"activeFire"},{context:"burntArea"}]}}]}},{group:{label:"Other",items:[{context:"plots"},{context:"protectedAreas"},{context:"loggingConcessions"},{context:"hydrography"},{context:"ecoregions"},{context:"roads"},{context:"settlements"}]}}]}}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0xMC0yOFQxMjoxMDowODwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjUuMTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj41PC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KHA31kgAAADlJREFUOBFjYBgFgy4EGNFdtGrVqv8gsbCwMLAcjI+uDsaHqYPxmWCMkUOPhiHlcT0ahpSH4Qg0AQC7CRgKACa8BwAAAABJRU5ErkJggg=="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0xMC0yOFQxMToxMDo4MTwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjUuMTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj41PC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K92hevQAAAFFJREFUOBFjYBgFgy4EGDFc9JPhP1iMnQEs9x8IMNQgCTACARKXgQmZMzLYKP4Hefm/GiQMGW+NhiGRSQAjDFmMIenuz1lI+hpNh0SG5IhSBgBaxRUKmt8rVwAAAABJRU5ErkJggg=="},function(e,t,i){var s,r;i(32),s=i(10);var a=i(46);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,t,i){var s,r;i(30),s=i(11);var a=i(44);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-63031e8e",e.exports=s},function(e,t,i){var s,r;i(29),s=i(12);var a=i(43);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-2c8eda60",e.exports=s},function(e,t,i){var s,r;i(31),s=i(13);var a=i(45);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-77da1453",e.exports=s},function(e,t,i){var s,r;i(34),i(33),s=i(14);var a=i(47);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-e87a0db2",e.exports=s},function(module,exports,__webpack_require__){module.exports={render:function(){with(this)return _h("li",[isGroup?_h("div",{staticClass:"bold",on:{click:toggleGroup}},["\n    "+_s(isRoot?"Layers":model.label)+"\n    [",_h("span",{staticClass:"toggle"},[_s(open?"-":"+")]),"]\n  "]):_h("div",[hasLayers?_h("input",{directives:[{name:"model",rawName:"v-model",value:active,expression:"active"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(active)?_i(active,null)>-1:_q(active,!0)},on:{change:function(e){var t=active,i=e.target,s=!!i.checked;if(Array.isArray(t)){var r=null,a=_i(t,r);s?a<0&&(active=t.concat(r)):a>-1&&(active=t.slice(0,a).concat(t.slice(a+1)))}else active=s}}}):_e()," ",_h("img",{directives:[{name:"show",rawName:"v-show",value:model.hasLegends&&!active,expression:"model.hasLegends && !active"}],staticClass:"inline-legend",attrs:{src:__webpack_require__(36)}})," ",_h("img",{directives:[{name:"show",rawName:"v-show",value:model.hasLegends&&active,expression:"model.hasLegends && active"}],staticClass:"inline-legend",attrs:{src:__webpack_require__(37)},on:{click:showLegend}})," ",_h("label",{class:{dimmed:!hasLayers},on:{click:toggleLayer}},[model.inlineLegendUrl?_h("img",{staticClass:"inline-legend",attrs:{src:model.inlineLegendUrl}}):_e(),"\n      "+_s(isRoot?"Layers":model.label)+"\n    "])])," "," ",isGroup?_h("ul",{directives:[{name:"show",rawName:"v-show",value:open,expression:"open"}]},[_l(model.items,function(e){return _h("item",{staticClass:"item",attrs:{model:e}})})]):_e()])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{attrs:{id:"header"}},[_h("div",{attrs:{id:"header-content"}},[_h("h1",["SLMS sample portal"])])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("ul",{attrs:{id:"layer-selector"}},[_h("item",{staticClass:"item",attrs:{model:treeData}})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_h("mapPane")," ",_h("banner")," ",_h("layerSelector")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{attrs:{id:"map"}})}]}}]);
//# sourceMappingURL=app.896e1581bcf8ac77aed5.js.map