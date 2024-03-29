import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import * as moment from 'moment';
export class DischargeCancel {
  public DischargeCancelId: number = 0;
  public PatientVisitId: number = null;
  public PatientAdmissionId: number = null;
  public DischargedDate: string = null;
  public CreatedOn: string = null;
  public DischargeCancelNote: string = null;
  public DischargedBy: number = null;
  public DischargeCancelBy: number = null;
  public BillingTransactionId: number = null;
  public DischargeCancelValidator: FormGroup = null;
  public CounterId: number = 0;
  public NewBedId: number = null;
  constructor() {
    this.CreatedOn = moment().format("YYYY-MM-DD");
    const formBuilder = new FormBuilder();
    this.DischargeCancelValidator = formBuilder.group({
      'DischargeCancelNote': ['', Validators.compose([Validators.required, Validators.maxLength(300)])],

    });
  }
  public IsDirty(fieldName): boolean {
    if (fieldName == undefined)
      return this.DischargeCancelValidator.dirty;
    else
      return this.DischargeCancelValidator.controls[fieldName].dirty;
  }

  public IsValid(): boolean { if (this.DischargeCancelValidator.valid) { return true; } else { return false; } }

  public IsValidCheck(fieldName, validator): boolean {
    if (fieldName == undefined) {
      return this.DischargeCancelValidator.valid;

    }
    else
      return !(this.DischargeCancelValidator.hasError(validator, fieldName));
  }

}
