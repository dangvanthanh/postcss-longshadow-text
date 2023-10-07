var G = (k, q) => () => (q || k((q = { exports: {} }).exports, q), q.exports)
var I = G((K, B) => {
	var H = function (k, { list: q }) {
		const v = q.space(k.value),
			g = v[0],
			F = parseInt(v[1], 10),
			j = v[2],
			E = v[3]
		let b = [],
			A = ''
		for (let f = 0; f < F; f++)
			if (g === 'top') b.push(`0 ${-f}px 0 ${j}`)
			else if (g === 'right') b.push(`${f}px 0 0 ${j}`)
			else if (g === 'bottom') b.push(`0 ${f}px 0 ${j}`)
			else if (g === 'left') b.push(`${-f}px 0 0 ${j}`)
			else if (g === 'top-left') b.push(`${-f}px ${-f}px 0 ${j}`)
			else if (g === 'top-right') b.push(`${f}px ${f}px 0 ${j}`)
			else if (g === 'bottom-left') b.push(`${-f}px ${f}px 0 ${j}`)
			else if (g === 'bottom-right') b.push(`${f}px ${f}px 0 ${j}`)
		if (((A = b.join(',')), E === 'text')) k.cloneBefore({ prop: 'text-shadow', value: A })
		else if (E === 'box') k.cloneBefore({ prop: 'box-shadow', value: A })
		k.remove()
	}
	B.exports = () => {
		return { postcssPlugin: 'postcss-longshadow-text', Declaration: { 'longshadow-text': H } }
	}
	B.exports.postcss = !0
})
export default I()
