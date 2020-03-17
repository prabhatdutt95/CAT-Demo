import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showConiguration() {
    this.router.navigate(['/configure']);
  }

}
