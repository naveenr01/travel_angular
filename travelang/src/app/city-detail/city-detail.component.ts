import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-detail',
  standalone: true,
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class CityDetailComponent implements OnInit {
  cityForm: FormGroup;
  cityId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.cityForm = this.fb.group({
      description: [''],
      placesToSee: [''],
      rating: ['']
    });
  }

  ngOnInit(): void {
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.populateCityData();
  }

  populateCityData() {
    const cityData = { description: 'Sample City', placesToSee: 'Sample Place', rating: 4.5 };
    this.cityForm.patchValue(cityData);
  }

  saveChanges() {
    console.log('Saved changes', this.cityForm.value);
  }

  deleteCity() {
    console.log('City deleted with ID', this.cityId);
    this.router.navigate(['/cities']);
  }

  goBack() {
    this.router.navigate(['/cities']);
  }
}
