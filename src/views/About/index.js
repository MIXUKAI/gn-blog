import React from 'react';
import './About.scss';

export default function About() {
  document.title = '关于';
  return (
    <div className="about">
      <div className="me item">
        <h2>个人介绍</h2>
        <p>大四，计算机专业，会点前端</p>
        <p>喜欢宅，动漫，电影，电视剧通吃~ </p>
        <p>然后必须是一个乐观，热爱生活的人</p>
        <br/>
        <p>邮箱地址: <a href="mailto:mixukai96@gmail.com" className="link">mixukai96@gmail.com</a></p>
      </div>
      <div className="site item">
        <h2>关于本站</h2>
        <p>这个个人博客，是我选择用React作为前端框架，并用Koa2提供Restful API服务搭建的，建站的动机，一是因为之前找不到实习闲置在家，就想给自己找点事情来做顺便丰富下简历。
          另外我觉得这也是一个不错的机会，作为一个小型的项目来供自己学习React和Node。
        </p>
        <p>
          博客风格的话，我个人是还是比较喜欢简约的，只要注重内容即可。
          本来也是朝这个方向进行的，但是搭建过程总是在跑偏233，然后我又拉回，反反复复，最终变成了这样。可能和原先预期的有些差别，不过因为这是自己一点一滴搭建出来的，我还是选择热爱~
        </p>
        <p>
          因为要开始正式寻找实习了，限于时间的原因我暂时只能进行到这里，我知道有许多不足, 当然后期我会不断完善，不论是功能还是样式，如果您也有啥想法请指出，我会悉心听取并改进的~
        </p>
      </div>
    </div>
  );
};
