import React from 'react';
import VideoS from '../../image/video/videos/video-section.mp4';

const Video = () => {
	return (
		<div id="video" className="mt-12">
			<div class="video-wrapper flex justify-center items-center">
				<video autoPlay muted loop>
					<source src={VideoS} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default Video;
