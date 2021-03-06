import { Layer, Context, Group } from '../config.js'
import httpRequest from '../httpRequest'

class _Config {
  constructor(json) {
    this.layers = json.layers.map(layerConf => new Layer(layerConf));
    this.contexts = json.contexts.map(contextConf => new Context(contextConf, this.layers));
    this.contexts.forEach(context => context.layers.forEach(layer => {
      layer.active = context.active;
    }));
    this.groups = new Group(json.contextGroups, this.contexts);
  }
}

export default {
  getLayers(lang, cb) {
    // To keep the compatibility with the old portal, layers.json can be localized
    const url = '../static/layers.json' + (lang ? `?lang=${lang}` : '');
    httpRequest(url, (responseText) => {
      try {
        cb(new _Config(JSON.parse(responseText)));
      } catch(e) {
        alert(e);
      }
    }, (error) => {
      alert(error);
    });
  }
}
