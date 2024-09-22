import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/service/render.service.js'

import * as styles from './<FTName>.module.scss'
import template from './<FTName>.template.html'

export class <FTName | pascalcase> extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles)
		return this.element
	}
}