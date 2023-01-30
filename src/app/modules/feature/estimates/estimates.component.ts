import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.scss']
})
export class EstimatesComponent implements OnInit{

  ngOnInit(): void {

  }

  selectedTab: String = "all-estimates";

  setTab(tabName: String): void {
    this.selectedTab = tabName;
  }

}
