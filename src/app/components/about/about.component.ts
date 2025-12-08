import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    imports: [MatCardModule, CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    companyName = 'Rapid Well Drilling LLC';
    location = 'Boise, Idaho';
}
