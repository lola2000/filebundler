const files = new Map();
const entry = `
import message from './message.js';

console.log(message);`;
const message = `
import {name} from './name.js';

export default hello ' + name +' !';`;
const name = `
export const name = 'world'`;
files.set("./entry", entry);
files.set("./message", message);
files.set(".name", name);

export default files;
