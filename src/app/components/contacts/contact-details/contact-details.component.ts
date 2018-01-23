import { ActivatedRoute } from '@angular/router';
import { Component, OnInit ,Injector } from '@angular/core';
import { ContactsService } from '../../../shared/services/contacts.service';
import {PageTitleService} from '../../../shared/services/page-title.service';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
})
export class ContactDetailsComponent implements OnInit {
  
  private contact: any;
  private contactService;

  constructor(
              private route: ActivatedRoute,
              // private contactService: ContactsService,
              private PageTitleService: PageTitleService,
              private injector: Injector,

            ) {
  }

  ngOnInit() {
    this.contactService = this.injector.get(ContactsService);
    this.route.params.subscribe(() => {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));

      this.contact = [];
      this.contactService.getContacts()
        .subscribe((data: any[]) => {
          this.contact = data.find(item => item['id'] == id);
          this.PageTitleService.setTitle('Contact - ' + this.contact.id);

        });
    });
  }
  ngOnDestroy(){
    this.PageTitleService.setTitle('');
  }
}
