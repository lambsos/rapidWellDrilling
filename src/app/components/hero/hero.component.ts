import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero',
    imports: [MatButtonModule, MatIconModule, RouterModule, CommonModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
    companyName = 'Rapid Well Drilling LLC';
    subtext = 'Well and Water Systems Services in the Treasure Valley and surrounding counties';
    
    getEstimateHref(): string {
        return '/contact-us';
    }
}
