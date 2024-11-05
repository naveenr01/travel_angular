import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutUsComponent {
  title = 'About Travel Easy';
  description = `Welcome to Travel Easy, where your dream destinations become reality. Our passion is to create exceptional travel experiences that allow you to explore, relax, and immerse yourself in cultures around the globe. Whether it's a tranquil beach escape, a thrilling adventure, or a dive into ancient history, our travel experts will tailor a journey that’s uniquely yours. With meticulous planning, insider tips, and around-the-clock support, every trip we create is smooth, secure, and memorable. Let’s make your next adventure unforgettable, one perfect itinerary at a time.`;
}
