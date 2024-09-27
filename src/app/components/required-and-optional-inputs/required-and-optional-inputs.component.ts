import {Component, Input,} from '@angular/core';
import {AngularAppLogoComponent} from "../angular-app-logo/angular-app-logo.component";

@Component({
  selector: 'app-required-and-optional-inputs',
  standalone: true,
  imports: [
    AngularAppLogoComponent
  ],
  templateUrl: './required-and-optional-inputs.component.html',
  styleUrl: './required-and-optional-inputs.component.css'
})
export class RequiredAndOptionalInputsComponent {
 // @Input() avatar !: string; NOTE:: Adding (!) is for fixing - Property name has no initializer and is not definitely assigned in the constructor.
  //this will think we know we are going to pass the value but not now but due o this someime we forget to assign then it may cause error that value will not get visible on UI then make it mandatory then how lets see below code.
  // In Input function we can pass object and keys as required true this will make it mandatory to pass value
  @Input({required: true,}) name! : string
  @Input({required: true}) avatar! : string
}
