import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer';
import { SkillComponent } from '../skill/skill.component';

@Component({
    selector: 'app-developer',
    standalone: true,
    imports: [ CommonModule, SkillComponent ],
    templateUrl: './developer.component.html',
    styleUrl: './developer.component.scss'
})
export class DeveloperComponent {

    @Input() developer : Developer = {
        lastName: "Doe",
        firstName: "John",
        age: 30,
        gender: "Male",
        bio: "I'm finally a developer !",
        skills: [
            {
                name: "PHP",
                logo: "https://www.php.net/images/logos/new-php-logo.svg",
                site: "https://www.php.net/"
            },
            {
                name: "Python",
                logo: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
                site: "https://www.python.org/"
            },
            {
                name: "Javascript",
                logo: "https://www.https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png.net/images/logos/new-php-logo.svg",
                site: "https://www.javascript.com/"
            },
            {
                name: "Wordpress",
                logo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
                site: "https://fr.wordpress.org/"
            },
            {
                name: "Java",
                logo: "https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg",
                site: "https://www.java.com/fr/"
            },
        ]
    }
}
