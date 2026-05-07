import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface OrderStep {
  label: string;
  time: string;
  done: boolean;
  active: boolean;
}

interface OrderItem {
  name: string;
  qty: string;
  price: number;
}

interface Order {
  id: string;
  status: string;
  statusLabel: string;
  date: string;
  delivery: string;
  city: string;
  total: number;
  steps: OrderStep[];
  items: OrderItem[];
}

@Component({
  selector: 'app-track',
  imports: [CommonModule,FormsModule],
  templateUrl: './track.html',
  styleUrl: './track.css',
})
export class Track {
orderId: string = '';
  orderFound: boolean = false;
  notFound: boolean = false;

  mockOrder: Order = {
    id: 'DDM-2026-00123',
    status: 'shipped',
    statusLabel: 'Out for Delivery',
    date: '18 Apr 2026',
    delivery: '22 Apr 2026',
    city: 'Hyderabad, Telangana',
    total: 1200,
    
    steps: [
      { label: 'Order Placed', time: '18 Apr, 10:30 AM', done: true, active: false },
      { label: 'Order Confirmed', time: '18 Apr, 11:00 AM', done: true, active: false },
      { label: 'Packed & Dispatched', time: '19 Apr, 02:00 PM', done: true, active: false },
      { label: 'Out for Delivery', time: '22 Apr, 08:00 AM', done: false, active: true },
      { label: 'Delivered', time: 'Expected Today', done: false, active: false }
    ],
    items: [
      { name: 'Spicy Dry Mutton', qty: '1 × 250g', price: 850 },
      { name: 'Desi Dry Chicken', qty: '1 × 250g', price: 450 }
    ]
  };

  trackOrder(): void {
    const id = this.orderId.trim().toUpperCase();
    this.orderFound = false;
    this.notFound = false;

    if (!id) return;


    if (id === 'DDM-2026-00123') {
      this.orderFound = true;
    } else {
      this.notFound = true;
    }
  }
}
