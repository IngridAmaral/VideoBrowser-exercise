import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component{
    render(){
        const { video, videoClick } = this.props
        return (
            <div onClick={() => videoClick(video)} className='video-item item'>
                <img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.medium.url} />
                <div className='content'>
                    <div className='header'>{video.snippet.title}</div>
                </div>
            </div>
        )
    }
}
 
export default VideoItem