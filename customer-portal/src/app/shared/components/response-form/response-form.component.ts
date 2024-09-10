import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';


@Component({
  selector: 'app-response-form',
  standalone: true,
  imports: [CommonModule, FormsModule,InputTextareaModule],
  templateUrl: './response-form.component.html',
  styleUrl: './response-form.component.css',
})
export class ResponseFormComponent {
  @Input() responseData : any
}
