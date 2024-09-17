import { BaseScreen } from '@/core/component/base-screen.component'
import renderService from '@/core/service/render.service'
import * as style from './home.module.scss'; 
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(template, [], style)
		return element.outerHTML
	}
}
