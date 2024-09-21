import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/service/render.service.js'

import { $F } from '@/core/fquery/fquery.lib'
import * as styles from './button.module.scss'
import template from './button.template.html'

export class Button extends ChildComponent {
	constructor({ children, onClick, variant }) {
		super()
		if (!children) {
			throw new Error('Children is empty')
		}

		this.children = children
		this.onClick = onClick
		this.variant = variant
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$F(this.element).html(this.children).click(this.onClick)

		// Not safe!
		if (this.variant) {
			$F(this.element).addClass(styles[this.variant])
		}

		return this.element
	}
}
