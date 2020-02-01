import styled from '@emotion/styled';
import {Global, css} from '@emotion/core';
import Head from 'next/head';
import globalStyle from '../assets/styles/globalStyle';

import Desktop from '../components/Layouts/Desktop';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	h1 {
		display: flex;
		flex-direction: column;
		font-family: monospace, arial;
    font-size: 100px;
    line-height: 80px;
    color: #70ae98;
	}
`;

export default function App() {
	return <div>
		<Head>Johneric Pangan</Head>
		<Wrapper>
			<h1>
				<span>hello</span>
				<span>there.</span>
			</h1>
		</Wrapper>

		<Global styles={css`${globalStyle}`}></Global>
	</div>
}