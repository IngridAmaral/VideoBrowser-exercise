import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import youtube from './apis/youtube';
import VideoDetail from './components/VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null }
  
  componentDidMount() {
    this.handleSubmit('buildings')
  }

  handleSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]})
  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video})
  }
  
  render() { 
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.handleSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList 
              videoClick={this.handleVideoSelect} 
              videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
