import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-shop',
  imports: [ Header, Footer,CommonModule,RouterModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  
   cartItems: { name: string; price: number; qty: number }[] = [];
  cartOpen = false;
  toastVisible = false;
  private toastTimer: any;

  get cartCount(): number {
    return this.cartItems.reduce((sum, i) => sum + i.qty, 0);
  }

  get cartTotal(): number {
    return this.cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  addToCart(name: string, price: number): void {
    const existing = this.cartItems.find(i => i.name === name);
    if (existing) {
      existing.qty++;
    } else {
      this.cartItems.push({ name, price, qty: 1 });
    }
    this.showToast();
  }

  increaseQty(item: { name: string; price: number; qty: number }): void {
    item.qty++;
  }

  decreaseQty(item: { name: string; price: number; qty: number }): void {
    if (item.qty > 1) {
      item.qty--;
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: { name: string; price: number; qty: number }): void {
    this.cartItems = this.cartItems.filter(i => i.name !== item.name);
  }

  clearCart(): void {
    this.cartItems = [];
  }

  toggleCart(): void {
    this.cartOpen = !this.cartOpen;
  }

  showToast(): void {
    this.toastVisible = true;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastVisible = false;
    }, 2200);
  }
}
