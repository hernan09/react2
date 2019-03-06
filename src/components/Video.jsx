import React from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

export default props => {
  return (<div>
      <Player autoPlay="true" loop fluid="false" width="100%" height="50%">
          <source src="imagenes/ilidan.mp4" />
          <ControlBar autoHide={true}/>
      <BigPlayButton position="center" />
      </Player>
    
  </div>

  );
};