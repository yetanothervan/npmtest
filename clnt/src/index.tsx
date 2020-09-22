import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Comp1, Comp2 } from '@yetanothervan/liba';


const render = () => {    
    let elem = document.getElementById("root");
    ReactDOM.render(<div>
            <Comp1/>
            <Comp2/>
        </div>
    , elem);
};

render();