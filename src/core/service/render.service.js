class RenderService {
	/**
	 * @param {string} html
	 * @param {Array} components
	 * @param {Object} [styles]
	 * @returns {HTMLElement}
	 * */
	htmlToElement(html, components = [], styles) {
		const template = document.createElement('template')
		template.innerHTML = html.trim()

		const element = template.content.firstChild
		return element
	}
}

export default new RenderService()
