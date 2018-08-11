import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Multipart from "ipfs-api/src/utils/multipart";

it('renders without crashing', () => {
	new Multipart();
});
