import Model from './model.js';

export default class PresetChannel extends Model {
  /** @inheritdoc */
  static get callbackIdentifier() {
    return 'presetchannel';
  }

  /** @inheritdoc */
  _initProperties() {
    super._initProperties();

    this.image = null;
    this.preset = null;

    this.gamma = null;
    this.channel = null;
    this.min = null;
    this.max = null;
    this.inverted = null;
    this.intMinMax = null;
    this.logScale = null;
    this.visible = null;
    this.color = null;
  }
}
