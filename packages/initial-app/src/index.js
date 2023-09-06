import _ from 'lodash';

import users from './users.json';
import Timer from './timer';

async function component() {
    const element = document.createElement('div');
    const timer = new Timer().start();
    _.sortBy(users, () => users.name);
    _.cloneDeep(users);
    timer.stop();
    element.innerHTML = _.join([
        '<h1>Webpack Code Splitting Experiment</h1>',
        '<p><strong>Sort Time:</strong>',
        timer.getDuration(),
        'ms',
        '</p>'
    ], ' ');
    return element;
}

document.body.appendChild(await component());
