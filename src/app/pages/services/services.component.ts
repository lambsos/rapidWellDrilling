import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    imports: [RouterOutlet, RouterModule, MatButtonModule, CommonModule],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {
    serviceTabs = [
        { label: 'Water Well Drilling', route: 'water-well-drilling' },
        { label: 'Agricultural Wells', route: 'agricultural-wells' },
        { label: 'Well Abandonment', route: 'well-abandonment' }
    ];
}
