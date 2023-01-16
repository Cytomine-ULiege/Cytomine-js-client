import Model from './model.js';

export default class PresetOntology extends Model {
  /** @inheritdoc */
  static get callbackIdentifier() {
    return 'presetontology';
  }

  /** @inheritdoc */
  _initProperties() {
    super._initProperties();

    this.image = null;
    this.preset = null;
    this.term = null;

    this.opacity = null;
    this.visible = null;
  }
}
