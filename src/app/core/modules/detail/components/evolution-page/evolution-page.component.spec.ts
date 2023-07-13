import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvolutionPageComponent } from './evolution-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { profile } from 'mock/mock';

describe('EvolutionPageComponent', () => {
  let component: EvolutionPageComponent;
  let fixture: ComponentFixture<EvolutionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvolutionPageComponent],
      imports:[HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(EvolutionPageComponent);
    component = fixture.componentInstance;
    component.profileData = profile;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
