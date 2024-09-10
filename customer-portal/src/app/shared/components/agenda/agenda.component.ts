import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import FullCalendar module
import dayGridPlugin from '@fullcalendar/daygrid';
import { RdvService } from '../../service/rdv.service';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule,FullCalendarModule],
  providers: [RdvService],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css',
})
export class AgendaComponent {
  calendarOptions:any

  constructor(private rdvService: RdvService) {}

  ngOnInit() {
    this.rdvService.getAll();
    this.rdvService.rdvs$.subscribe(data => {
      const event = data.map(rdv => {
        return { title: rdv.sujet, start: rdv.date, duree: rdv.duree };
      })

      this.calendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        events: event
      };

    })
    // this.calendarOptions.events = this.rdvService.rdvs.value;
    // console.log("🚀 ~ AgendaComponent ~ ngOnInit ~ this.rdvService.rdvs:", this.rdvService.rdvs$.subscribe)
    
  }
}
