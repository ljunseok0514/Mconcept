/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.jsx'],
	theme: {
		screens: {
			// 혹시 몰라서 넣어놨음. (따로 설정해주면 좋을듯함)
			mobile: {min: '320px', max: '767px'},
			tablet: {min: '768px', max: '1279px'},
			desktop: {min: '1280px'},
			contents: {max: '1280px'},
		},

		extend: {
			fontFamily: {
				이름: ['ProximaNova-Semibold'],
				이름2: ['NotoSansKR-Medium'],
			},
			colors: {
        // 임의로 설정해놓은 값.
				transparent: 'transparent',
        black: '#000000',
        white: '#ffffff',
				primary: '#000',
				secondary: '#fff',
        content: '#333333',
        apple:'#523532',
			},
      fontSize: {
        sm: '0.7501875162124634rem', // 12px
        base: '1rem', // 16px
        lg: '1.3329999446868896rem', // 21px
        xl: '1.7768750190734863rem', // 28px
        '2xl': '2.3685624599456787rem', // 37px
        '3xl': '3.1573123931884766rem', // 50px
      },
      borderRadius: {
        none: '0',
        xs: '0.0625rem',
        sm: '0.25rem',
        default: '0.3125rem',
        lg: '0.625rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.0625rem',
      },
			backgroundImage: {},
		},
	},
	plugins: [],
};
