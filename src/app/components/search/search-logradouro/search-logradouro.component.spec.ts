import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLogradouroComponent } from './search-logradouro.component';

describe('SearchLogradouroComponent', () => {
  let component: SearchLogradouroComponent;
  let fixture: ComponentFixture<SearchLogradouroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLogradouroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLogradouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
