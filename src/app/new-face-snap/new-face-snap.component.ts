import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { map, Observable } from "rxjs";
import { FaceSnap } from "../models/face-snap";
import {
  AsyncPipe,
  DatePipe,
  NgIf,
  TitleCasePipe,
  UpperCasePipe,
} from "@angular/common";
import { FaceSnapsService } from "../services/face-snaps.service";

@Component({
  selector: "app-new-face-snap",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    AsyncPipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: "./new-face-snap.component.html",
  styleUrl: "./new-face-snap.component.scss",
})
export class NewFaceSnapComponent implements OnInit {
  title: string = "Create a new faceSnap";
  snapForm!: FormGroup;
  form$!: Observable<FaceSnap>;
  regex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private faceSnapService: FaceSnapsService
  ) {}

  ngOnInit(): void {
    this.regex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group(
      {
        title: [null, Validators.required],
        imageUrl: [null, [Validators.required, Validators.pattern(this.regex)]],
        description: [null, Validators.required],
        location: [null],
      },{
        updateOn: 'blur'
      }
    );

    this.form$ = this.snapForm.valueChanges.pipe(
      map((value) => ({
        ...value,
        createdAt: new Date(),
        snaps: 0,
      }))
    );
  }

  onSubmit(): void {
    if (
      this.snapForm.value["title"] === null ||
      this.snapForm.value["imageUrl"] === null
    ) {
    } else {
      this.faceSnapService.addFaceSnap(this.snapForm.value).subscribe();
    }

    console.log(this.snapForm.value);
  }
}
