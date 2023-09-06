import sortBy from 'lodash/sortBy';
import cloneDeep from 'lodash/cloneDeep';
import join from 'lodash/join';

import users from './users.json';
import Timer from './timer';

async function component() {
    const element = document.createElement('div');
    const timer = new Timer().start();
    sortBy(users, () => users.name);
    cloneDeep(users);
    timer.stop();
    element.innerHTML = join([
        '<h1>Webpack Code Splitting Experiment</h1>',
        '<p><strong>Sort Time:</strong>',
        timer.getDuration(),
        'ms',
        '</p>'
    ], ' ');
    return element;
}

document.body.appendChild(await component());
