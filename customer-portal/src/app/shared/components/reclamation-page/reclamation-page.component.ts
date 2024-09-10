import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FieldsetModule } from 'primeng/fieldset';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { ResponseFormComponent } from '../response-form/response-form.component';


@Component({
  selector: 'app-reclamation-page',
  standalone: true,
  imports: [
    CommonModule, 
    TableModule, 
    ButtonModule, 
    DialogModule, 
    InputTextModule, 
    FloatLabelModule, 
    FieldsetModule, 
    TagModule, 
    BadgeModule, 
    FileUploaderComponent,
    ResponseFormComponent
  ],
  templateUrl: './reclamation-page.component.html',
  styleUrl: './reclamation-page.component.scss',
})
export class ReclamationPageComponent implements OnInit {

  @Input() reclamationData: any

  selectedReclamation: any;
  formGroup: FormGroup | undefined;
  uploadVisible = false;
  responseVisible = false;
  responseData:any;
  showAddReclamation=false;

  ngOnInit() {

    }
  

  onRowSelect(event: any) {
    console.log(event);
  }
  onUnRowSelect(event: any) {
    console.log(event);
  }
  showResponse(response:any) {
    this.responseVisible = true
    this.responseData = response
  }
}
