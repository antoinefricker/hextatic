import './main.css';

import { app } from './demo/DemoApplication';

const main = async () => {
    await app.build();
    app.behave();
};

main();
