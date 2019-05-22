import { configure } from '@storybook/react';


// import 'react-chromatic/storybook-addon';


import 'storybook-chromatic';


import requireContext from 'require-context.macro';

import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);


