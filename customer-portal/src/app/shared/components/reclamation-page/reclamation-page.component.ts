import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup ,FormsModule} from '@angular/forms';
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
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ReclamationService } from '../../service/reclamation.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

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
    ResponseFormComponent,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule, ToastModule
  ],
  providers: [MessageService],
  templateUrl: './reclamation-page.component.html',
  styleUrl: './reclamation-page.component.scss',
})
export class ReclamationPageComponent implements OnInit {

  @Input() reclamationData: any

  selectedReclamation: any;
  formGroup: FormGroup | undefined;
  uploadVisible = false;
  responseVisible = false;
  responseData = {
    description: ''
  };
  priorities = [
    'Basse',
    'Moyenne',
    'Urgente'
  ]
  showAddReclamation=false;

  constructor(private messageService: MessageService, private reclamationService: ReclamationService) {}

  ngOnInit() {}
  

  onUpload(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
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

  onSubmitAdd(userForm: any) {
    console.log(userForm.value);
    this.reclamationService.create(userForm.value).subscribe((res) => {
      console.log(res);
    })
  }
}
