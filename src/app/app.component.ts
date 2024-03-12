import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  favoriteSeries = [
    {
      title: 'Stranger Things',
      imageUrl: 'https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg',
      description: 'A group of kids investigates supernatural occurrences in their small town.'
    },
    {
      title: 'The Crown',
      imageUrl: 'https://es.web.img3.acsta.net/pictures/22/10/18/00/44/2538124.jpg',
      description: 'The trials and tribulations of Queen Elizabeth II and the royal family.'
    },
    {
      title: 'Black Mirror',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'An anthology series exploring a twisted, high-tech multiverse.'
    },
    {
      title: 'Money Heist',
      imageUrl: 'https://via.placeholder.com/150',
      description: 'A criminal mastermind recruits a group of people to carry out a major heist.'
    }
  ];
}
