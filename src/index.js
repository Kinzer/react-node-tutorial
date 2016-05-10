//==================
// Here we import the react component again and then
// the new dependencie reactdom that actually renders
// the application onto the screen.
//==================
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

//==================
// This command actually renders the component into
// the element with the id #app which we added in
// the index.html file.
//==================
ReactDOM.render(<App />, document.querySelector('#app'));
