import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cities/:id', component: CityDetailComponent },  // Route with ID parameter
  { path: 'register', component: RegisterComponent },  // New route for Register
  { path: '**', redirectTo: '' }  // Redirects any unknown path to Home
];

