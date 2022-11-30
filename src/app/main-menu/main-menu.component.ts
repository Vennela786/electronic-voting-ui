import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createBallot(): void {
    console.log('createBallot')
    this.router.navigate(['/createBallot']);
  }

  casteVote():void{
    console.log('CasteVote')
    this.router.navigate(['/casteVote']);
  }

  viewPolls(): void {
    //console.log('viewPolls')
    this.router.navigate(['/view-poll']);
  }

}
