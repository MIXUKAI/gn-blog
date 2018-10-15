function getTags(data) {
  const allTags = data.reduce((prev, cur) => {
    return prev.concat(cur.tags);
  },[]);
  return [...new Set(allTags)];
}

export default getTags;