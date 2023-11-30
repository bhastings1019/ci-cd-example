import packageJson from '../package.json';

function main() {
  console.log(`${packageJson.description} version: ${packageJson.version}`);
  
  add(1, 2);
}

function add(a, b) {
  return a + b;
}

main();