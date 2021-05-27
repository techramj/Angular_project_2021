import { HostBinding, HostListener } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    console.log('click listner called')
    this.isOpen = !this.isOpen;
  }

}
