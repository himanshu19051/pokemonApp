import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvolutionPageComponent } from './evolution-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { chain, profile, species } from 'mock/mock';
import { PokemonService } from 'src/app/core/services';
import {of} from 'rxjs';

describe('EvolutionPageComponent', () => {
  let component: EvolutionPageComponent;
  let fixture: ComponentFixture<EvolutionPageComponent>;
  let service: PokemonService;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvolutionPageComponent],
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonService);
    fixture = TestBed.createComponent(EvolutionPageComponent);
    component = fixture.componentInstance;
    component.profileData = profile;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called getEvolution function',()=>{
      component.pokemon=profile;
      spyOn(service, 'getSpecies').and.returnValue(of(species));
      spyOn(service, 'getEvolution').and.returnValue(of(chain));
      component.getEvolution();
      expect(service.getEvolution).toHaveBeenCalled(); 
  })

  it('should called navigateToProfile function',()=>{
    spy = spyOn(service, 'navigateByUrl').and.returnValue();
    component.navigateToProfile('3');
    expect(service.navigateByUrl).toHaveBeenCalled();
});

});
