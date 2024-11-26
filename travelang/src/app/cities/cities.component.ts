import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface City {
  id: number;
  name: string;
  description: string;
  placesToSee: string[];
  rating: number;
  category: string;
  image: string;
  packageCost: number; // Added package cost
  tripDays: number; // Added trip duration
}

@Component({
  standalone: true,
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class CitiesComponent {
  cities: City[] = [
    {id: 1,name: 'Paris',description: 'City of Light',placesToSee: ['Eiffel Tower', 'Louvre Museum'],rating: 4.8,category: 'Romantic',
      image: 'https://th.bing.com/th/id/OIP.pf0gu8FzP9ewE0uuAAuMigAAAA?rs=1&pid=ImgDetMain',packageCost: 50000,tripDays: 5,},
    {id: 2,name: 'Kyoto',description: 'Historic City',placesToSee: ['Kiyomizu Temple', 'Fushimi Inari Shrine'],rating: 4.7,category: 'Cultural',
      image: 'https://wallpaperaccess.com/full/27059.jpg',packageCost: 45000,tripDays: 4,},
    {id: 3,name: 'New York',description: 'The Big Apple',placesToSee: ['Statue of Liberty', 'Central Park'],rating: 4.9,category: 'Modern',
      image: 'https://th.bing.com/th/id/OIP.AZjNhcXFjFnV-tgpYK-BSAHaE8?rs=1&pid=ImgDetMain',packageCost: 60000,tripDays: 7,},
    { id: 4, name: 'Venice', description: 'City of Canals',placesToSee: ['St. Mark’s Basilica', 'Rialto Bridge'], rating: 4.6, category: 'Romantic', 
      image: 'https://wallpaperaccess.com/full/3413182.jpg',packageCost: 30000,tripDays: 3 },
    { id: 5, name: 'Marrakech', description: 'Red City', placesToSee: ['Jemaa el-Fnaa', 'Majorelle Garden'], rating: 4.5, category: 'Cultural', 
      image: 'https://wallpaperaccess.com/full/344577.jpg',packageCost: 40000,tripDays: 4, },
    { id: 6, name: 'Dubai', description: 'City of Innovation', placesToSee: ['Burj Khalifa', 'Dubai Mall'], rating: 4.8, category: 'Modern', 
      image: 'https://getwallpapers.com/wallpaper/full/c/0/4/1503420-dubai-4k-wallpaper-1920x1200-720p.jpg',packageCost: 35000,tripDays: 3, },
    { id: 7, name: 'Rome', description: 'Eternal City', placesToSee: ['Colosseum', 'Pantheon'], rating: 4.7, category: 'Cultural', 
      image: 'https://wallpaperaccess.com/full/3237612.jpg',packageCost: 50000,tripDays: 5,},
    { id: 8, name: 'Bali', description: 'Island Paradise', placesToSee: ['Ubud', 'Tanah Lot Temple'], rating: 4.9, category: 'Adventure', 
      image: 'https://th.bing.com/th/id/OIP.zFQRy9HoOOIH6HtB01rqywHaEK?rs=1&pid=ImgDetMain',packageCost: 40000,tripDays: 3, },
    { id: 10, name: 'London', description: 'Capital of England', placesToSee: ['Big Ben', 'Tower of London'], rating: 4.7, category: 'Modern', 
      image: 'https://th.bing.com/th/id/OIP.Tx0ZQrAIK9Lae5PsaiadegHaEK?rs=1&pid=ImgDetMain' ,packageCost: 33000,tripDays: 4,},
    { id: 10, name: 'Coorg', description: 'Heaven Of Karnataka', placesToSee: ['Abbey falla', 'sunset view'], rating: 4.8, category: 'Adventure', 
      image: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Mallalli-Falls.jpg' ,packageCost: 20000,tripDays: 4,},
    { id: 11, name: 'Chikkamagaluru', description: 'Hill Station in Karnataka', placesToSee: ['Mullayyana giri', 'jhari falls'], rating: 4.8, category: 'Adventure', 
      image: 'https://images.unsplash.com/photo-1573674401446-87cae8d4d28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80' ,packageCost: 25000,tripDays: 3,},
    { id: 12, name: 'Manali', description: 'famous for its beautiful Hadimba Temple',placesToSee: ['Jana waterfall', 'Manu Temple'], rating: 4.7, category: 'Romantic', 
      image: 'https://wallpaperaccess.com/full/4802552.jpg',packageCost: 20000,tripDays: 3 },
    // Add remaining cities with packageCost and tripDays
  ];

  categories = ['Cultural', 'Romantic', 'Adventure', 'Modern'];
  showDetailView = false;
  selectedCity: City | null = null;
  cityForm: FormGroup;
  addCityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cityForm = this.fb.group({
      name: [''],
      description: [''],
      placesToSee: [''],
      rating: [null],
      category: [''],
      image: [''],
      packageCost: [null], // Added field for package cost
      tripDays: [null], // Added field for trip duration
    });

    this.addCityForm = this.fb.group({
      name: [''],
      description: [''],
      placesToSee: [''],
      rating: [null],
      category: [''],
      image: [''],
      packageCost: [null], // Added field for package cost
      tripDays: [null], // Added field for trip duration
    });
  }

  // Toggle the edit view
  editCity(city: City) {
    this.showDetailView = true;
    this.selectedCity = city;
    this.cityForm.patchValue(city);
  }

  // Save changes to the city
  saveChanges() {
    if (this.selectedCity) {
      Object.assign(this.selectedCity, this.cityForm.value);
      this.showDetailView = false;
      this.selectedCity = null;
    }
  }

  // Delete the selected city
  deleteCity() {
    if (this.selectedCity) {
      this.cities = this.cities.filter(city => city.id !== this.selectedCity!.id);
      this.showDetailView = false;
      this.selectedCity = null;
    }
  }
  bookCity(city: City) {
    alert(`You have booked a trip to ${city.name}!`);
  }

  // Return to the list view
  goBack() {
    this.showDetailView = false;
    this.selectedCity = null;
  }

  // Add a new city from the add city form
  addCity() {
    const newCity: City = {
      id: this.cities.length + 1,
      name: this.addCityForm.value.name,
      description: this.addCityForm.value.description,
      placesToSee: this.addCityForm.value.placesToSee.split(',').map((place: string) => place.trim()),
      rating: this.addCityForm.value.rating,
      category: this.addCityForm.value.category,
      image: this.addCityForm.value.image || 'https://example.com/default.jpg',
      packageCost: this.addCityForm.value.packageCost, // Add package cost
      tripDays: this.addCityForm.value.tripDays, // Add trip duration
    };

    this.cities.push(newCity);
    this.addCityForm.reset();
  }

  // Filter cities by category
  filterByCategory(category: string) {
    return this.cities.filter(city => city.category === category);
  }
}
