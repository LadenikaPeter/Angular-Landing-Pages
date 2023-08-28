import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'product-card',
    loadComponent: () =>
      import('./pages/product-card/product-card.component').then(
        (m) => m.ProductCardComponent,
      ),
  },
  {
    path: 'nft-card',
    loadComponent: () =>
      import('./pages/nft-card/nft-card.component').then(
        (m) => m.NftCardComponent,
      ),
  },
  {
    path: 'order-summary',
    loadComponent: () =>
      import('./pages/order-summary/order-summary.component').then(
        (m) => m.OrderSummaryComponent,
      ),
  },
  {
    path: 'result-summary',
    loadComponent: () =>
      import('./pages/result-summary/result-summary.component').then(
        (m) => m.ResultSummaryComponent,
      ),
  },
  {
    path: 'stats-preview',
    loadComponent: () =>
      import('./pages/stats-preview/stats-preview.component').then(
        (m) => m.StatsPreviewComponent,
      ),
  },
  {
    path: 'rating',
    loadComponent: () =>
      import('./pages/interactive-rating/interactive-rating.component').then(
        (m) => m.InteractiveRatingComponent,
      ),
  },
  {
    path: 'social-proof',
    loadComponent: () =>
      import('./pages/social-proof/social-proof.component').then(
        (m => m.SocialProofComponent))
  },
  {
   path: 'accordion-card',
    loadComponent: () =>
      import('./pages/accordion-card/accordion-card.component').then(
        (m => m.AccordionCardComponent)
      )
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./pages/sign-up-form/sign-up-form.component').then(
        (m => m.SignUpFormComponent)
      )
  },
  {
    path: 'age-calculator',
    loadComponent: () =>
      import('./pages/age-calculator/age-calculator.component').then(
        (m => m.AgeCalculatorComponent)
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
