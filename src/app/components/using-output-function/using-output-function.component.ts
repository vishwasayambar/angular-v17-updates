import {Component, computed, EventEmitter, input, output, Output} from '@angular/core';

@Component({
	selector: 'app-using-output-function',
	standalone: true,
	imports: [],
	templateUrl: './using-output-function.component.html',
})
export class UsingOutputFunctionComponent {
	name = input.required<string>();
	avatar = input.required<string>();
	
	nameInUpperCase = computed(() => {
		return this.name().toUpperCase();
	})

//   Before Output Emitter Syntax-----
//   We Need use Decorator and has to create manually object of Emitter to emit the values
// 	@Output() select = new EventEmitter<string>();
	
	
	// After using input() function;
	// select = output(); //Now below emit code will gave error as we have mention that what time of parameter you are passing
	// as before  we don't have to new EventEmitter() specify what you are going to pass but here we need
  // this is also same as @Output decorator inside it also do same thing but its simple syntax to this also
	select = output<string>();
	
	follow() {
		this.select.emit(this.name()); // if we are using output function to create Output we have mention above type of parameter we are passing
	}
}
