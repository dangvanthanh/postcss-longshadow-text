function process(decl, { list }) {
	const sizes = list.space(decl.value)
	const cssDirection = sizes[0]
	const cssSize = parseInt(sizes[1], 10)
	const cssColor = sizes[2]
	const cssType = sizes[3]
	let cssShadows = []
	let cssTextshadow = ''

	for (let i = 0; i < cssSize; i++) {
		if (cssDirection === 'top') {
			cssShadows.push(`0 ${-i}px 0 ${cssColor}`)
		} else if (cssDirection === 'right') {
			cssShadows.push(`${i}px 0 0 ${cssColor}`)
		} else if (cssDirection === 'bottom') {
			cssShadows.push(`0 ${i}px 0 ${cssColor}`)
		} else if (cssDirection === 'left') {
			cssShadows.push(`${-i}px 0 0 ${cssColor}`)
		} else if (cssDirection === 'top-left') {
			cssShadows.push(`${-i}px ${-i}px 0 ${cssColor}`)
		} else if (cssDirection === 'top-right') {
			cssShadows.push(`${i}px ${i}px 0 ${cssColor}`)
		} else if (cssDirection === 'bottom-left') {
			cssShadows.push(`${-i}px ${i}px 0 ${cssColor}`)
		} else if (cssDirection === 'bottom-right') {
			cssShadows.push(`${i}px ${i}px 0 ${cssColor}`)
		}
	}

	cssTextshadow = cssShadows.join(',')

	if (cssType === 'text') {
		decl.cloneBefore({
			prop: 'text-shadow',
			value: cssTextshadow,
		})
	} else if (cssType === 'box') {
		decl.cloneBefore({
			prop: 'box-shadow',
			value: cssTextshadow,
		})
	}

	decl.remove()
}

module.exports = () => {
	return {
		postcssPlugin: 'postcss-longshadow-text',
		Declaration: {
			'longshadow-text': process,
		},
	}
}

module.exports.postcss = true
