import { Component, OnInit } from '@angular/core';
import { tutorialanimations } from '../animations/animations';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'overview',
  templateUrl: './tutorial1.component.html',
  styleUrls: ['./tutorial1.component.scss'],
  animations: tutorialanimations
})
export class Tutorial1Component implements OnInit {
  allitems = [{text:'Warum Angular?', link:'/angular'},{text:'Installation', link:'/installation'},{text:'Angular CLI', link:'/cli'},{text:'Components',link:'components'},{text:'Services', link:'services'},{text:'Routing und Navigation',link:'routing'}].reverse();
  curitems = [];
  imgstate = 'hidden';
  constructor(private router: Router) { }


  ngOnInit() {
  }

  onClick(){
    if(this.imgstate !== 'visible'){
      this.imgstate = 'visible';
      return;
    }
    if(this.allitems.length >0){
      this.curitems.push(this.allitems.pop());
    } else {
      this.router.navigate([this.curitems[0].link]);
    }
  
  }

}
