import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpertComponent } from './expert.component';

describe('ExpertComponent', () => {
  let component: ExpertComponent;
  let fixture: ComponentFixture<ExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
