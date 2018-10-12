import moment from 'moment';

// 根据时间分类
function groupDataByYear(data) {
  const result = [];
  if (data.length) {

    let block = {};
    block.year = moment(data[0].createAt).format('YYYY');
    block.data = [];
    block.data.push(data[0]);

    for (let i = 1, len = data.length; i < len; i++) {
      const article = data[i];
      const year = moment(article.createAt).format('YYYY');
      if (year !== block.year) {
        result.push(block);
        block = {};
        block.year = year;
        block.data = [];
      }
      block.data.push(article);
    }
    result.push(block);
  }
  return result;
}

export default groupDataByYear;