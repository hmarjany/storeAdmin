import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SlideInOutAnimation } from 'src/app/animations';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [SlideInOutAnimation]
})
export class HomeComponent implements OnInit {
  animationProductState = 'out';
  animationTransactionState = 'out';
  animationAcountingState = 'out';
  
  @Output() productListClickEvent = new EventEmitter();
  @Output() transactionClickEvent = new EventEmitter();

  constructor(private authService: AuthService,) { }

  ngOnInit() {
  }
  acountingClick(name: string){
    this.animationProductState = 'out';
    this.animationTransactionState = 'out';
    if (name === 'acounting') {
      this.animationAcountingState = this.animationAcountingState === 'out' ? 'in' : 'out';
    }
  }

  transactionClick(name: string){
    this.animationProductState = 'out';
    this.animationAcountingState = 'out';
    if (name === 'transaction') {
      this.animationTransactionState = this.animationTransactionState === 'out' ? 'in' : 'out';
    }
  }

  productListClick(name: string){
    this.animationTransactionState = 'out';
    this.animationAcountingState = 'out';
    if (name === 'productList') {
      this.animationProductState = this.animationProductState === 'out' ? 'in' : 'out';
    }
  }

  logout() {
    this.authService.logout();
  }

}
