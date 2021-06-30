import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChangeModalComponent} from './change-modal/change-modal.component';
import {IIdentifier} from './interfaces/identifiers';
import {DynamicDataService} from '../../_servieces/dynamic-data.service';

function formatDateStr(manDate: string): string {
  // console.log(manDate);
  // manDate = manDate.replace(/\./g, '-');
  return manDate.replace(' ', 'T');
}

@Component({
  selector: 'app-identifiers',
  templateUrl: './identifiers.component.html',
  styleUrls: ['./identifiers.component.sass']
})
export class IdentifiersComponent implements OnInit {
  public itemsPerPage = 20;
  public p = 0; // current page
  colNames = {
    id: 'ID',
    gost_id: '№ Госта',
    position: 'Позиция',
    street: 'Основная улица',
    street_dop: 'Пересек. улица',
    tiporaz_id: 'Типоразмер',
    tip_kr_id: 'Тип крепления',
    type_pl_id: 'Тип пленки',
    creator: 'Исполнитель',
    qrcode: 'QR код',
    dt_action_created: 'Дата',
  };
  ids: IIdentifier[];
  public drawbleIds: IIdentifier[] = [];
  constructor(public dialog: MatDialog, private dds: DynamicDataService) {
    this.ids = [];
    this.drawbleIds = [];
  }

  ngOnInit(): void {
    this.dds.getPassports().subscribe((data: any) => this.ids = data, error => {}, () => {this.drawbleIds = this.ids; });
  }

  filter(f: {fromDate: number, toDate: number}): void {
    this.drawbleIds = this.ids.filter((id) =>
      (id.dt_action_created > f.fromDate && id.dt_action_created < f.toDate));
  }

  get pageCount(): number {
    return Math.ceil(this.ids.length / this.itemsPerPage);
  }

  PaginationEvent(e: number): void {
    window.scroll(0, 0);
    this.p = e;
  }

  saveOne(data: IIdentifier): void {
    this.ids[this.ids.findIndex((item: IIdentifier) => item.id === data.id)] = data;
  }

  delete(id: number|string): void{
    console.log(this.ids.findIndex((item: IIdentifier) => item.id === id));
    this.ids.splice(this.ids.findIndex((item: IIdentifier) => item.id === id), 1);
    this.drawbleIds = this.ids;
  }

  editModal(i: number): void {
    const item = this.drawbleIds[i];
    const dialogRef = this.dialog.open(ChangeModalComponent, {
      width: '60vw',
      data: {title: 'Редактировать', content: item}
    });
    dialogRef.afterClosed().subscribe((
      result:
        { delete: true; edit: false; id: number } |
        {edit: true; delete: false; item: IIdentifier } |
        {delete: false; edit: false; }) => {
      if (result) {
        if (result.delete) {
          this.delete(result.id);
          console.log(result.id);
        } else if (result.edit) {
          this.saveOne(result.item);
        }
      }
    });
  }
}
