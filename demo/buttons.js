import React from 'react';

export default class Buttons extends React.Component {
  render() {
    const data = [
      {
        enName: 'eui-button-primary',
        cnName: '按钮1',
      },
      {
        enName: 'eui-button-secondary',
        cnName: '按钮2',
      },
      {
        enName: 'eui-button-white-primary',
        cnName: '按钮3',
      },
      {
        enName: 'eui-button-white-secondary',
        cnName: '按钮4',
      },
    ];
    const eles = data.map(item => (
      <li className="block">
        <span className="label">{item.cnName}：</span>
        <span className={`demo-span-button eui-button ${item.enName}`} />
        <span className="label">样式名：</span>
        <span className={`demo-span-button eui-button ${item.enName}`} >{item.enName}</span>
      </li>
    ));
    return (
      <div className="group">
        <h2>按钮样式集合</h2>
        <div className="content">
          <ul>
            {eles}
          </ul>
        </div>
      </div>
    );
  }
}
