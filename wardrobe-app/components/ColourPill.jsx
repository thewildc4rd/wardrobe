import React from 'react';
import { colours as colourDict } from '@/utils/colourUtils';

const ColourPill = ({ colour }) => {
	let bg = colourDict[colour]?.bg ?? 'bg-brown-darkest/15';
	let text = colourDict[colour]?.text;
	let hover = colourDict[colour]?.hover ?? 'hover:bg-brown-darkest/5';
	let border = 'border-2 border-brown-darkest';

	return (
		<div
			className={`${bg} ${text} ${hover} flex items-center px-4 py-[1px] rounded-full text-sm transition-all cursor-default`}
		>
			{colour}
		</div>
	);
};

export default ColourPill;
