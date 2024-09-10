import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { HeaderComponent } from '../shared/components/header/header.component';
import { UserPageComponent } from '../shared/components/user-page/user-page.component';
import { ReclamationPageComponent } from '../shared/components/reclamation-page/reclamation-page.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  providers: [HttpClient],
  imports: [CommonModule, HeaderComponent, TabViewModule, UserPageComponent, ReclamationPageComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  _activeTabIndex = 0;

  set activeTabIndex(value: number) {
    this.router.navigate([`/admin/${value === 1 ? 'reclamation' : 'expert'}`]);
    this._activeTabIndex = value;
  }

  get activeTabIndex() {
    return this._activeTabIndex;
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      if (url.length !== 1) {
        const path = url[1].path;
        if (path === 'reclamation') {
          this.activeTabIndex = 1; // Set to the index of the Reclamations tab
        } else {
          this.activeTabIndex = 0; // Default to the first tab
        }
      }
    });
  }
}
