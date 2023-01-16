import Model from './model.js';

export default class PresetImage extends Model {
  /** @inheritdoc */
  static get callbackIdentifier() {
    return 'presetimage';
  }

  /** @inheritdoc */
  _initProperties() {
    super._initProperties();

    this.image = null;
    this.preset = null;

    this.rotation = null;
    this.c = null;
    this.z = null;
    this.t = null;
  }
}
