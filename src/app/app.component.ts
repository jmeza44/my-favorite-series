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
      description: 'Set in the 1980s, the series centers around the residents of the fictional small town of Hawkins, Indiana, as they are plagued by a hostile alternate dimension known as the Upside Down, after a nearby human experimentation facility opens a gateway between Earth and the Upside Down.'
    },
    {
      title: 'The Crown',
      imageUrl: 'https://es.web.img3.acsta.net/pictures/22/10/18/00/44/2538124.jpg',
      description: 'The Crown portrays the life of Queen Elizabeth II from her wedding in 1947 to Philip, Duke of Edinburgh, until the early 21st century: The first season covers 1947 to 1955, including Winston Churchill resigning as prime minister and the Queen\'s sister Princess Margaret deciding not to marry Peter Townsend.'
    },
    {
      title: 'Black Mirror',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/black-mirror-font-1513096756.jpg?crop=1xw:1xh;center,top&resize=980:*',
      description: 'An anthology series exploring a twisted, high-tech multiverse.'
    },
    {
      title: 'Money Heist',
      imageUrl: 'https://i0.wp.com/thsindex.org/wp-content/uploads/2023/04/Money-Heist-was-first-released-on-Antena-3-in-Spain-in-2017-Netflix.jpg?fit=1920%2C2560&ssl=1',
      description: 'A criminal mastermind recruits a group of people to carry out a major heist.'
    }
  ];
}
