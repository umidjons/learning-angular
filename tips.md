# Installation

```bash
npm i -g typescript
npm i -g @angular/cli
```

Checking installation of the `Angular CLI`:

```bash
ng --version
ng --help
```

Creating a new project:

```bash
ng new hello-world
cd hello-world
ng serve
# ng serve --port 9000
```

Create a new component:

```bash
ng generate component hello-world
# ng g c hello-world
```

# Build the application for Production

```bash
ng build --target=production
# ng build --target=production --base-href '/'
```

# Deploy to ZEIT

First login into [zeit.co](zeit.co) and obtain token.

Then change directory into `dist` and invoke following command:

```bash
now -t <token>
```

Open automatically copied URL in your web browser.


