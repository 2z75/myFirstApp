import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';
import { NasaResponse } from '../models/nasa';

@Component({
    selector: 'app-nasa',
    standalone: true,
    imports: [],
    templateUrl: './nasa.component.html',
    styleUrl: './nasa.component.scss'
})
export class NasaComponent implements OnInit {
    imgOfTheDayUrl: string = '';

    constructor(private nasaService: NasaService) {}

    ngOnInit(): void {
        this.nasaService.getImageOfTheDay().subscribe((data: NasaResponse) => {
            if (data.media_type === 'image') {
                this.imgOfTheDayUrl = data.url;
            }
            console.log(data);
        });
    }
}
