var postcss = require('postcss');

var pluginName = 'postcss-longshadow-text';

module.exports = postcss.plugin(pluginName, function (opts) {
	opts = opts || {};

	return function (css) {
		css.walkDecls('longshadow-text', function (decl) {
			var sizes = postcss.list.space(decl.value);
			var cssDirection = sizes[0];
			var cssSize = parseInt(sizes[1], 10);
			var cssColor = sizes[2];
			var cssType = sizes[3];
			var cssTextshadow = '';

			for (var i = 0; i < cssSize; i++) {
				if (cssDirection === 'top') {
					cssTextshadow += '0 ' + -i + 'px 0 ' + cssColor + ',';
				} else if (cssDirection === 'right') {
					cssTextshadow += i + 'px 0 0 ' + cssColor + ',';
				} else if (cssDirection === 'bottom') {
					cssTextshadow += '0 ' + i + 'px 0 ' + cssColor + ',';
				} else if (cssDirection === 'left') {
					cssTextshadow += -i + 'px 0 0 ' + cssColor + ',';
				} else if (cssDirection === 'top-left') {
					cssTextshadow += -i + 'px ' + -i + 'px 0 ' + cssColor + ',';
				} else if (cssDirection === 'top-right') {
					cssTextshadow += i + 'px ' + i + 'px 0 ' + cssColor + ',';
				} else if (cssDirection === 'bottom-left') {
					cssTextshadow += -i + 'px ' + i + 'px 0 ' + cssColor + ',';
				} else if (cssDirection === 'bottom-right') {
					cssTextshadow += i + 'px ' + i + 'px 0 ' + cssColor + ',';
				}
			}

			cssTextshadow = cssTextshadow.slice(0, -1);

			if (cssType === 'text') {
				decl.cloneBefore({
					prop: 'text-shadow', value: cssTextshadow
				});
			} else if (cssType === 'box') {
				decl.cloneBefore({
					prop: 'box-shadow', value: cssTextshadow
				});
			}
			decl.remove();
		});
	};
});
