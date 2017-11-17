import { Component, OnInit} from '@angular/core';
import {Quote} from "../data/quotes.interface";

import {VideolistPage} from "../videolist/videolist";
import quotes from "../data/quotes";
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage implements OnInit{
  quoteCollection : {category:string,quotes: Quote[],icon:string}[];
  videolist = VideolistPage;

  ngOnInit()
  {
    this.quoteCollection = quotes;
  }

}
