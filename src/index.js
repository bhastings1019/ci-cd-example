import packageJson from '../package.json';
import { add } from './math.js';

function main() {
  console.log(`${packageJson.description} version: ${packageJson.version}`);
  
  add(1, 2);
}

main();