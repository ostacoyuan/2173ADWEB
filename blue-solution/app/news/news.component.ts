import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  articles = [
    {
      title: 'Article Title 1',
      content: 'This is a short summary of article content 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      publishedDate: new Date(),
      imageUrl: 'https://www.wateroam.com/uploads/2/8/6/0/28600353/editor/clean-drinking-water.jpg?1603706525'
    },
    {
      title: 'Article Title 2',
      content: 'This is a short summary of article content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      publishedDate: new Date(),
      imageUrl: 'https://www.bgs.ac.uk/wp-content/uploads/2021/05/PumpingWater.jpg'
    },
    {
      title: 'Article Title 3',
      content: 'This is a short summary of article content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      publishedDate: new Date(),
      imageUrl: 'https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2023/03/23/10536021_1.jpg?VersionId=lTrZfEeOFHHHPecpn9t_L6RbOlgXh4Sd'
    }
    ,
    {
      title: 'Article Title 4',
      content: 'This is a short summary of article content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      publishedDate: new Date(),
      imageUrl: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iMdbLjpOxpag/v1/-1x-1.jpg'
    },
    {
      title: 'Article Title 5',
      content: 'This is a short summary of article content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      publishedDate: new Date(),
      imageUrl: 'https://www.sdgfund.org/sites/default/files/Philippines-Erwin-Lim-Til-the-Last-Drop_0.jpg'
    }
    ,
    {
      title: 'Article Title 6',
      content: 'This is a short summary of article content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      publishedDate: new Date(),
      imageUrl: 'https://media.philstar.com/photos/2020/11/15/oped_2020-11-15_22-53-24.jpg'
    }
  ];
}