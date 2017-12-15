// ======================================
// Author: Clinton Beyerle
// Email:  info@berlstone.com
// Copyright (c) 2017 www.berlstone.com
// 

// ======================================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css'],
    animations: [fadeInOut]
})
export class NotFoundComponent {
}
