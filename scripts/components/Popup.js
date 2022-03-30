export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._closePopupByEsc = this._closePopupByEsc(this)
  }

  _closePopupByEsc(evt) {
    if (evt.key === "Escape") {
      this.close;
    }
  }

  open() {
    document.addEventListener("keydown", this._closePopupByEsc);
    this._popup.classList.add("popup_is-opened");
  }

  close() {
    document.removeEventListener("keydown", this._closePopupByEsc);
    this._popup.classList.remove("popup_is-opened");
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close");

    this._popup.addEventListener("click", (evt) => {
      if (
        !evt.target.closest(".popup__content") ||
        evt.target === closeButton
      ) {
        this.close();
      }
    });
  }
}
