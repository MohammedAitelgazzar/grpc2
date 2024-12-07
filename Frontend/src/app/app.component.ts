import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompteComponent } from "./compte/compte.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CompteComponent]
})
export class AppComponent {
  title = 'grpcFront';
}
