import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent {
  public title='Our Partners';
  public msg ='You can achieve a very impressive effect by using our animated navbar, which is transparent on start, and change the color after the scroll.'
  

  // declarations
  partners= [{company: 'Microsoft', trademark: 'https://res.cloudinary.com/practicaldev/image/fetch/s--hGMNtOHK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/ratracegrad/image/upload/v1672329839/Screenshot_2022-12-29_at_11.03.48_AM_ehepan.png'
  , sponsorship:'Gold', website:'https://www.microsoft.com/en-ph'},
  {company: 'Apple Inc.', trademark: 'https://www.giantbomb.com/a/uploads/scale_small/0/316/520157-apple_logo_dec07.jpg', sponsorship:'Platinum', website:'https://www.apple.com/ph/'},
  {company: 'Amazon', trademark: 'https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg', sponsorship:'Silver', website:'https://www.amazon.com/'},
  {company: 'Google Inc.', trademark: 'https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg', sponsorship:'Bronze', website:'https://about.google/'}
];

  onClick(){
    console.log("You are now a sponsor")
  }

}
