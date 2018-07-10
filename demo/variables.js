import React from 'react';

export default class Variables extends React.Component {
  render() {
    const data = [
      {
        enName: 'brand-primary',
        cnName: '主题色',
        rgb: '#2E86FF',
      },
      {
        enName: 'gray-darker',
        cnName: '中立色1',
        rgb: '#434F59',
      },
      {
        enName: 'gray-dark',
        cnName: '中立色2',
        rgb: '#667480',
      },
      {
        enName: 'gray-light',
        cnName: '中立色3',
        rgb: '#86939D',
      },
      {
        enName: 'gray-lighter',
        cnName: '中立色4',
        rgb: '#B6C2CC',
      },
      {
        enName: 'gray-lightest',
        cnName: '中立色5',
        rgb: '#DFE3EC',
      },
      {
        enName: 'gray-almost-white',
        cnName: '中立色6',
        rgb: '#F8F9FC',
      },
    ];
    const eles = data.map(item => (
      <li className="block">
        <span className="label">{item.cnName}：</span>
        <span className={`demo-span ${item.enName}`} />
        <span className="label">变量名：</span>
        <span className={`demo-span ${item.enName}`} >${item.enName}</span>
        <span className="label">RGB 值：</span>
        <span className={`demo-span ${item.enName}`} >{item.rgb}</span>
      </li>
    ));
    return (
      <div className="group">
        <h2>变量集合</h2>
        <div className="content">
          <ul>
            {eles}
          </ul>
        </div>
      </div>
    );
  }
}
