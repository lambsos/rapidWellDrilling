import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    imports: [MatIconModule, RouterModule, CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    companyName = 'Rapid Well Drilling LLC';
    phoneNumber = '(208) 900-9355';
    secondaryPhoneNumber = '(208) 473-6689';
    email = 'rapidWellDrilling@gmail.com';
    address = '7680 Vallejo Rd, Boise, ID 83709';
    currentYear = new Date().getFullYear();
    
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
