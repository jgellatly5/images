// create out image list component
// import react
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
	{ title: 'Pen', link: 'https://dummyimage.com/600x400' },
	{ title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
	{ title: 'Mug', link: 'https://dummyimage.com/600x400' }
];

// create our component
const ImageList = () => {
	return (
		<ul>
			<ImageDetail />
		</ul>
	);
};

// export our component
export default ImageList;