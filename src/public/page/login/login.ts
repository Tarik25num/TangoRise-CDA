import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Logo } from '../../component/logo/logo';
import { AuthButton } from '../../component/auth-button/auth-button';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, Logo, AuthButton],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
