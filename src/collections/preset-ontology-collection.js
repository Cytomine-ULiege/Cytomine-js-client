import Collection from './collection.js';
import PresetOntology from '../models/preset-ontology.js';

export default class PresetOntologyCollection extends Collection {
  /** @inheritdoc */
  static get model() {
    return PresetOntology;
  }

  /** @inheritdoc */
  static get allowedFilters() {
    return ['imageinstance'];
  }
}
