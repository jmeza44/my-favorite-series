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
      imageUrl: 'https://via.placeholder.com/150',
      description: 'A group of kids investigates supernatural occurrences in their small town.'
    },
    {
      title: 'The Crown',
      imageUrl: 'https://via.placeholder.com/150',
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
