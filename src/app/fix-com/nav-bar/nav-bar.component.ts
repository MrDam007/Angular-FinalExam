import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { TataService } from 'src/app/tata.service';
import { WalletComponent } from 'src/app/wallet/wallet.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router, private auth: AuthService, private tata: TataService) { }
  navigateHandler() {
    this.router.navigate(['/wallet']);
  }
  @Output() closeSidenav = new EventEmitter<void>();

  onClose() {
    this.closeSidenav.emit()
  }

  ali() {
    var result = false
    if (this.auth.auth == true) {
      result = true
    } else if (this.auth.auth == false) {
      result = false
    }
    return result
  }

  Logout() {
    this.auth.logout();
  }

  badgeResult() {
    return this.tata.badge();
  } // NeW


}
