import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [FileUploadModule, ToastModule, CommonModule, HttpClientModule],
  providers: [MessageService],
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.css',
})
export class FileUploaderComponent {
  uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event:any) {
        for(const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}
