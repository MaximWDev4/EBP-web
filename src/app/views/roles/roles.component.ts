import { Component, OnInit } from '@angular/core';

type Role = {
  manager: string,
  roleName: string,
};



@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.sass']
})
export class RolesComponent implements OnInit {
  query: string = '';
  roles: Role[] = [
    {manager: 'Иван Максимов Юрьевич', roleName: 'Технадзор'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Корректор'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Администрация'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Гость'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Технадзор'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Корректор'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Администрация'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Гость'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Технадзор'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Корректор'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Администрация'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Гость'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Технадзор'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Корректор'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Администрация'},
    {manager: 'Иван Максимов Юрьевич', roleName: 'Гость'},

  ];

  displayedRoles: Role[];
  constructor() {
    this.displayedRoles = this.roles;
  }

  ngOnInit(): void {
  }

  onlyUnique(value: any, index: any, self: any): boolean {
    return self.indexOf(value) === index;
  }

  queryChange(): void {
    this.displayedRoles = this.roles.filter((item) => {
      return item.roleName.includes(this.query);
    });
  }

  setSelectedRoles(value: any): void {
    this.displayedRoles = this.roles.filter((item) => {
      return item.roleName = value;
    });
    this.displayedRoles = this.displayedRoles.filter((item) => {
      return item.roleName.includes(this.query);
    });
  }
}
