import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
