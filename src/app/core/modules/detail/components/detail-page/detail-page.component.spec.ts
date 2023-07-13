import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailPageComponent } from './detail-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPageComponent],
      imports:[HttpClientTestingModule],
      providers:[{
        provide:ActivatedRoute,
        useValue:{
          params: of({id:'2'})
        }
      }],
      schemas:[NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
