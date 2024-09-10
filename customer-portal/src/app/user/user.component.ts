import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { AgendaComponent } from '../shared/components/agenda/agenda.component';
import { RdvPageComponent } from '../shared/components/rdv-page/rdv-page.component';
import { ReclamationPageComponent } from '../shared/components/reclamation-page/reclamation-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../shared/service/reclamation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  providers: [HttpClient, ReclamationService],
  imports: [CommonModule, HeaderComponent, TabViewModule, AgendaComponent, RdvPageComponent, ReclamationPageComponent,ButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  _activeTabIndex = 0;
  reclamationData:any;

  set activeTabIndex(value: number) {
    if (value === 0) {
      this.router.navigate(['/user/agenda']);
    } else if (value === 1) {
      this.router.navigate(['/user/reclamation']);
    } else if (value === 2) {
      this.router.navigate(['/user/rdv']);
    }
    this._activeTabIndex = value;
  }

  get activeTabIndex() {
    return this._activeTabIndex;
  }

  constructor(private route: ActivatedRoute, private router: Router,private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      if (url.length !== 1) {
        const path = url[1].path;
        if (path === 'agenda') {
          this.activeTabIndex = 0; 
        } else if (path === 'reclamation') {
          this.initDataForReclamationPage()
          this.activeTabIndex = 1;
        } else if (path === 'rdv') {
          this.activeTabIndex = 2;
        } else {
          this.activeTabIndex = 0; // Default to the first tab
        }
      }
    });
  }

  initDataForReclamationPage() {
    this.reclamationService.getAll();
    this.reclamationService.reclamations$.subscribe(data => {
      this.reclamationData = data
    });
  }
}
