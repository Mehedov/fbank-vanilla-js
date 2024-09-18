/**
 * Represents the FQuery class for working with DOM elements.
 */
class FQuery {
	/**
	 * Create a new FQuery instance.
	 * @param {string|HTMLElement} selector - A css selector string or an HTMLElement
	 */
	constructor(selector) {
		if (typeof selector === 'string') {
			this.element = document.querySelector(selector)
		} else if (selector instanceof HTMLElement) {
			this.element = selector
		} else {
			throw new Error('Invalid selector type')
		}

		if (!this.element) {
			throw new Error(`Element ${this.element} not found!`)
		}
	}

	/**
	 * @param {string|HTMLElement} selector
	 * @returns {FQuery}
	 */
	find(selector) {
		const element = new FQuery(this.element.querySelector(selector))
		if (element) {
			return element
		} else {
			throw new Error(`Element ${selector} not found!`)
		}
	}

	/**
	 * @param {string} property
	 * @param {string} value
	 * @returns {FQuery}
	 */
	css(property, value) {
		if (property !== 'string' && typeof value !== 'string') {
			throw new Error('Property and value must be string')
		}
		this.element.style[property] = value
	}
}

/**
 * Create a new FQ instance for the given selector.
 * @param {string|HTMLElement} selector - A css selector string or an HTMLElement
 * @returns {FQuery} A new FQuery instance for the given selector.
 */
export function $F(selector) {
	return new FQuery(selector)
}
