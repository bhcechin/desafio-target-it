import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCpfNisComponent } from './search-cpf-nis.component';

describe('SearchCpfNisComponent', () => {
  let component: SearchCpfNisComponent;
  let fixture: ComponentFixture<SearchCpfNisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCpfNisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCpfNisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
