import Collection from './collection.js';
import Preset from '../models/preset.js';

export default class PresetCollection extends Collection {
  /** @inheritdoc */
  static get model() {
    return Preset;
  }

  /** @inheritdoc */
  static get allowedFilters() {
    return ['project'];
  }
}
