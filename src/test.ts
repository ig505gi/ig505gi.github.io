setTimeout(() => {
  const ele = document.createElement('a');
  ele.href = 'https://www.baidu.com';
  ele.innerText = 'baidu';
  document.body.appendChild(ele);
  const aElement = document.getElementById('a');
}, 2000)