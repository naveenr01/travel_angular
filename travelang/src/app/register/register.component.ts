import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule], // Import FormsModule for template-driven forms
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    destination: '',
  };
 
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Registration successful!');
      form.reset(); // Reset the form after submission
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}