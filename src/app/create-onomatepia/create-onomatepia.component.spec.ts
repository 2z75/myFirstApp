import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatepiaComponent } from './create-onomatepia.component';

describe('CreateOnomatepiaComponent', () => {
  let component: CreateOnomatepiaComponent;
  let fixture: ComponentFixture<CreateOnomatepiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOnomatepiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOnomatepiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
