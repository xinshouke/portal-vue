<template>
  <div id="map"></div>
</template>

<script>
import OlLayerFactory from '../olLayerFactory';
import { mapGetters } from 'vuex'
import map from '../map';

const olLayers = {}

export default {
  name: 'mapPane',
  mounted() {
    map.setTarget('map');
  },

  watch: {
    layers(layers) {
      layers.forEach(layerConfig => {
        try {
          const olLayer = OlLayerFactory.createOlLayer(layerConfig);
          if (olLayer) {
            olLayers[layerConfig.id] = olLayer;
            map.addLayer(olLayer);
          }
        } catch (e) {
          console.log(e);
        }
      });
    },
    activeLayers(activeLayers) {
      this.layers.forEach(l =>
        olLayers[l.id].setVisible(l.visible && activeLayers.find(a => a.id === l.id)));
    }
  },

  computed: mapGetters([
    'layers',
    'contexts',
    'activeLayers'
  ])
}
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>

<style lang="scss">
@import "../assets/global.scss";

.ol-zoom {
  top: $banner-height + 5px;
}
.ol-dragzoom {
  border-color: #999;
  border-width: 2px;
  border-style: dashed;
}
</style>
