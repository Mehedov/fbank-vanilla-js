import { Field } from '@/components/UI/field/field.component'
import { BaseScreen } from '@/core/component/base-screen.component'
import { $F } from '@/core/fquery/fquery.lib'
import renderService from '@/core/service/render.service'
import * as styled from './home.module.scss'
import template from './home.template.html'
import { Button } from '@/components/UI/button/button.component'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'test',
					placeholder: 'Search',
					variant: 'green'
				}),
				new Button({
					children: 'Button',
					onClick: () => alert('CLICK!!!'),
					variant: 'red'
				})
			],
			styled
		)

		$F(element).find('h1').css('color', 'red')

		return element
	}
}
