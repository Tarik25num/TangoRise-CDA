import { Component } from '@angular/core';
import { Logo } from "../../component/logo/logo";
import { FormRegister } from '../../component/form-register/form-register';
import { CguConfirmation } from '../../component/cgu-confirmation/cgu-confirmation';
import { AuthButton } from '../../component/auth-button/auth-button';

@Component({
  selector: 'app-register',
  imports: [Logo, FormRegister, CguConfirmation, AuthButton],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

}
