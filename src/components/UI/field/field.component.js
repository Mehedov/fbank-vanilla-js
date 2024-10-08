import ChildComponent from '@/core/component/child.component.js'
import renderService from '@/core/service/render.service.js'

import { $F } from '@/core/fquery/fquery.lib'
import * as styles from './field.module.scss'
import template from './field.template.html'

export class Field extends ChildComponent {
	constructor({ placeholder, type = 'text', value = '', name, variant }) {
		super()
		if (!name) {
			throw new Error('Please fill field "name"!')
		}

		this.placeholder = placeholder
		this.type = type
		this.value = value
		this.name = name
		this.variant = variant
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		const inputElement = $F(this.element).find('input').input({
			placeholder: this.placeholder,
			type: this.type,
			value: this.value,
			name: this.name
		})

		if (this.type === 'number') {
			inputElement.numberInput()
		}

		const isCreditCard = this.variant === 'credit-card'

		if (isCreditCard) {
			inputElement.creditCardInput()
		}

		return this.element
	}
}
