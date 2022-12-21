import Model from './model.js';

export default class Preset extends Model {
  /** @inheritdoc */
  static get callbackIdentifier() {
    return 'preset';
  }

  /** @inheritdoc */
  _initProperties() {
    super._initProperties();

    this.project = null;
    this.user = null;
  }
}
