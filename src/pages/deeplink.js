import React from 'react';

const Deeplink = () => {
  return(
    <div>
  <div style={{BackGroundColor : "#FFFFFFF"}}>
    <a href='app://open.my.app'>
        <button >Just Button</button>
    </a>
    <a href='app://open.my.app?id=123456789'>
        <button >Button wth param</button>
    </a>
    </div>
    </div>
  )

};

export default Deeplink;