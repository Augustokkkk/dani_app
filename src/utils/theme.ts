import { createGlobalStyle } from 'styled-components'

export const theme = {
	colors: {
		flamingo: '#F2CDCD',
		mauve: '#DDB6F2',
		pink: '#F5C2E7',
		maroon: '#E8A2AF',
		red: '#F28FAD',
		peach: '#F8BD96',
		yellow: '#FAE3B0',
		green: '#ABE9B3',
		teal: '#B5E8E0',
		blue: '#96CDFB',
		sky: '#89DCEB',
		black_0: '#161320',
		black_1: '#1A1826',
		black_2: '#1E1E2E',
		black_3: '#302D41',
		black_4: '#575268',
		gray_0: '#6E6C7E',
		gray_1: '#988BA2',
		gray_2: '#C3BAC6',
		white: '#D9E0EE',
		lavander: '#C9CBFF',
		rosewater: '#F5E0DC',
	},
}

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		scroll-behavior: smooth;
	}
	body {
		font-family: 'Montserrat', sans-serif;
		background-color: ${({ theme }) => theme.colors.rosewater};
		color: ${({ theme }) => theme.colors.black_3};
		overflow-x: hidden;
	}
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black_3};
	}
	body {
		--s: 25vmin;
		--p: calc(var(--s) / 2);
		--c1: ${({ theme }) => theme.colors.teal};
		--c2: ${({ theme }) => theme.colors.mauve};
		--c3: ${({ theme }) => theme.colors.rosewater};
		--bg: var(--c3);
		--d: 4000ms;
		--e: cubic-bezier(0.76, 0, 0.24, 1);
		
		background-color: var(--bg);
		background-image:
			linear-gradient(45deg, var(--c1) 25%, transparent 25%),
			linear-gradient(-45deg, var(--c1) 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, var(--c2) 75%),
			linear-gradient(-45deg, transparent 75%, var(--c2) 75%);
		background-size: var(--s) var(--s);
		background-position: 
			calc(var(--p) *	1) calc(var(--p) *	0),
			calc(var(--p) * -1) calc(var(--p) *	1),
			calc(var(--p) *	1) calc(var(--p) * -1),
			calc(var(--p) * -1) calc(var(--p) *	0);
		animation: color var(--d) var(--e) infinite,
		position var(--d) var(--e) infinite;
	}

	@keyframes color {
		0%, 25% {
			--bg: var(--c3);
		}
		26%, 50% {
			--bg: var(--c1);
		}
		51%, 75% {
			--bg: var(--c3);
		}
		76%, 100% {
			--bg: var(--c2);
		}
	}

	@keyframes position {
		0% {
			background-position:
				calc(var(--p) * 1) calc(var(--p) * 0),
				calc(var(--p) * -1) calc(var(--p) *	1),
				calc(var(--p) *	1) calc(var(--p) * -1),
				calc(var(--p) * -1) calc(var(--p) *	0);
		}
		25% {
			background-position:
				calc(var(--p) *	1) calc(var(--p) *		4),
				calc(var(--p) * -1) calc(var(--p) *		5),
				calc(var(--p) *	1) calc(var(--p) *		3),
				calc(var(--p) * -1) calc(var(--p) *		4);
		}
		50% {
			background-position:
			calc(var(--p) *		3) calc(var(--p) * 8),
			calc(var(--p) * -3) calc(var(--p) * 9),
			calc(var(--p) *		2) calc(var(--p) * 7),
			calc(var(--p) * -2) calc(var(--p) * 8);
		}
		75% {
			background-position:
				calc(var(--p) *		3) calc(var(--p) * 12),
				calc(var(--p) * -3) calc(var(--p) * 13),
				calc(var(--p) *		2) calc(var(--p) * 11),
				calc(var(--p) * -2) calc(var(--p) * 12);
		}
		100% {				
			background-position:
			calc(var(--p) *		5) calc(var(--p) * 16),
			calc(var(--p) * -5) calc(var(--p) * 17),
			calc(var(--p) *		5) calc(var(--p) * 15),
			calc(var(--p) * -5) calc(var(--p) * 16);
		}
	}

	@media (prefers-reduced-motion) {
		body {
			animation: none;
		}
	}
`
