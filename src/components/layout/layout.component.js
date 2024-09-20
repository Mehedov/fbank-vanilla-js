import { $F } from '@/core/fquery/fquery.lib'
import renderService from '@/core/service/render.service'
import { Header } from './header/header.component'
import * as styles from './layout.module.scss'
import template from './layout.template.html'

export class Layout {
	constructor({ route, children }) {
		this.route = route
		this.children = children
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		const mainElement = $F(this.element).find('main')

		const contentContainer = $F(this.element).find('#content')
		contentContainer.append(this.children)

		mainElement
			.before(new Header().render())
			.append(contentContainer.element)

		return this.element
	}
}
