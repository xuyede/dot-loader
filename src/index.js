const tpl = require('./tpl/index.dot');

const $app = document.getElementById('app');
// console.log('index')
$app.innerHTML = tpl({
  name: 'xuyede'
});