import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EstimationService } from '../../data-access/estimation.service';
import { EstimatorService } from '../../data-access/estimator.service';
import { Estimation } from '../../@models/estimation.model';
import { EMPTY, catchError, combineLatest, ignoreElements, of, startWith } from 'rxjs';
import { ProductService } from 'src/app/modules/products/data-access/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-estimation',
  templateUrl: './new-estimation.component.html',
  styleUrls: ['./new-estimation.component.scss']
})
export class NewEstimationComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private estimationService: EstimationService,
    private estimatorService: EstimatorService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      description: new FormControl('', Validators.required),
      estimator: new FormControl('', Validators.required),
      product: new FormControl('', Validators.required),
      savings: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]*$")]),
      status: new FormControl('proposed', Validators.required),
    })
  }

  products$ = this.productService.getProducts().pipe(
    startWith(null),
    catchError(() => EMPTY)
  );

  productsError$ = this.productService.getProducts().pipe(
    ignoreElements(),
    startWith(null),
    catchError(error => {
      error = new HttpErrorResponse({ status: 404, statusText: 'Could not load products' });
      return of(error);
    })
  )

  estimators$ = this.estimatorService.getEstimators().pipe(
    startWith(null),
    catchError(() => EMPTY)
  );

  estimatorsError$ = this.estimatorService.getEstimators().pipe(
    ignoreElements(),
    startWith(null),
    catchError(error => {
      error = new HttpErrorResponse({ status: 404, statusText: 'Could not load estimators' });
      return of(error);
    })
  )

  viewModel$ = combineLatest({
    products: this.products$,
    productsError: this.productsError$,
    estimators: this.estimators$,
    estimatorsError: this.estimatorsError$
  })

  submitForm() {
    const formValue = this.form.value;
    const estimation: Estimation = {
      estimationDescription: formValue.description,
      estimatorName: formValue.estimator,
      productName: formValue.product,
      estimationSavings: formValue.savings
    };
    this.estimationService.postEstimation(estimation);
    setTimeout(() => {
      this.router.navigate(['/estimations']);
    }, 2000);
  }

  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target.value !== '') {
      target.classList.add('select-dark');
    }
  }
}
