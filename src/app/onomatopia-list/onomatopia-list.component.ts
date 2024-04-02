import { Component } from '@angular/core';
import { CreateOnomatopiaComponent } from '../create-onomatepia/create-onomatepia.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-onomatopia-list',
    standalone: true,
    templateUrl: './onomatopia-list.component.html',
    styleUrl: './onomatopia-list.component.scss',
    imports: [CreateOnomatopiaComponent, CommonModule],
})

export class OnomatopiaListComponent {
    onomatopiaList: string[] = [];

    onReceiveNewOnomatopia(newOnomatopia: string): void {
        this.onomatopiaList.push(newOnomatopia);
    }
}