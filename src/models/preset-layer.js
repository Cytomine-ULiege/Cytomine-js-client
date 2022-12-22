import Model from './model.js';

export default class PresetLayer extends Model {
  /** @inheritdoc */
  static get callbackIdentifier() {
    return 'presetlayer';
  }

  /** @inheritdoc */
  _initProperties() {
    super._initProperties();

    this.image = null;
    this.preset = null;
    this.user = null;

    this.opacity = null;
    this.drawOn = null;
    this.visible = null;
  }
}
