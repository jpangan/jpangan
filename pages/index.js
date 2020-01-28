import styled from '@emotion/styled';
import {Global, css} from '@emotion/core';
import Head from 'next/head';
import globalStyle from '../assets/styles/globalStyle';

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

function App() {
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

const getUA = args => ({
	ua: args.req
		? args.req.headers['user-agent']
		: navigator.userAgent
});

App.getInitialProps = async args => {
	const ua = getUA(args);
	console.log(ua);
	return {
		ua
	};
}

export default App;