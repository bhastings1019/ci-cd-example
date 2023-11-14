import packageJson from '../package.json';

function main() {
  console.log(`${packageJson.description} version: ${packageJson.version}`);
}

main();