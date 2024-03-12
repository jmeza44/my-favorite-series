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
      description: 'Set in the 1980s, the series centers around the residents of the fictional small town of Hawkins, Indiana, as they are plagued by a hostile alternate dimension known as the Upside Down, after a nearby human experimentation facility opens a gateway between Earth and the Upside Down.',
      categories: ['Sci-Fi', 'Horror', 'Drama'],
      mainActors: ['Millie Bobby Brown', 'Finn Wolfhard', 'Noah Schnapp']
    },
    {
      title: 'The Crown',
      imageUrl: 'https://es.web.img3.acsta.net/pictures/22/10/18/00/44/2538124.jpg',
      description: 'The Crown portrays the life of Queen Elizabeth II from her wedding in 1947 to Philip, Duke of Edinburgh, until the early 21st century: The first season covers 1947 to 1955, including Winston Churchill resigning as prime minister and the Queen\'s sister Princess Margaret deciding not to marry Peter Townsend.',
      categories: ['Historical drama'],
      mainActors: ['Jonathan Pryce', 'Imelda Staunton', 'Lesley Manville']
    },
    {
      title: 'Black Mirror',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/black-mirror-font-1513096756.jpg?crop=1xw:1xh;center,top&resize=980:*',
      description: 'The black mirror is the screen that rules our lives. Taking contemporary phenomena (ranging from the wild popularity of talent shows on TV to the impact of social media and smartphones on our lives) as a starting point and speculate how such phenomena could/would evolve in the future.',
      categories: ['Anthology', 'Speculative fiction Science', 'Fiction Dystopia'],
      mainActors: ['Bryce Dallas Howard', 'Hayley Atwell', 'Michaela Coel']
    },
    {
      title: 'Money Heist',
      imageUrl: 'https://i0.wp.com/thsindex.org/wp-content/uploads/2023/04/Money-Heist-was-first-released-on-Antena-3-in-Spain-in-2017-Netflix.jpg?fit=1920%2C2560&ssl=1',
      description: 'Fresh audience score. A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose.',
      categories: ['Heist', 'Crime drama', 'Thriller'],
      mainActors: ['Álvaro Morte', 'Úrsula Corberó', 'Pedro Alonso']
    }
  ];
}
