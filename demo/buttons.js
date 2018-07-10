import React from 'react';

export default class Buttons extends React.Component {
  render() {
    const data = [
      {
        enName: 'eui-button-primary',
      },
      {
        enName: 'eui-button-secondary',
      },
      {
        enName: 'eui-button-white-primary',
      },
      {
        enName: 'eui-button-white-secondary',
      },
      {
        enName: 'eui-button-disabled',
      },
    ];
    const eles = data.map((item, index) => (
      <li className="block" key={item.enName}>
        <span className="label">按钮{index + 1}：</span>
        <span className={`demo-span-button eui-button ${item.enName}`} />
        <span className="label">样式名：</span>
        <span className={`demo-span-button eui-button ${item.enName}`} >{item.enName}</span>
      </li>
    ));
    return (
      <div className="group">
        <h2>按钮颜色集合</h2>
        <div className="content">
          <ul>
            {eles}
          </ul>
        </div>
      </div>
    );
  }
}
