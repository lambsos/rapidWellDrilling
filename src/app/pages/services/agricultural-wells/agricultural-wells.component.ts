import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-agricultural-wells',
    imports: [MatCardModule, MatIconModule, CommonModule],
    templateUrl: './agricultural-wells.component.html',
    styleUrl: './agricultural-wells.component.scss'
})
export class AgriculturalWellsComponent {
}
