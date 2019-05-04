import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Component({ selector: 'page', templateUrl: './page.component.html' })
export class PageComponent {
  @Input() fullname: string = '';
  dynamic;
  constructor(private httpClient: HttpClient) {}

  async ngOnInit() {
    if (this.fullname) {
      this.dynamic = await this.httpClient
        .get(environment.SERVER_URL + '/api/web/dvo/getDvoInfoByFullname?fullname=' + this.fullname)
        .toPromise();
    }
  }
}
