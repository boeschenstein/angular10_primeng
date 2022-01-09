# PrimeNG with Angular 10

PrimeNG with Angular 10

<https://primefaces.org/primeng/showcase/#/>

## PluralSight course by Glen Smith

Demo: <https://glenasmith.github.io/pluralsight-primeng/alltimes>

Source: <https://github.com/glenasmith/pluralsight-primeng>

Starter Kit: <https://github.com/glenasmith/pluralsight-primeng/tree/starter-kit>

## New Angular 10 app

`ng new agile-times`

Choose scss

Install prettier addon in vs code, add setting to settings.json:

```json
"editor.formatOnSave": true,
```

Details see: <https://github.com/boeschenstein/vscode1-information>

## Install PrimeNG

npm install primeng --save
npm install primeicons --save

Add to existing styles in angular.json. Order is important, because we we want to be able to override default values with your styles.scss:

```json
"styles": [
  "node_modules/primeicons/primeicons.css",
  "node_modules/primeng/resources/primeng.css",
  "node_modules/primeng/resources/themes/bootstrap4-dark-purple/theme.css",            <--- choose a theme from the showcase
  "src/styles.scss"
],
```

Details: <https://primefaces.org/primeng/showcase/#/setup>

## Hello World

Add ButtonModule to app.module.ts:

`import { ButtonModule } from 'primeng/button';`

and

```json
  imports: [
    ...,
    ButtonModule
  ],

```

Remove all in app.component.html and set this:

```html
<button pButton type="button" label="Click" ></button>
<p-button label="Click" ></p-button>

<router-outlet></router-outlet>
```

## PrimeNG 10

### FormLayout

Small css utility, written on top of PrimeFlex (optional Grid Library on PrimeNG): reduces amount of css you have to write yourself

- <https://www.primefaces.org/showcase/ui/input/formLayout.xhtml>
- <https://primefaces.github.io/primefaces/8_0/#/components/formlayout>
- <https://github.com/primefaces/primeflex>

## ChartJS

<https://www.chartjs.org/>

<https://www.primefaces.org/primeng/showcase/#/chart>

```bash
npm install chart.js --save
```

```json
"scripts": [
    "../node_modules/chart.js/dist/Chart.js",
    //..others
],
```

## Quill (open source rich text editor)

<https://quilljs.com/>

<https://www.primefaces.org/primeng/showcase/#/editor>

```bash
npm install quill --save
```

```json
"styles": [
    "../node_modules/quill/dist/quill.core.css",
    "../node_modules/quill/dist/quill.snow.css",
"scripts": [
    "../node_modules/quill/dist/quill.js",
],
```
