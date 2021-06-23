import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChangeModalComponent} from './change-modal/change-modal.component';
import {IIdentifier} from './interfaces/identifiers';

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
    gostNom: '№ Госта',
    position: 'Позиция',
    mainStr: 'Основная улица',
    crossStr: 'Пересек. улица',
    standardSize: 'Типоразмер',
    bracing: 'Тип крепления',
    skin: 'Тип пленки',
    performerID: 'Исполнитель',
    qrCode: 'QR код',
    workType: 'Вид работ',
    manDate: 'Дата',
  };
  ids: IIdentifier[];
  public drawbleIds: IIdentifier[] = [];
  constructor(public dialog: MatDialog) {
    this.ids = [
      {
        gostNom: '2.1',
        position: 1,
        mainStr: 'frggrgr',
        crossStr: '4bdfbdr',
        standardSize: '3',
        bracing: '904',
        skin: '604',
        performerID: 19,
        qrCode: 'QR 2222222',
        workType: 60,
        manDate: 1625767200000,
      },
      {
        gostNom: '2.1',
        position: 1,
        mainStr: 'frggrgr',
        crossStr: '4bdfbdr',
        standardSize: '3',
        bracing: '904',
        skin: '604',
        performerID: 19,
        qrCode: 'QR 2222222',
        workType: 60,
        manDate: 1625767200000,
      },
      {
        gostNom: '2.1',
        position: 1,
        mainStr: 'frggrgr',
        crossStr: '4bdfbdr',
        standardSize: '3',
        bracing: '904',
        skin: '604',
        performerID: 19,
        qrCode: 'QR 2222222',
        workType: 60,
        manDate: 1625767200000,
      },
    ];
    this.drawbleIds = this.ids;
  }

  ngOnInit(): void {
  }

  filter(f: {fromDate: number, toDate: number}): void {
    this.drawbleIds = this.ids.filter((id) =>
      (id.manDate > f.fromDate && id.manDate < f.toDate));
  }

  get pageCount(): number {
    return Math.ceil(this.ids.length / this.itemsPerPage);
  }

  PaginationEvent(e: number): void {
    window.scroll(0, 0);
    this.p = e;
  }

  saveOne(data: IIdentifier): void {
    console.log(data);
    this.ids[this.ids.findIndex((item: IIdentifier) => item.qrCode === data.qrCode)] = data;
  }

  delete(id: number|string): void{
    console.log(this.ids.findIndex((item: IIdentifier) => item.qrCode === id));
    this.ids.splice(this.ids.findIndex((item: IIdentifier) => item.qrCode === id), 1);
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
      console.log('The dialog was closed');
      if (result.delete) {
        this.delete(result.id);
        console.log(result.id);
      } else if (result.edit) {
        this.saveOne(result.item);
      }
    });
  }
}
