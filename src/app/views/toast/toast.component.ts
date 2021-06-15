import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ErrorService} from '../../_servieces/error.service';
import {InfoService} from '../../_servieces/info.service';
import {SuccessService} from '../../_servieces/success.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private errorService: ErrorService,
    private infoService: InfoService,
    private successService: SuccessService) {}


  ngOnInit(): void {
    this.errorService.execChange.subscribe(value => this.showError(value));
    this.infoService.execChange.subscribe(value => this.showInfo(value));
    this.successService.execChange.subscribe(value => this.showSuccess(value));
  }

  showSuccess(value: string): void {
    this.toastr.success(value, 'Успех!');
  }

  showError(data: string): void {
    this.toastr.error(data, 'Ошибка');
  }

  private showInfo(value: string): void {
    this.toastr.info(value, 'Внимание');
  }
}
