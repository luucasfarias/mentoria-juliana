import { Component, OnDestroy, OnInit } from '@angular/core';
import { People } from '../models/people.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listPeople = [
    {
      category: 'Angular',
      thumbnail: '',
      title: 'Robson',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      category: 'Java',
      thumbnail: '',
      title: 'Rosa',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      category: 'Vue',
      thumbnail: '',
      title: 'Pedro',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      category: '.NET',
      thumbnail: '',
      title: 'Vicente',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      category: 'React',
      thumbnail: '',
      title: 'Marcos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      category: 'PHP',
      thumbnail: '',
      title: 'Mariana',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.listPeople);

  }
}
