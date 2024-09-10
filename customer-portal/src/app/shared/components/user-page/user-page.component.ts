import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { TagModule } from 'primeng/tag';
import { UserService } from '../../service/user.service';


@Component({
    selector: 'app-user-page',
    standalone: true,
    providers: [UserService],
    imports: [CommonModule, TableModule, ButtonModule, DialogModule, InputTextModule, FloatLabelModule, FieldsetModule, TagModule,FormsModule],
    templateUrl: './user-page.component.html',
    styleUrl: './user-page.component.scss',
})
export class UserPageComponent implements OnInit {
    @Input() users:any;

    selectedUser: any;
    showDetails = false;
    showAddUser = false;
    formGroup: FormGroup | undefined;

    constructor( private userService: UserService) { }

    ngOnInit() {
        this.formGroup = new FormGroup({
            username: new FormControl<string | null>(null),
            email: new FormControl<string | null>(null),
            profession: new FormControl<string | null>(null),
            role: new FormControl<string | null>(null),
        });
    }

    onRowSelect(event: any) {
        this.formGroup?.setValue({
            username: event.data.username,
            email: event.data.email,
            profession: event.data.profession,
            role: event.data.role
        })
        console.log("🚀 ~ UserPageComponent ~ onRowSelect ~ this.formGroup:", this.formGroup)
        console.log("🚀 ~ UserPageComponent ~ onRowSelect ~ event.data:", event.data)
        this.showDetails = true;
    }
    onUnRowSelect(event: any) {
        console.log(event);
    }

    onSubmitAdd(form: any) {
        console.log('Form Data: ', form.value);
        this.userService.create(form.value)
      }
}
