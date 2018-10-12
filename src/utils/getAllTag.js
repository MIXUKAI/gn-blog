function getTags(data) {
  const result = [];
  data.forEach(item => {
    const tags = item.tags;
    tags.forEach(tag => {
      if (result.indexOf(tag) === -1) {
        result.push(tag);
      }
    })
  });
  return result;
}

export default getTags;