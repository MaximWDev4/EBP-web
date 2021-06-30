export interface IRole {
  name: string;
  user_red: boolean;
  znaki_qr: boolean;
  znaki_qr_edit: boolean;
  znaki_qr_delete: boolean;
  znaki_fe: boolean;
  znaki_fe_edit: boolean;
  znaki_fe_delete: boolean;
  znaki_ae: boolean;
  znaki_ae_edit: boolean;
  znaki_ae_delete: boolean;
  otchety: boolean;
  kodifikator_edit: boolean;
  razmetka_red: boolean;
  svetofory_red: boolean;
  naradi_red: boolean;
  filter_red: boolean;
  e_b_red: boolean;
  street_red: boolean;
  brigady_red: boolean;
  prosmotr_s_o: boolean;
  redactirovanie_s_o: boolean;
  object_delete: boolean;
  object_action_delete: boolean;
  isp_shema_read: boolean;
  isp_shema_delete: boolean;
}
