import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from '../../../components/Icon';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111
`;

const Navs = [
	{ route: '/', icon: 'home', text: '首页' },
	{ route: '/tags', icon: 'fenlei-copy', text: '分类' },
	{ route: '/about', icon: 'guanyuwomen', text: '关于' },
	{ route: '/admin', icon: 'guanlizhongxin', text: '管理' }
];

export default () => (
	<ul className="link-list">
		{Navs.map((item) => (
			<StyledLink to={item.route}>
				<li>
					<Icon icon={`icon-${item.icon}`}
        />
					{item.text}
				</li>
			</StyledLink>
		))}
	</ul>
);
