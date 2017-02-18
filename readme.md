<h1 align="center">
	<img width="846" src="https://raw.githubusercontent.com/dangvanthanh/postcss-longshadow-text/master/media/longshadow-text.jpg" alt="Long shadow text">
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
postcss([require('postcss-longshadow-text')])
```

See [Postcss](https://github.com/postcss/postcss) docs for examples for your environment.

## API

### Stylesheets

```css
.foo {
	longshadow-text: [direction] [size] [color] [type (optional)];
}
```

Examples

```
.text-element {
	longshadow-text: top 70 #a13c32;
}

.box-element {
	longshadow-text: top 70 #a13c32;
}
```

### Options

| Options    | Description                 | Value                                                                   |
|------------|-----------------------------|-------------------------------------------------------------------------|
| direction  | Position of shadow text     | top, right, bottom, left, top-left, top-right, bttom-left, bottom-right |
| size       | Size of shadow text         | Number such as 10, 20, 30                                               |
| color      | Color of shadow text        | HEX, RGB, RGBA, HSL                                                     |
| box-shadow | if element is not text      | default is text, 'box' adds box shadow                                  |


## License

MIT © [Dang Van Thanh](http://dangthanh.org)
