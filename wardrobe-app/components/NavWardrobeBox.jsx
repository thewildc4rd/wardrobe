import React, { useState } from 'react';

const NavWardrobeBox = ({ lidStyle, boxStyle, text, alternateRotate = false }) => {
	const [boxHover, setBoxHover] = useState(false);

	return (
		<>
			<div
				className={`h-2 w-[67%] ${lidStyle} flex items-center justify-center ${
					boxHover ? `${alternateRotate ? '-rotate-3' : 'rotate-3'} -translate-y-3` : ''
				} transition-all`}
			/>
			<div
				className={`h-1/2 w-[64%] ${boxStyle} flex items-center justify-center`}
				onMouseOver={() => setBoxHover(true)}
				onMouseOut={() => setBoxHover(false)}
			>
				<div className={`bg-white px-4 rounded-sm text-lg ${boxHover ? '' : ''} transition-all`}>
					{text}
				</div>
			</div>
		</>
	);
};

export default NavWardrobeBox;
