import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Header } from "../header/header";

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RouterModule, Header],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  
  form = {
    name: '',
    phone: '',
    email: '',
    subject: 'Order',
    message: ''
  };

  contactInfo = [
    { icon: 'call', title: 'Phone', value: '+91 XXXXX XXXXX' },
    { icon: 'mail', title: 'Email', value: 'hello@desidryment.in' },
    { icon: 'location_on', title: 'Location', value: 'Hyderabad, India' },
    { icon: 'schedule', title: 'Hours', value: 'Mon–Sat, 9AM–7PM' }
  ];

  submitForm() {
    console.log('Form Data:', this.form);
  }
}
