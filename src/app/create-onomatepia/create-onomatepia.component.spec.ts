import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateOnomatopiaComponent } from './create-onomatepia.component';

describe('CreateOnomatepiaComponent', () => {
    let component: CreateOnomatopiaComponent;
    let fixture: ComponentFixture<CreateOnomatopiaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [CreateOnomatopiaComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(CreateOnomatopiaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
