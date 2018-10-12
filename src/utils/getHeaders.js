function getHeaders(containerClassName) {
  // 虽然可以获得h1-h6所有的header，但因为是导航内容用, 用到h2,h3就足够了
  const List = document.querySelectorAll(`.${containerClassName} h2,h3`);
  const result = [];
  List.forEach(item => {
    const id = item.id;
    const body = item.innerText;
    const tagName = item.tagName === 'H2'
      ? 'H2' : 'H3';
    result.push({ id, body, tagName });
  });
  return result;
}


export default getHeaders;