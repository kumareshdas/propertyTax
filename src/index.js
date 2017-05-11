import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import FloorType from './components/contents/FloorType';
import WallType from './components/contents/WallType';
import RoofType from './components/contents/RoofType';

import { BrowserRouter, Route ,Router} from 'react-router-dom';


ReactDOM.render((
     <BrowserRouter>

     <div>
          <App>

            <Route path="/floortype" component={FloorType} />
            <Route path="/walltype" component={WallType} />
            <Route path="/rooftype" component={RoofType} />

          </App>
      </div>
     </BrowserRouter>
     ),
     document.getElementById('root')
);
