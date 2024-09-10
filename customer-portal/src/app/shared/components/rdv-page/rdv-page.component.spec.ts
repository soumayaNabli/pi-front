import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RdvPageComponent } from './rdv-page.component';

describe('RdvPageComponent', () => {
  let component: RdvPageComponent;
  let fixture: ComponentFixture<RdvPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdvPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RdvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
