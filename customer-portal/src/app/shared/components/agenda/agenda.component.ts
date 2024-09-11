/* eslint-disable @nx/enforce-module-boundaries */
import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import FullCalendar module
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { RdvService } from '../../service/rdv.service';
import { UserService, User } from '../../service/user.service';


@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule,FullCalendarModule, DialogModule, ButtonModule, InputTextModule, FormsModule, CalendarModule,FloatLabelModule, DropdownModule, InputNumberModule],
  providers: [RdvService, UserService],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss',
})
export class AgendaComponent {
  @ViewChild('calendar', {static: false}) calendarComponent: any;
  @Input() userRole=""
  addVisible = false
  calendarOptions:any
  date = new Date()
  heure = new Date()
  experts:User[]=[]

  constructor(private rdvService: RdvService, private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll();
    this.userService.users$.subscribe(data => {
      this.experts = data.filter(user => user.role === 'expert').map((e:any)=>e.username);
    });
    this.rdvService.getAll();
    this.rdvService.rdvs$.subscribe(data => {
      const event = data.map(rdv => {
        return { title: rdv.sujet, start: rdv.date };
      })

      this.calendarOptions = {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        dateClick: (arg: any) => this.handleDateClick(arg),
        events: event
      };
      console.log(this.calendarOptions)

    })
    // this.calendarOptions.events = this.rdvService.rdvs.value;
    // console.log("🚀 ~ AgendaComponent ~ ngOnInit ~ this.rdvService.rdvs:", this.rdvService.rdvs$.subscribe)
    
    // handleDateClick(arg) {
    //   console.log(arg)
    // }
  }
   handleDateClick($event: any) {
    console.log($event)
    this.date = $event.date
    this.heure = $event.date
    this.addVisible = true
  }

  onSubmitAdd(form: any) {
    console.log(form.value);
    const data= {
      date:this.date,
      ...form.value
    }
    this.rdvService.create(data).subscribe((res) => {
      console.log(res);
    })
  }
}
