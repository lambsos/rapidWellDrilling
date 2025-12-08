import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';

@Component({
    selector: 'app-home',
    imports: [HeroComponent, ServicesComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
}
