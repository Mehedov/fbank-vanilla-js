import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/service/render.service.js'

import styles from './card-info.module.scss'
import template from './card-info.template.html'

export class CardInfo extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles)
		return this.element
	}
}