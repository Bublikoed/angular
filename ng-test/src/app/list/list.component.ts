import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})



export class ListComponent implements OnInit {

  car: string[];

  items2: string[];

  services: any;
  services2: any;
  services3: any;

  constructor() {
    this.car = ['BMW', '290', 'M3', 'White'];
    this.items2 = ['angular', 'react', 'vue', 'botstrap', 'node'];

    async function getResponse() {
      let response = await fetch('https://random-data-api.com/api/cannabis/random_cannabis?size=30')
      return await response.json();
    }
    this.services = []
    this.services2 = []
    this.services3 = []

    getResponse()
      .then(res => {
        for (var i = 0; i < res.length; i++) {
          this.services = res
          if (i % 2 == 0) {
            this.services2.push(res[i])
          } else {
            this.services3.push(res[i])
          }
        }
        console.log(res)
      })
  }


  ngOnInit() {
  }

}
interface Colors {
  car: string,
  salon: string,
  wheels: string
}