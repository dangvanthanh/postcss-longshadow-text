<h1 align="center">
	<br>
	<img width="846" src="https://raw.githubusercontent.com/dangvanthanh/postcss-longshadow-text/master/media/longshadow-text.jpg" alt="Long shadow text">
	<br>
	<br>
	<br>
</h1>

# postcss-longshadow-text

[![Build Status](https://travis-ci.org/dangvanthanh/postcss-longshadow-text.svg?branch=master)](https://travis-ci.org/dangvanthanh/postcss-longshadow-text)

> Postcss plugin for long shadow text


## Install

```
$ npm install [--save] postcss-longshadow-text
```


## Configure

```js
postcss([require('postcss-tipsy')])
```

See [Postcss](https://github.com/postcss/postcss) docs for examples for your environment.

## API

### Stylesheets

```css
.foo {
	longshadow-text: [direction] [size] [color];
}
```

Examples

```
.foo {
	longshadow-text: top 70 #a13c32;
}
```

### Options

| Options    | Description                 | Value                                                                   |
|------------|-----------------------------|-------------------------------------------------------------------------|
| direction  | Position of shadow text     | top, right, bottom, left, top-left, top-right, bttom-left, bottom-right |
| size       | Size of shadow text         | Number such as 10, 20, 30                                               |
| color      | Color of shadow text        | HEX, RGB, RGBA, HSL                                                     |

## License

MIT © [Dang Van Thanh](http://dangthanh.org)
