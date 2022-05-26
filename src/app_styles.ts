import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	overflow: hidden;
	width: 100vw;
`

export const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 1.75rem;
	color: ${(props) => props.theme.colors.gray_2};

	h2 {
		font-size: 1.4rem;
		font-weight: 500;
		letter-spacing: 0.24em;
		padding: 1.5rem 3rem;
	}
	ul {
		font-size: 1.125rem;
		padding: 1.5rem 3rem;
		display: flex;
		list-style: none;

		li {
			padding: 0.5rem;
			margin: 0 0.5rem;
			cursor: pointer;
		}
	}
`

export const HomeContent = styled(motion.span)`
	font-size: 10rem;
	font-weight: bold;
	color: transparent;
	width: 100vw;
	height: 100vh;

	::after {
		content: attr(data-text);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		left: 0;
		background: linear-gradient(
			to right,
			#96cdfb 5%,
			#f8bd96 15%,
			#f8bd96 25%,
			#f28fad 35%,
			#f28fad 45%,
			#ddb6f2 55%,
			#ddb6f2 65%,
			#abe9b3 75%,
			#abe9b3 85%,
			#96cdfb 95%
		);
		background-size: 200%;
		background-clip: text;
		-webkit-background-clip: text;
		background-position: 0%;
		animation: font 3s linear infinite;
		transform: skewX(-12deg);
	}

	@keyframes font {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 200%;
		}
	}
`

export const SectWrapper = styled(motion.div)`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0.85;
`

const SectContainer = styled.section`
	position: relative;
	text-align: left;
	width: 65vw;
	margin: 0 auto;
	border: 2px solid ${(props) => props.theme.colors.black_4};
	border-radius: 0.5rem;
	padding: 2rem;

	h2 {
		font-size: 1.5rem;
		line-height: 2rem;
		margin-bottom: 1rem;
	}
`

export const CursosContent = styled(SectContainer)`
	background-image: linear-gradient(
		45deg,
		${(props) => props.theme.colors.mauve} 0%,
		${(props) => props.theme.colors.teal} 50%,
		${(props) => props.theme.colors.yellow} 75%,
		${(props) => props.theme.colors.green} 90%
	);

	article {
		margin-left: 1rem;

		h3 {
			font-size: 1.4rem;
			font-weight: 500;
			letter-spacing: 0.24em;
			margin-bottom: 1.5rem;
		}

		p {
			margin: 0.5rem;
		}

		h4 {
			margin: 1rem 0 0 0.5rem;
		}

		ul {
			margin: 0.5rem 2rem;
		}
	}
`

export const ProjetosContent = styled(SectContainer)`
	background-image: linear-gradient(
		-45deg,
		${(props) => props.theme.colors.pink} 0%,
		${(props) => props.theme.colors.peach} 50%,
		${(props) => props.theme.colors.sky} 75%,
		${(props) => props.theme.colors.red} 90%
	);

	ul {
		margin: 0.5rem 1rem;

		h3 {
			font-size: 1.4rem;
			font-weight: 500;
			letter-spacing: 0.24em;
			margin-bottom: 1.5rem;
		}

		li {
			margin-left: 1.5rem;
		}
	}
`

export const OrcamentosContent = styled(SectContainer)`
	background-image: linear-gradient(
		45deg,
		${(props) => props.theme.colors.lavander} 0%,
		${(props) => props.theme.colors.maroon} 50%,
		${(props) => props.theme.colors.green} 75%,
		${(props) => props.theme.colors.gray_1} 90%
	);

	article {
		margin-left: 1rem;

		h3 {
			font-size: 1.4rem;
			font-weight: 500;
			margin-bottom: 0.5rem;
		}
		p {
			text-indent: 2ch;
		}
		strong {
			margin-left: 2ch;
		}

		:nth-child(3) {
			margin-top: 1rem;
		}
	}
`

export const Footer = styled.footer`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 1rem 30vw;
	background-color: ${(props) => props.theme.colors.black_4};
	opacity: 0.85;
	color: ${(props) => props.theme.colors.white};

	svg {
		fill: ${(props) => props.theme.colors.white};
	}
`
