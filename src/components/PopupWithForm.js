import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
  }
  _getInputValues() {
    const inputList = [...this._form.querySelectorAll(".popup__field")];
    const values = {};
    inputList.forEach((item) => {
      values[item.name] = item.value;
    });
    return values;
  }

  setEventListeners() {
    // добавлять обработчик сабмита формы.
    super.setEventListeners();
    this._form.addEventListener("submit", () => {
      this._handleSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
