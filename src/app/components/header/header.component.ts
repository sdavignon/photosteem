import {Component, Input} from '@angular/core';
import {DialogComponent} from "../dialog/dialog.component";
import {MdDialog} from "@angular/material";
import {Author} from "../../services/steem/author.model";
import {GoogleAnalyticsService} from "../../services/analytics/google-analytics.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'ps-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  /**
   * An Author
   *
   * @type Author
   */
  @Input() user: Author;

  /**
   * Authentication URL
   * @type string
   */
  public authUrl: string = '';

  /**
   * @constructor
   * @public
   * @param dialog
   * @param authService
   */
  constructor(public dialog: MdDialog, private authService: AuthService) { }

  /**
   * Performs auth action
   *
   * @returns void
   */
  public auth(): void {
    this.authUrl = this.user ? 'https://steemconnect.com/logout' : this.authService.getLoginUrl();
    GoogleAnalyticsService.trackEvent('UserMenu', this.user ? 'logout' : 'login');
    setTimeout(() => window.location.href = this.authUrl, 100);
  }

  /**
   * Tracks a profile click
   *
   * @public
   * @returns void
   */
  public trackProfileClick(): void {
    GoogleAnalyticsService.trackEvent('UserMenu', 'profileList');
  }

  /**
   * Opens a dialog
   *
   * @public
   * @returns void
   */
  public openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log("done", result);
    });
  }
}
