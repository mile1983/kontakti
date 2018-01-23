import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class PageTitleService {

    private pageTitleSource = new Subject<string>(); 
    
    pageTitleAnnounced$ = this.pageTitleSource.asObservable();
    
    setTitle(title: string){
            this.pageTitleSource.next(title);
    }
}