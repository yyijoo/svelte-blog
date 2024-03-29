/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				black: '#083087',
				white: '#fff8eb',
				gray: {
					700: '#08399b',
					800: '#08399b'
				},
				yellow: {
					700: '#08399b'
				},
				jblue: {
					300: '#C5D7FB',
					500: '#0d50dc'
				},
				jred: {
					500: '#d50000'
				},
				jpurple: {
					500: '#9c52f2'
				},
				jorange: {
					100: '#FDF1D9',
					500: '#ffab00'
				},
				// jblue: {
				// 	500: '#0d50dc',
				// 	900: '#08399b',
				// 	// 900: '#03153a'
				// }
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-bullets': theme('colors.black'),
						// these customizations are explained here https://youtu.be/-FzemNMcOGs
						blockquote: {
							borderLeft: '3px solid red',
							fontSize: 'inherit',
							fontStyle: 'inherit',
							fontWeight: 'medium'
						},
						'blockquote p:first-of-type::before': {
							content: ''
						},
						'blockquote p:last-of-type::after': {
							content: ''
						},

						'code::before': false,
						'code::after': false,
						code: {
							'border-radius': '0.25rem',
							padding: '0.15rem 0.3rem',
							borderWidth: '2px',
							borderColor: 'rgba(0,0,0,0.1)'
						},
						pre: {
							'border-radius': '0rem',
						},
						'a:hover': {
							color: '#9c52f2 !important',
							textDecoration: 'underline !important'
						},
						a: {
							color: '#083087',
							textDecoration: 'none'
						},
						'a code': {
							color: 'unset'
						},
						table: {
							overflow: 'hidden'
						},
						'li, ul, ol': {
							margin: 0
						},
						'li > img': {
							margin: 0,
							display: 'inline'
						},
						'ol > li::marker': {
							color: 'var(--tw-prose-body)'
						},
						'ul > li::marker': {
							color: 'var(--tw-prose-body)'
						},
						'ul > li > p': {
							marginTop: 0,
							marginBottom: 0,
						},
					}
				}
			})
		}
	},
	variants: {},
	plugins: [
		require('@tailwindcss/typography')
	]
};
