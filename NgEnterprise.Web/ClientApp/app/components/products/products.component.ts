// ======================================
// Author: Clinton Beyerle
// Email:  info@berlstone.com
// Copyright (c) 2017 www.berlstone.com
// 

// ======================================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    animations: [fadeInOut]
})
export class ProductsComponent {
}
