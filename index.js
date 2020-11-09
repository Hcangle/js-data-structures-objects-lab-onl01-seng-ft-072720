// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  retun Object.assign({}, driver, { [key]: value });
}