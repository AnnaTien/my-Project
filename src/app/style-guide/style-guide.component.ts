import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {

  constructor(private toastr: ToastrService) {

  }

  ngOnInit() {

  }
  showInfo(str) {
    this.toastr.info(str);
  }
  showWarning(str) {
    this.toastr.warning(str);
  }
  showSuccess(str) {
    this.toastr.success(str);
  }
  showError(str) {
    this.toastr.error(str);
  }


}
