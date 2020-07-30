import { NgModule } from '@angular/core';

import {AuthServiceService} from "../../services/auth-service.service";

@NgModule({
  imports: [

  ],
  declarations: [],
  providers: [AuthServiceService]
})
export class UserDetailsModule {
  title = 'myHighchart';

  constructor() { }

}
