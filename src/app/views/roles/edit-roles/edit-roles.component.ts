import { Component, OnInit } from '@angular/core';
import {IRole} from '../interfaces/role';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.sass']
})
export class EditRolesComponent implements OnInit {
  roles: IRole[] = [];
  colNames = {
    name: 'Роль',
    user_red: 'Р поль',
    znaki_qr: 'П QR',
    znaki_qr_edit: 'Р QR',
    znaki_qr_delete: 'У QR',
    znaki_fe: 'П Пас. ДЗ',
    znaki_fe_edit: 'Р Пас Дз',
    znaki_fe_delete: 'У Пас. ДЗ',
    znaki_ae: 'П пр ДЗ',
    znaki_ae_edit: 'Р пр ДЗ',
    znaki_ae_delete: 'У пр ДЗ',
    otchety: 'П отч',
    kodifikator_edit: 'Р код',
    razmetka_red: 'Р разм',
    svetofory_red: 'Р св',
    naradi_red: 'Р нар',
    filter_red: 'Р филь',
    e_b_red: 'Р эл б',
    street_red: 'Р улиц',
    brigady_red: 'Р бригад',
    prosmotr_s_o: 'П с,о',
    redactirovanie_s_o: 'Р с о',
    object_delete: 'У об',
    object_action_delete: 'У действ об',
    isp_shema_read: 'Р исп сх',
    isp_shema_delete: 'У исп сх',
};

  constructor() { }

  ngOnInit(): void {
    this.roles = [{
      name: 'Admin',
      e_b_red: true,
      filter_red: true,
      brigady_red: true,
      kodifikator_edit: false,
      isp_shema_delete: true,
      naradi_red: true,
      isp_shema_read: false,
      otchety: true,
      object_action_delete: true,
      object_delete: true,
      prosmotr_s_o: true,
      razmetka_red: true,
      redactirovanie_s_o: true,
      street_red: true,
      svetofory_red: true,
      znaki_ae: true,
      znaki_ae_edit: true,
      user_red: true,
      znaki_fe: true,
      znaki_fe_edit: true,
      znaki_ae_delete: true,
      znaki_qr: true,
      znaki_qr_edit: true,
      znaki_fe_delete: true,
      znaki_qr_delete: true,
    },
    {
      name: 'User',
      e_b_red: false,
      filter_red: false,
      brigady_red: false,
      kodifikator_edit: false,
      isp_shema_delete: false,
      naradi_red: false,
      isp_shema_read: false,
      otchety: false,
      object_action_delete: false,
      object_delete: false,
      prosmotr_s_o: false,
      razmetka_red: false,
      redactirovanie_s_o: false,
      street_red: false,
      svetofory_red: false,
      znaki_ae: false,
      znaki_ae_edit: false,
      user_red: false,
      znaki_fe: false,
      znaki_fe_edit: false,
      znaki_ae_delete: false,
      znaki_qr: false,
      znaki_qr_edit: false,
      znaki_fe_delete: false,
      znaki_qr_delete: false,
    }];
  }

  editRole($event: any): void {
  }
}
