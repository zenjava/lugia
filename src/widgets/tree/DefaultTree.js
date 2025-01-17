/**
 *
 * create by szfeng
 *
 */
import * as React from 'react';
import { Tree, Theme } from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts';

const data = [
  { key: '1', title: '选项 1' },
  { key: '1.1', title: '选项 1.1', pid: '1', path: '1' },
  { key: '1.1.1', title: '选项 1.1.1', pid: '1.1', path: '1/1.1', isLeaf: true },
  {
    key: '1.1.2',
    title: '选项 1.1.2',
    pid: '1.1',
    path: '1/1.1',
    isLeaf: true,
    notCanSelect: true
  },

  { key: '1.2', title: '选项 1.2', pid: '1', path: '1' },
  { key: '1.2.1', title: '选项 1.2.1', pid: '1.2', path: '1/1.2', isLeaf: true },
  { key: '1.2.2', title: '选项 1.2.2', pid: '1.2', path: '1/1.2' },
  {
    key: '1.2.2.1',
    title: '选项 1.2.2.1',
    pid: '1.2.2',
    path: '1/1.2/1.2.2',
    isLeaf: true
  },

  {
    key: '1.2.2.2',
    title: '选项 1.2.2.2',
    pid: '1.2.2',
    path: '1/1.2/1.2.2',
    isLeaf: true
  },

  { key: '1.3', title: '选项 1.3', pid: '1', path: '1', isLeaf: true },

  { key: '2', title: '选项 2' },
  { key: '2.1', title: '选项 2.1', pid: '2', path: '2', isLeaf: true },
  { key: '2.2', title: '选项 2.2', pid: '2', path: '2', isLeaf: true }
];

export default class DefaultTree extends React.Component<Object, Object> {
  render() {
    const config = {
      [Widget.Tree]: {
        width: 320
      }
    };
    return (
      <Theme config={config}>
        <Tree data={data} igronSelectField={'notCanSelect'} autoHeight />
      </Theme>
    );
  }
}
