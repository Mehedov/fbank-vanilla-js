import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/service/render.service.js'

import { $F } from '@/core/fquery/fquery.lib'
import * as styles from './heading.module.scss'
import template from './heading.template.html'

export class Heading extends ChildComponent {
	constructor(title = '') {
		super()
		this.title = title
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		$F(this.element).text(this.title)

		return this.element
	}
}
