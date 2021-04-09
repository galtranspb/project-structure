import Category from '../../components/categories';
import NotificationMessage from '../../components/notification';
import fetchJson from '../../utils/fetch-json.js';

export default class Page {
	element;
	subElements = {};
	components = {};

	get template() {
		return `
			<div class="categories">
				<div class="content__top-panel">
					<h1 class="page-title">Категории товаров</h1>
				</div>
				<div data-element="categories">
				</div>
			</div>
		`;
	}

	render() {
		const wrapper = document.createElement('div');

		wrapper.innerHTML = this.template;
		this.element = wrapper.firstElementChild;
		this.subElements = this.getSubElements(this.element);

    this.renderComponents();

		return this.element;
	}

  getSubElements(element) {
    const elements = element.querySelectorAll('[data-element]');

    return [...elements].reduce((accum, subElement) => {
      accum[subElement.dataset.element] = subElement;

      return accum;
    }, {});
  }

  async renderComponents() {
  	const url = 'https://course-js.javascript.ru/api/rest/categories?_sort=weight&_refs=subcategory';
  	const data = await fetchJson(url);
    const categories = data.map(item => new Category(item).element);

  	this.subElements.categories.append(...categories);
    this.components = {categories};
    this.initEventListeners();
  }

  initEventListeners() {
    this.subElements.categories.addEventListener('pointerdown', Category.onCategoriesPointerdown);
    this.subElements.categories.addEventListener('sortable-list-reorder', event => {
      const {from, to} = event.detail;
      const notification = new NotificationMessage('category order saved');

      notification.show();
    });
  }

  destroy() {
    this.element.remove();
    this.subElements = {};
    this.components = {};
  }
}