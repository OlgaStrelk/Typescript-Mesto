export class Popup {
  _popup: Element;
  private _closeButton: Element;
  
  constructor(popupSelector: string) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".popup__close");


    this._closePopupByEsc = this._closePopupByEsc.bind(this)
  }

  _closePopupByEsc(evt: { key: string; }) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open(url?: string, text?: string) {
    document.addEventListener("keydown", this._closePopupByEsc);
    this._popup.classList.add("popup_is-opened");
  }

  close() {
    document.removeEventListener("keydown", this._closePopupByEsc);
    this._popup.classList.remove("popup_is-opened");
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      console.log(evt.target)
      if (
        // !evt.target.closest(".popup__container") ||
        evt.target === this._closeButton
      ) {
        this.close();
      }
    });
  }
}
