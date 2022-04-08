import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Styles/Typography',
	// component: Table,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
};

const Headings = () => {
	return [1, 2, 3, 4, 5, 6].map((e) => (
		<div className="my-5" key={e}>
			<code>{`<h${e}>`}</code>
			{React.createElement(`h${e}`, {}, `Heading ${e}`)}
		</div>
	));
};

export const Hierarchy = () => {
	return (
		<>
			<h1>Hierarchy</h1>

			<Headings />

			<code>
				{`<h3>
				Heading 3 <small class="text-muted">with muted text</small>
			</h3>`}
			</code>
			<h3>
				Heading 3 <small className="text-muted">with muted text</small>
			</h3>

			<code>
				{`<p className="lead">
				Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>`}
			</code>
			<p className="lead">
				Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
			</p>
		</>
	);
};

export const Classes = () => {
	return (
		<>
			<h1>Utility Classes</h1>

			<h2>Font Weights</h2>
			{[100, 200, 300, 400, 500, 600, 700, 800, 900].map((e) => (
				<div className="my-5" key={e}>
					<code>{`.fw-${e}`}</code>
					<p className={`fw-${e}`} style={{ fontSize: '2rem' }}>
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
						auctor.
					</p>
				</div>
			))}
		</>
	);
};
