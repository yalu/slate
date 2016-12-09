
import Character from './character'
import Mark from './mark'
import { Record, Set } from 'immutable'

/**
 * Default properties.
 *
 * @type {Object}
 */

const DEFAULTS = {
  marks: new Set(),
  text: ''
}

/**
 * Range.
 *
 * @type {Range}
 */

class Range extends new Record(DEFAULTS) {

  /**
   * Create a new `Range` with `properties`.
   *
   * @param {Object|Range} properties
   * @return {Range}
   */

  static create(properties = {}) {
    if (properties instanceof Range) return properties
    properties.text = properties.text
    properties.marks = Mark.createSet(properties.marks)
    return new Range(properties)
  }

  /**
   * Get the node's kind.
   *
   * @return {String}
   */

  get kind() {
    return 'range'
  }

  /**
   * Return range as a list of characters
   *
   * @return {List<Character>}
   */

  getCharacters() {
    const { marks } = this
    const chars = this.text
      .split('')
      .map(text => Character.create({ text, marks }))
    return Character.createList(chars)
  }
}

/**
 * Export.
 *
 * @type {Range}
 */

export default Range
