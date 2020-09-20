# PrimeNG with Angular 10

PrimeNG with Angular 10

https://primefaces.org/primeng/showcase/#/

## PluralSight course by Glen Smith

Demo: https://glenasmith.github.io/pluralsight-primeng/alltimes

Source: https://github.com/glenasmith/pluralsight-primeng

Starter Kit: https://github.com/glenasmith/pluralsight-primeng/tree/starter-kit

## Install PrimeNG

npm install primeng --save
npm install primeicons --save
npm install font-awesome --save

Add to existing styles in angular.json:

```json
"styles": [
  "node_modules/primeicons/primeicons.css",
  "node_modules/font-awesome/css/font-awesome.css",
  "node_modules/primeng/resources/primeng.css",
  "src/styles.scss"
],
```

Details: https://primefaces.org/primeng/showcase/#/setup

## PrimeNG 10

### FormLayout

Small css utility, written on top of PrimeFlex (optional Grid Library on PrimeNG): reduces amount of css you have to write yourself

- https://www.primefaces.org/showcase/ui/input/formLayout.xhtml
- https://primefaces.github.io/primefaces/8_0/#/components/formlayout

