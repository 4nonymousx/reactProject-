import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


main();
function main(){
    var div = document.createElement('div');
    div.setAttribute("id","todoapp");
    document.body.appendChild(div);
    ReactDOM.render(<App />,div);
    registerServiceWorker();

}
//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
