import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component{
    render(){
        const { videos, videoClick } = this.props
        const renderedList = videos.map((video) => {
            return <VideoItem 
                        key={video.id.videoId} 
                        videoClick={videoClick} 
                        video={video} />
        })
        return (
            <div className='ui divided list'>{renderedList}</div>
        )
    }
}
 
export default VideoList