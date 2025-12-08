import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-employment',
    imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, RouterModule],
    templateUrl: './employment.component.html',
    styleUrl: './employment.component.scss'
})
export class EmploymentComponent {
    phoneNumber = '(208) 900-9355';
    email = 'rapidWellDrilling@gmail.com';
    
    getPhoneHref(): string {
        return 'tel:' + this.phoneNumber.replace(/[^0-9]/g, '');
    }
}
