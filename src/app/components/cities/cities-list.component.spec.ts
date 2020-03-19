import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { CitiesListComponent } from './cities-list.component';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { of, Observable } from 'rxjs';
import { MockCitiesService } from 'src/testHelpers/MockCitiesService';
import { isRegExp } from 'util';
import { doesNotReject } from 'assert';
import { ICity } from 'src/app/models/city.model';

describe('CitiesListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitiesListComponent
      ],
      providers: [
        {
          provide: CitiesService,
          useClass: MockCitiesService
        }
      ]
    }).compileComponents();
  }));

  it('should create the cities list component', async(() => {
    const fixture = TestBed.createComponent(CitiesListComponent);
    const citiesList = fixture.debugElement.componentInstance;
    expect(citiesList).toBeTruthy();
  }));

  it('should retrieve the expected number of cities', async(() => {
    const fixture = TestBed.createComponent(CitiesListComponent);
    const cities = fixture.debugElement.componentInstance.cities;

    expect(cities.length).toBe(3);

  }));
});





