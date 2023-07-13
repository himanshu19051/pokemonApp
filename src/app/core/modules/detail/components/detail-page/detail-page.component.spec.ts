import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailPageComponent } from './detail-page.component';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PokemonService } from 'src/app/core/services';
import { profile } from 'mock/mock';
import { TabEnums } from 'src/app/core/enum/App.enum';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;
  let service: PokemonService;
  let spy: any;

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
    service = TestBed.inject(PokemonService);
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called getProfileDetails function', () => {
    spy = spyOn(service, 'getProfileDetails').and.returnValue(of(profile));
    component.getProfileDetails(1);
    expect(service.getProfileDetails).toHaveBeenCalled(); 
  });

  it('should called getProfileDetails function, api give error', () => {
    spy = spyOn(service, 'getProfileDetails').and.returnValue(throwError(()=>profile));
    component.getProfileDetails(1);
    expect(service.getProfileDetails).toHaveBeenCalled(); 
  });

  it('should called activeTab function',()=>{
    component.activeTab(TabEnums.PROFILE);
    expect(component.currentTab).toBe(TabEnums.PROFILE);
  })
});
