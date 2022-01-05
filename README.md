# PostCSS Long Shadow Text

> PostCSS plugin for long shadow text

![](screenshot.png)

## Install

```
$ npm install --save postcss-longshadow-text
```

## Configure

Add the plugin to plugin list

```js
module.exports = {
	plugins: {
		require('postcss-longshadow-text')
	}
}
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
	longshadow-text: top 70 #a13c32 text;
}

.box-element {
	longshadow-text: bottom 120 #702c70 box;
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

MIT © [Dang Van Thanh](https://dangthanh.org)
