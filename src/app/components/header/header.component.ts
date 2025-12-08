import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    phoneNumber = '(208) 900-9355';
    secondaryPhoneNumber = '(208) 473-6689';
    location = 'Boise, ID';
    
    navItems = [
        { label: 'Home', route: '/' },
        { label: 'Gallery', route: '/gallery' },
        { label: 'About Us', route: '/about-us' },
        { label: 'Sales and Services', route: '/sales-and-services' },
        { label: 'Employment', route: '/employment' },
        { label: 'Contact Us', route: '/contact-us' }
    ];
    
    getPhoneHref(): string {
        return 'tel:' + this.phoneNumber.replace(/[^0-9]/g, '');
    }
    
    getSecondaryPhoneHref(): string {
        return 'tel:' + this.secondaryPhoneNumber.replace(/[^0-9]/g, '');
    }
}
