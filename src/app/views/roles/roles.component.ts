import { Component, OnInit } from '@angular/core';
import {InfoService} from '../../_servieces/info.service';

type Role = {
  firstname: string,
  middlename: string,
  surname: string,
  roleName: string,
  login: string,
  pass: string,
  nom: string,
  permissions: {name: string, active: boolean}[],
  active: boolean
};



@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.sass']
})
export class RolesComponent implements OnInit {
  query = '';
  filterRoles: Role[] = [];
  readonly roles: Role[] = [
    {  firstname: 'Влад',
      middlename: 'Артемович',
      surname: 'Иванов',
      roleName: 'Гость',
      login: 'ivan@gmail.com',
      pass: 'password',
      nom: '+77701010123',
      permissions: [{name: 'user_red', active: true}, {name: 'znaki_qr', active: true}, {name: 'znaki_qr_edit', active: true},
        {name: 'znaki_qr_delete', active: true}, {name: 'znaki_fe', active: true}, {name: 'znaki_ae', active: true}],
      active: true},
    {  firstname: 'Иван',
      middlename: 'Иван',
      surname: 'Иван',
      roleName: 'Технадзор',
      login: 'ivan@gmail.com',
      pass: 'password',
      nom: '+77701010123',
      permissions: [{name: 'user_red', active: true}, {name: 'znaki_qr', active: true}, {name: 'znaki_qr_edit', active: true},
        {name: 'znaki_qr_delete', active: true}, {name: 'znaki_fe', active: true}, {name: 'znaki_ae', active: true}],
      active: true},
    {  firstname: 'Иван',
      middlename: 'Иван',
      surname: 'Иван',
      roleName: 'Корректор',
      login: 'ivan@gmail.com',
      pass: 'password',
      nom: '+77701010123',
      permissions: [{name: 'user_red', active: true}, {name: 'znaki_qr', active: true}, {name: 'znaki_qr_edit', active: true},
        {name: 'znaki_qr_delete', active: true}, {name: 'znaki_fe', active: true}, {name: 'znaki_ae', active: true}],
      active: true},
    {  firstname: 'Иван',
      middlename: 'Иван',
      surname: 'Иван',
      roleName: 'Гость',
      login: 'ivan@gmail.com',
      pass: 'password',
      nom: '+77701010123',
      permissions: [{name: 'user_red', active: true}, {name: 'znaki_qr', active: true}, {name: 'znaki_qr_edit', active: true},
        {name: 'znaki_qr_delete', active: true}, {name: 'znaki_fe', active: true}, {name: 'znaki_ae', active: true}],
      active: true},
    {  firstname: 'Иван',
      middlename: 'Иван',
      surname: 'Иван',
      roleName: 'Гость',
      login: 'ivan@gmail.com',
      pass: 'password',
      nom: '+77701010123',
      permissions: [{name: 'user_red', active: true}, {name: 'znaki_qr', active: true}, {name: 'znaki_qr_edit', active: true},
        {name: 'znaki_qr_delete', active: true}, {name: 'znaki_fe', active: true}, {name: 'znaki_ae', active: true}],
      active: true},
    {  firstname: 'Иван',
      middlename: 'Иван',
      surname: 'Иван',
      roleName: 'Корректор',
      login: 'ivan@gmail.com',
      pass: 'password',
      nom: '+77701010123',
      permissions: [{name: 'user_red', active: true}, {name: 'znaki_qr', active: true}, {name: 'znaki_qr_edit', active: true},
        {name: 'znaki_qr_delete', active: true}, {name: 'znaki_fe', active: true}, {name: 'znaki_ae', active: true}],
      active: true},
    {  firstname: 'Иван',
      middlename: 'Иван',
      surname: 'Иван',
      roleName: 'Администрация',
      login: 'ivan@gmail.com',
      pass: 'password',
      nom: '+77701010123',
      permissions: [{name: 'user_red', active: true}, {name: 'znaki_qr', active: true}, {name: 'znaki_qr_edit', active: true},
        {name: 'znaki_qr_delete', active: true}, {name: 'znaki_fe', active: true}, {name: 'znaki_ae', active: true}],
      active: true},

  ];

  displayedRoles: Role[];
  expand = false;
  constructor(private infoService: InfoService) {
    this.displayedRoles = this.roles;
  }

  ngOnInit(): void {
    this.filterRoles = [... new Set(this.roles)];
    this.infoService.infoChange('Страница загрузилась');
  }

  queryChange(): void {
    this.displayedRoles = this.roles.filter((item) => {
      return [ item.firstname, item.middlename, item.surname ].join(' ').includes(this.query);
    });
  }

  setSelectedRoles(value: any): void {
    if (value === 0) {
      this.displayedRoles = this.roles;
    } else {
      this.displayedRoles = this.roles.filter((item) => item.roleName === value);
    }
    this.displayedRoles = this.displayedRoles.filter((item) => {
      return item.roleName.includes(this.query);
    });
  }
}
