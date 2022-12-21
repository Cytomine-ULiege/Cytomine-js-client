import Collection from './collection.js';
import PresetChannel from '../models/preset-channel.js';

export default class PresetChannelCollection extends Collection {
  /** @inheritdoc */
  static get model() {
    return PresetChannel;
  }

  /** @inheritdoc */
  static get allowedFilters() {
    return ['imageinstance'];
  }
}
