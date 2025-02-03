import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;
  successMessage?: string;
  showAlert: boolean = false;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.successMessage = '¡Gracias por tu mensaje!';
      this.showAlert = true;

      setTimeout(() => {
        this.showAlert = false;
      }, 2000);

      this.contactForm.reset();
    }
  }
}
