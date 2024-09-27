import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IntroducingSignalComponent} from "./signals/introducing-signal/introducing-signal.component";
import {BaseComponent} from "./components/base/base.component";
import {AngularAppLogoComponent} from "./components/angular-app-logo/angular-app-logo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroducingSignalComponent, BaseComponent, AngularAppLogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-v17-updates';
}
