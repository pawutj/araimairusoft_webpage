import React from 'react';

const Deeplink = () => {
  return(
    <div>
  <div style={{BackGroundColor : "#FFFFFFF"}}>
    <a href='app://open.my.app'>
        <button >Just Button</button>
    </a>
    <a href='market://'>
        <button >Market Button</button>
    </a>
    </div>
    </div>
  )

};

export default Deeplink;