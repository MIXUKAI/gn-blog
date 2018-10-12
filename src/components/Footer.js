import React from 'react';

const footerStyle = {
  width: '100%',
  backgroundColor: '#fff',
  overflow: 'hidden',
  padding: '35px 0'
}

const container = {
  maxWidth: '960px',
  margin: '0 auto',
  overflow: 'hidden'
}

const metaItem = {
  float: 'left',
  width: '33.3333%',
  padding: '20px 30px'
}

const itemTitleStyle = {
  fontSize: '15px',
  padding: '0 0 10px 0',
  color: '#5f5f5f',
};
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="footer-container" style={container}>
        <div className="meta-item" style={metaItem}>
          <h4 className="item-title" style={itemTitleStyle}>瓜牛的blog</h4>
          <p>This Blog Powered by Guanine</p>
          <p>
            &copy;2018 mixukai
          </p>
        </div>
        <div className="meta-item" style={metaItem}>
          <h4 className="item-title" style={itemTitleStyle}>最新发布</h4>
          <ul className="lastest-push-list">
            <li><a href="https://www.zuozuovera.com/archives/1565/">AI与安全的恩怨情仇五部曲「1」Misuse AI</a></li>
            <li><a href="https://www.zuozuovera.com/archives/1535/">分享 | 用机器学习解决问题的实践</a></li>
            <li><a href="https://www.zuozuovera.com/archives/1531/">何处惹尘埃——大三下学期总结</a></li>
            <li><a href="https://www.zuozuovera.com/archives/1516/">Intel分享 | 算法狗的大学进修之路-薇拉</a></li>
            <li><a href="https://www.zuozuovera.com/archives/1507/">对万维网、语义网、知识图谱、图计算和Web3.0的一点思考</a></li>
            <li><a href="https://www.zuozuovera.com/archives/1505/">Typecho赞赏功能实现</a></li>
            <li><a href="https://www.zuozuovera.com/archives/1495/">英语 | 口语练习技巧汇总</a></li>
          </ul>
        </div>
        <div className="meta-item" style={metaItem}>
          <h4 className="item-title" style={itemTitleStyle}>最新评论</h4>
          <ul className="lastest-push-list">
            <li><a href="https://www.zuozuovera.com/archives/1196/#comment-905">熊猫 : https://github.com/ylq...</a></li>
            <li><a href="https://www.zuozuovera.com/archives/1196/#comment-904">左左薇拉 : 没有用过，有用过的朋友可以评价看看</a></li>
            <li><a href="https://www.zuozuovera.com/archives/1505/#comment-902">左左薇拉 : 本来就是故意让它不要随着屏幕滑动的呀……</a></li>
            <li><a href="https://www.zuozuovera.com/archives/1162/#comment-901">左左薇拉 : 关于时间管理的细节我曾经在这个知乎回答里介绍...</a></li>
            <li><a href="https://www.zuozuovera.com/archives/1162/#comment-900">1263179358@q : 作者，可以写一篇时间管理和规划方面的文章吗？...</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer