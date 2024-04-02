import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-create-onomatopia',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './create-onomatepia.component.html',
    styleUrl: './create-onomatepia.component.scss',
})
export class CreateOnomatopiaComponent {
    newOnomatopia: string = '';

    @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

    constructor() {}

    createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
    this.newOnomatopia = '';
    }
}