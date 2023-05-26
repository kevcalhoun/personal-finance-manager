import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-profile-selector',
  templateUrl: './profile-selector.component.html',
  styleUrls: ['./profile-selector.component.scss']
})
export class ProfileSelectorComponent implements OnInit {
   // expansion panel
   panelOpenState = false;
   
   // profile dropdown form
   hideRequiredControl = new FormControl(false);
   floatLabelControl = new FormControl('auto' as FloatLabelType);
   options = this._formBuilder.group({
     hideRequired: this.hideRequiredControl,
     floatLabel: this.floatLabelControl,
   });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}