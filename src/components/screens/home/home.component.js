import { BaseScreen } from '@/core/component/base-screen.component'
import { $F } from '@/core/fquery/fquery.lib'
import renderService from '@/core/service/render.service'
import * as style from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(template, [], style)

		$F(element).find('h1').css('color', 'red')

		return element
	}
}
