import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/service/render.service.js'

import { $F } from '@/core/fquery/fquery.lib'
import styles from './loader.module.scss'
import template from './loader.template.html'

export const LOADER_SELECTOR = '[data-component="loader"]'

export class Loader extends ChildComponent {
	constructor() {
		super()

		this.width = width
		this.height = height
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$F(this.element)
			.css('width', `${this.width}px`)
			.css('height', `${this.height}px`)
			.addClass('bounce')


		return this.element
	}
}
