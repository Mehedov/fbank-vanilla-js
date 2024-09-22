import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/service/render.service.js'

import { $F } from '@/core/fquery/fquery.lib'
import * as styles from './user-item.module.scss'
import template from './user-item.template.html'

export class UserItem extends ChildComponent {
	constructor(user, isGray = false, onClick) {
		super()

		if (!user) throw new Error('User should be passed!')
		if (!user?.name) throw new Error('User must have a name!')
		if (!user?.avatarPath) throw new Error('User must have a "avatarPath"!')

		this.user = user
		this.onClick = onClick
		this.isGray = isGray
	}

	#preventDefault(event) {
		event.preventDefault()
	}

	update({ avatarPath, name }) {
		if (avatarPath && name) {
			$F(this.element)
				.find('img')
				.attr('src', avatarPath)
				.attr('alt', name)

			$F(this.element).find('span').text(name)
		}
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		this.update(this.user)

		$F(this.element).click(this.onClick || this.#preventDefault.bind(this))

		if (!this.onClick) $F(this.element).attr('disabled', '')
		if (!this.isGray) $F(this.element).addClass(styles.gray)

		return this.element
	}
}
