# Tailwind with Gulp

Use [Tailwind](https://github.com/tailwindlabs/tailwindcss)
with Gulp. This repo contains a `gulpfile.js` with two tasks:

-   First: This task builds the style file from the source file `css/tailwind.css` and then copies it into the `build` folder.
-   Second: minifies the built file and saves with the `tailwind.min.css` name.

You can clone and add more tasks to `gulpfile.js` and add them to watch section for automatic building.

## How to use

Clone repo:

```bash
$ git clone git@github.com:chalist/tailwind-with-gulp.git
```

Go to directory:

```bash
$ cd tailwind-with-gulp
```

Install npm packages:

```bash
$ npm install
```

Run gulp:

```bash
$ gulp
[06:04:35] Using gulpfile ~/tailwind-with-gulp/gulpfile.js
[06:04:35] Starting 'default'...
[Browsersync] Access URLs:
 ---------------------------------------
       Local: http://localhost:3000
    External: http://192.168.43.137:3000
 ---------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ---------------------------------------

```
