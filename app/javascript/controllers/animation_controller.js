import { Controller } from "@hotwired/stimulus";
export default class extends Controller {
  static targets = ["content"];
  connect() {
    this.hide();
  }

  toggle(e) {
    e.preventDefault();
    if (this.contentTarget.classList.contains("hidden")) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.contentTarget.classList.remove("hidden");
  }

  hide() {
    this.contentTarget.classList.add("hidden");
  }
}
