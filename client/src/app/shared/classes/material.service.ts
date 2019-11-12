import {ElementRef} from "@angular/core";

declare var M;

export class MaterialService {
  static toast(message) {
    M.toast({html: message});
  }
  static initializeFloatingButton(ref: ElementRef) {
    M.FloatingActionButton.init(ref.nativeElement);
  }
  static updateTestInputs() {
    M.updateTextFields();
  }
}
