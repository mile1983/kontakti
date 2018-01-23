import { Component , Inject} from '@angular/core';
import {PageTitleService} from '../../shared/services/page-title.service';
@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})
export class LayoutComponent {
    
  title:string;
  
    constructor(private pageTitleService: PageTitleService,
      @Inject('APP_CONFIG_DEFAULT_TITLE') private defaultTitle: string) {

      this.pageTitleService
      .pageTitleAnnounced$
      .subscribe((title) => {
        this.title = title;
      });
    }
  }


