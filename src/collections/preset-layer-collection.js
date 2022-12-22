import Collection from './collection.js';
import PresetLayer from '../models/preset-layer.js';

export default class PresetLayerCollection extends Collection {
  /** @inheritdoc */
  static get model() {
    return PresetLayer;
  }

  /** @inheritdoc */
  static get allowedFilters() {
    return ['imageinstance'];
  }
}
