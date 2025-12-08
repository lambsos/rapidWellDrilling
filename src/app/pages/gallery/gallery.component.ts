import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gallery',
    imports: [MatCardModule, MatGridListModule, MatIconModule, CommonModule],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
    // Placeholder for gallery images - replace with actual image URLs
    galleryItems = [
        { title: 'Well Drilling Equipment', description: 'State-of-the-art drilling equipment' },
        { title: 'Completed Well Installation', description: 'Professional well installation' },
        { title: 'Field Work', description: 'Our team in action' },
        { title: 'Well Maintenance', description: 'Regular maintenance services' },
        { title: 'Commercial Project', description: 'Large-scale commercial well drilling' },
        { title: 'Residential Well', description: 'Residential well drilling service' }
    ];
}
