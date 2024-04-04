import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailApiComponent } from './cocktail-api.component';

describe('CocktailApiComponent', () => {
  let component: CocktailApiComponent;
  let fixture: ComponentFixture<CocktailApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocktailApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
