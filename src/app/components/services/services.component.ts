import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    imports: [MatCardModule, MatIconModule, CommonModule],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {
    services = [
        {
            icon: 'water_drop',
            title: 'Well Drilling',
            description: 'Professional water well drilling services for residential and commercial properties. We use state-of-the-art equipment and techniques to drill reliable water wells.'
        },
        {
            icon: 'build',
            title: 'Well Repair & Maintenance',
            description: 'Expert repair and maintenance services to keep your well system running efficiently and reliably year-round.'
        },
        {
            icon: 'emergency',
            title: 'Emergency Services',
            description: '24/7 emergency well services available. When you need immediate assistance, we\'re here to help.'
        },
        {
            icon: 'assessment',
            title: 'Well Inspections',
            description: 'Comprehensive well inspections to assess water quality, system performance, and identify potential issues.'
        }
    ];
}
