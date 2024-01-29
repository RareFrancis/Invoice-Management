// order-report.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.css']
})
export class OrderReportComponent implements OnInit {

  orders: any[] = []; // Assuming you have an array of orders
  orderItems: any[] = []; // Assuming you have an array of order items

  remainingItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.calculateRemainingItems();
  }

  calculateRemainingItems() {
    this.remainingItems = [];

    for (const orderItem of this.orderItems) {
      const found = this.orders.some(order => order.id === orderItem.orderId);

      if (!found) {
        // Order not found, item is remaining
        this.remainingItems.push(orderItem);
      }
    }
  }

  editItem(item: any) {
    // Implement edit item functionality, for example, open a modal with item details for editing
    console.log(`Edit item:`, item);
  }

  deleteItem(item: any) {
    // Implement delete item functionality, for example, remove item from the remainingItems array
    this.remainingItems = this.remainingItems.filter(i => i !== item);
    console.log(`Delete item:`, item);
  }
}
