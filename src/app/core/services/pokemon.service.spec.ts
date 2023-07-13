import { TestBed } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { chain, profile, species } from 'mock/mock';
import { environment } from 'src/environments/environment';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should called getEvolution function',()=>{
    const evolutionChain = chain;
    let id = 1;
    service.getEvolution(1).subscribe(res=>{
      expect(res).toEqual(evolutionChain);
    });
    const req = httpMock.expectOne(`${environment.apiUrl}evolution-chain/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(evolutionChain);
  })
});
