import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AboutUsComponent } from "./aboutus/aboutus.component";
import { ContactComponent } from "./contact/contact.component";
import { CitiesComponent } from './cities/cities.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, AboutUsComponent, ContactComponent, CitiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'travelang';
  constructor(private router:Router){}

  about(){
    this.router.navigate(['/aboutus'])
  }
  contact(){
    this.router.navigate(['/contact'])
  }
  home(){
    this.router.navigate(['/cities'])
  }
}

