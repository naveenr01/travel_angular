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
}

@Component({
  standalone: true,
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class CitiesComponent {
  cities: City[] = [
    { id: 1, name: 'Paris', description: 'City of Light', placesToSee: ['Eiffel Tower', 'Louvre Museum'], rating: 4.8, category: 'Romantic', image: 'https://wallpapercave.com/wp/wp9189588.jpg' },
    { id: 2, name: 'Kyoto', description: 'Historic City', placesToSee: ['Kiyomizu Temple', 'Fushimi Inari Shrine'], rating: 4.7, category: 'Cultural', image: 'https://wallpapercave.com/wp/wp6109833.jpg' },
    { id: 3, name: 'New York', description: 'The Big Apple', placesToSee: ['Statue of Liberty', 'Central Park'], rating: 4.9, category: 'Modern', image: 'https://th.bing.com/th/id/OIP.AZjNhcXFjFnV-tgpYK-BSAHaE8?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Venice', description: 'City of Canals', placesToSee: ['St. Mark’s Basilica', 'Rialto Bridge'], rating: 4.6, category: 'Romantic', image: 'https://wallpaperaccess.com/full/3413182.jpg' },
    { id: 5, name: 'Marrakech', description: 'Red City', placesToSee: ['Jemaa el-Fnaa', 'Majorelle Garden'], rating: 4.5, category: 'Cultural', image: 'https://wallpaperaccess.com/full/344577.jpg' },
    { id: 6, name: 'Dubai', description: 'City of Innovation', placesToSee: ['Burj Khalifa', 'Dubai Mall'], rating: 4.8, category: 'Modern', image: 'https://getwallpapers.com/wallpaper/full/c/0/4/1503420-dubai-4k-wallpaper-1920x1200-720p.jpg' },
    { id: 7, name: 'Rome', description: 'Eternal City', placesToSee: ['Colosseum', 'Pantheon'], rating: 4.7, category: 'Cultural', image: 'https://wallpaperaccess.com/full/3237612.jpg' },
    { id: 8, name: 'Bali', description: 'Island Paradise', placesToSee: ['Ubud', 'Tanah Lot Temple'], rating: 4.9, category: 'Adventure', image: 'https://th.bing.com/th/id/OIP.zFQRy9HoOOIH6HtB01rqywHaEK?rs=1&pid=ImgDetMain' },
    { id: 10, name: 'London', description: 'Capital of England', placesToSee: ['Big Ben', 'Tower of London'], rating: 4.7, category: 'Modern', image: 'https://th.bing.com/th/id/OIP.Tx0ZQrAIK9Lae5PsaiadegHaEK?rs=1&pid=ImgDetMain' },
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
      category: ['']
    });

    this.addCityForm = this.fb.group({
      name: [''],
      description: [''],
      placesToSee: [''],
      rating: [null],
      category: [''],
      image: ['']
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
      // placesToSee: this.addCityForm.value.placesToSee.split(',').map(place => place.trim()),
      rating: this.addCityForm.value.rating,
      category: this.addCityForm.value.category,
      image: this.addCityForm.value.image || 'https://example.com/default.jpg',
      placesToSee: []
    };

    this.cities.push(newCity);
    this.addCityForm.reset();
  }

  // Filter cities by category
  filterByCategory(category: string) {
    return this.cities.filter(city => city.category === category);
  }
}
