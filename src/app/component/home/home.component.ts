import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef,media: MediaMatcher,private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 6000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

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

  onActivate(event) {
    window.scroll(0, 0);
  }

  logout() {
    this.authService.logout();
  }

}
