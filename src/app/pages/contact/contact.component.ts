import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        CommonModule
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    contactForm: FormGroup;
    phoneNumber = '(208) 900-9355';
    secondaryPhoneNumber = '(208) 473-6689';
    email = 'rapidWellDrilling@gmail.com';
    location = 'Boise, ID';
    
    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]],
            message: ['', [Validators.required]]
        });
    }
    
    getPhoneHref(): string {
        return 'tel:' + this.phoneNumber.replace(/[^0-9]/g, '');
    }
    
    getSecondaryPhoneHref(): string {
        return 'tel:' + this.secondaryPhoneNumber.replace(/[^0-9]/g, '');
    }
    
    onSubmit(): void {
        if (this.contactForm.valid) {
            console.log('Form submitted:', this.contactForm.value);
            // Here you would typically send the form data to a backend service
            alert('Thank you for your inquiry! We will contact you soon.');
            this.contactForm.reset();
        }
    }
}
