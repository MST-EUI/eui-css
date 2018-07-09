import React from 'react';

export default class Variables extends React.Component {
  render() {
    const data = [
      {
        enName: 'brand-primary',
        cnName: '主题色',
      },
      {
        enName: 'gray-darker',
        cnName: '中立色1',
      },
      {
        enName: 'gray-dark',
        cnName: '中立色2',
      },
      {
        enName: 'gray-light',
        cnName: '中立色3',
      },
      {
        enName: 'gray-lighter',
        cnName: '中立色4',
      },
      {
        enName: 'gray-lightest',
        cnName: '中立色5',
      },
      {
        enName: 'gray-almost-white',
        cnName: '中立色6',
      },
      {
        enName: 'gray-darker',
        cnName: '中立色1',
      },
    ];
    const eles = data.map(item => (
      <li className="block">
        <span className="label">{item.cnName}：</span>
        <span className={`demo-span ${item.enName}`} />
        <span className="label">变量名：</span>
        <span className={`demo-span ${item.enName}`} >${item.enName}</span>
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
