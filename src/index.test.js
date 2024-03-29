const postcss = require('postcss')

const plugin = require('./')

function run(input, output) {
	let result = postcss([plugin]).process(input, { from: undefined })
	expect(result.css).toEqual(output)
	expect(result.warnings()).toHaveLength(0)
}

it('Text shadow in the top', () => {
	run(
		'.test { longshadow-text: top 10 #a13c32 text; }',
		'.test { text-shadow: 0 0px 0 #a13c32,0 -1px 0 #a13c32,0 -2px 0 #a13c32,0 -3px 0 #a13c32,0 -4px 0 #a13c32,0 -5px 0 #a13c32,0 -6px 0 #a13c32,0 -7px 0 #a13c32,0 -8px 0 #a13c32,0 -9px 0 #a13c32; }',
	)
})

it('Box shadow in the bottom left', () => {
	run(
		'.test { longshadow-text: bottom-left 70 3b6767 box; }',
		'.test { box-shadow: 0px 0px 0 3b6767,-1px 1px 0 3b6767,-2px 2px 0 3b6767,-3px 3px 0 3b6767,-4px 4px 0 3b6767,-5px 5px 0 3b6767,-6px 6px 0 3b6767,-7px 7px 0 3b6767,-8px 8px 0 3b6767,-9px 9px 0 3b6767,-10px 10px 0 3b6767,-11px 11px 0 3b6767,-12px 12px 0 3b6767,-13px 13px 0 3b6767,-14px 14px 0 3b6767,-15px 15px 0 3b6767,-16px 16px 0 3b6767,-17px 17px 0 3b6767,-18px 18px 0 3b6767,-19px 19px 0 3b6767,-20px 20px 0 3b6767,-21px 21px 0 3b6767,-22px 22px 0 3b6767,-23px 23px 0 3b6767,-24px 24px 0 3b6767,-25px 25px 0 3b6767,-26px 26px 0 3b6767,-27px 27px 0 3b6767,-28px 28px 0 3b6767,-29px 29px 0 3b6767,-30px 30px 0 3b6767,-31px 31px 0 3b6767,-32px 32px 0 3b6767,-33px 33px 0 3b6767,-34px 34px 0 3b6767,-35px 35px 0 3b6767,-36px 36px 0 3b6767,-37px 37px 0 3b6767,-38px 38px 0 3b6767,-39px 39px 0 3b6767,-40px 40px 0 3b6767,-41px 41px 0 3b6767,-42px 42px 0 3b6767,-43px 43px 0 3b6767,-44px 44px 0 3b6767,-45px 45px 0 3b6767,-46px 46px 0 3b6767,-47px 47px 0 3b6767,-48px 48px 0 3b6767,-49px 49px 0 3b6767,-50px 50px 0 3b6767,-51px 51px 0 3b6767,-52px 52px 0 3b6767,-53px 53px 0 3b6767,-54px 54px 0 3b6767,-55px 55px 0 3b6767,-56px 56px 0 3b6767,-57px 57px 0 3b6767,-58px 58px 0 3b6767,-59px 59px 0 3b6767,-60px 60px 0 3b6767,-61px 61px 0 3b6767,-62px 62px 0 3b6767,-63px 63px 0 3b6767,-64px 64px 0 3b6767,-65px 65px 0 3b6767,-66px 66px 0 3b6767,-67px 67px 0 3b6767,-68px 68px 0 3b6767,-69px 69px 0 3b6767; }',
	)
})
