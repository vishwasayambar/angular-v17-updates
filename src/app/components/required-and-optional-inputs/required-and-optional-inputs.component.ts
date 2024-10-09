import {Component, computed, input, Input,} from '@angular/core';
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
  
    // IMPR NOTE: As we cannot change the value of Input signal like normal signal by using set()
  
	// @Input() avatar !: string; NOTE:: Adding (!) is for fixing - Property name has no initializer and is not definitely assigned in the constructor.
	//this will think we know we are going to pass the value but not now but due o this sometime we forget to assign then it may cause error that value will not get visible on UI then make it mandatory then how lets see below code.
	// In Input function we can pass object and keys as required true this will make it mandatory to pass value
	// @Input({required: true,}) name! : string
	// @Input({required: true}) avatar! : string;
	
	// NOTE:: This is input signal rather than using above you ca use this to take input here we can give initial value also in that input function
	// As Above we can add required to input also then we don't need to pass initial value as we forcing to send value by adding required also we don't need that exclamation mark here
	// name = input<string>();
	// avatar = input<string>();
	name = input.required<string>();
	avatar = input.required<string>();
    
    // here below also we can use computed to manipulate the input value
    nameInUpperCase = computed(() => {
      return this.name().toUpperCase();
    })
}
