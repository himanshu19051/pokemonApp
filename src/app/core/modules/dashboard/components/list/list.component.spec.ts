import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonService } from 'src/app/core/services';
import {of, throwError} from 'rxjs';
import { list, profile } from 'mock/mock';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: PokemonService;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports:[HttpClientTestingModule,InfiniteScrollModule],
    });
    service = TestBed.inject(PokemonService);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called load more function', () => {
    spy = spyOn(service, 'get').and.returnValue(of(profile));
    spyOn(service, 'getNext').and.returnValue(of(list));
    component.loadMore();
    component.onScrollDown();
    expect(service.get).toHaveBeenCalled(); 
  });

  it('should called load more function, api throw error', () => {    
    spyOn(service, 'getNext').and.returnValue(throwError(()=>{'error'}));
    component.loadMore();
    expect(service.getNext).toHaveBeenCalled(); 
  });

  it('should called navigateToProfile function',()=>{
      spy = spyOn(service, 'navigateByUrl').and.returnValue();
      component.navigateToProfile('1');
      expect(service.navigateByUrl).toHaveBeenCalled();
  });

});
