import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() paraText: String =
    'Did you know that SmallChange <sup>TM</sup> has no investment fees on portfolios balances under $5,000? After that, only a 0.25% fees applies monthly.';
}
