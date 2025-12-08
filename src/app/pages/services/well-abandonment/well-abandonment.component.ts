import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-well-abandonment',
    imports: [MatCardModule, MatIconModule, CommonModule],
    templateUrl: './well-abandonment.component.html',
    styleUrl: './well-abandonment.component.scss'
})
export class WellAbandonmentComponent {
}
