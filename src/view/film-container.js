import {createElement} from "../utils.js";

const createFilmContainer = () => {
  return (
    `<section class="films">
    </section>`
  );
};

export default class FilmContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmContainer();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(createFilmContainer());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
