import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IntroducingSignalComponent} from "./signals/introducing-signal/introducing-signal.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, IntroducingSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-v17-updates';
}
