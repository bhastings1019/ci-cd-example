import packageJson from '../package.json';

function main() {
  console.log(`${packageJson.description} version: ${packageJson.version}`);
}

function add(a, b) {
  return a + b;
}

main();