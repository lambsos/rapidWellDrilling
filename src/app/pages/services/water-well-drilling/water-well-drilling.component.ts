import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-water-well-drilling',
    imports: [MatCardModule, MatIconModule, CommonModule],
    templateUrl: './water-well-drilling.component.html',
    styleUrl: './water-well-drilling.component.scss'
})
export class WaterWellDrillingComponent {
}
