import Collection from './collection.js';
import PresetImage from '../models/preset-image.js';

export default class PresetImageCollection extends Collection {
  /** @inheritdoc */
  static get model() {
    return PresetImage;
  }

  /** @inheritdoc */
  static get allowedFilters() {
    return ['imageinstance'];
  }
}
