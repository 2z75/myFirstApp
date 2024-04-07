import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

    isVisible: boolean = true;
    isAdmin: boolean = true;

    user = {
        name : 'Doe',
        firstName : 'John',
        age : 25,
        quote : '',
        photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
    };

    toggleIsVisible(): void {
        this.isVisible = !this.isVisible;
    }

    changeStatus(): void {
        this.isAdmin = !this.isAdmin;
    }
}
