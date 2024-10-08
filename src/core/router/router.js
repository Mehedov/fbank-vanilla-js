import { Layout } from '@/components/layout/layout.component'
import { NotFound } from '@/components/screens/not-found/not-found.component'
import { $F } from '../fquery/fquery.lib'
import { ROUTES } from './routes.data'

export class Router {
	#routes = ROUTES
	#currentRoute = null
	#layout = null

	constructor() {
		window.addEventListener('popstate', () => {
			this.#handleRouteChange()
		})
		this.#handleRouteChange()
		this.#handleLinks()
	}

	getCurrentPath() {
		return window.location.pathname
	}

	navigate(path) {
		if (path !== this.getCurrentPath()) {
			window.history.pushState('', {}, path)
			this.#handleRouteChange()
		}
	}

	#handleLinks() {
		document.addEventListener('click', event => {
			const target = event.target.closest('a')
			if (target) {
				event.preventDefault()
				this.navigate(target.href)
			}
		})
	}

	#handleRouteChange() {
		const path = this.getCurrentPath() || '/'
		let route = this.#routes.find(route => route.path === path)

		if (!route) {
			route = {
				component: NotFound
			}
		}

		this.#currentRoute = route
		this.render()
	}

	render() {
		const component = new this.#currentRoute.component()

		if (!this.#layout) {
			this.#layout = new Layout({
				route: this,
				children: component.render()
			}).render()

			$F('#app').append(this.#layout)
		} else {
			$F('#content').html('').append(component.render())
		}
	}
}
