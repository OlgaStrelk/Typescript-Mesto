//const cardsContainer = document.querySelector(".cards");
//items — это массив данных, которые нужно добавить на страницу при инициализации класса.
//Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
export class Section {
  constructor({ items, renderer }, container) {
    this._initialArray = items;
    this._container = container;
    this._renderer = renderer;
  }

  renderElements() {
    this._initialArray.forEach((data) => {
      this._renderer(data);
    });
  }

  addItem(element) {
    this._container.prepend(element); //принимает DOM-элемент и добавляет его в контейнер
  }
}
