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
	longshadow-text: [direction] [size] [color] [type];
}
```

Examples

```
.text-element {
	longshadow-text: top 70 #A13C32 text;
}

.box-element {
	longshadow-text: bottom 120 #702C70 box;
}
```

### Options

| Options      | Description                 | Value                                                                   |
|--------------|-----------------------------|-------------------------------------------------------------------------|
| `direction`  | Position of shadow text     | `top`, `right`, `bottom`, `left`, `top-left`, `top-right`, `bottom-left`, `bottom-right` |
| `size`       | Size of shadow text         | Number such as 10, 20, 30                                               |
| `color`      | Color of shadow text        | HEX, RGB, RGBA, HSL                                                     |
| `type`       | What kind of shadow to add  | `text` or `box`                                                         |

## Team

[![Dang Van Thanh](https://avatars3.githubusercontent.com/u/2674850?v=3&s=100)](https://github.com/dangvanthanh) |
---|
[Dang Van Thanh](https://github.com/dangvanthanh) |

## License

MIT © [Dang Van Thanh](http://dangthanh.org)
