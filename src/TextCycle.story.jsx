import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextCycle from './TextCycle';

const oneItem = ['So Lonely'];
const twoItems = ['One', 'Two-Dozen', 'Three-Dozen-Dozen'];
const demoItems = ['Friends', 'Family', 'Strangers', 'Weird Uncles']
const reactElements = [<h1>One</h1>, <h2>Two</h2>, <h3>Three</h3>];

storiesOf('TextCycle', module)
  .addStyles(`
    .container {
      display: flex;
      justify-content: center;
      background: #999;
    }

    .demo {
      display: flex;
      flex-direction: column;
      justify-content: center;

    }

    .large {
      font-size: 3em;
      color: white;
      font-family: sans-serif;
    }

    .bg {
      border-radius: 0 0 10px 10px;
      background: rgba(0, 0, 0, 0.6);
    }

    .title  {
      text-align: center;
      margin: 0;
      padding: 5px 0;
      font-weight: 200;
    }
  `)
  .add('basic', () => (
    <div className="container">
      <TextCycle items={twoItems} />
    </div>
  ))
  .add('custom className', () => (
    <div className="container">
      <TextCycle className="large" items={twoItems} />
    </div>
  ))
  .add('custom bgClassName', () => (
    <div className="container">
      <TextCycle className="large" bgClassName="bg" items={twoItems} />
    </div>
  ))
  .add('one item', () => (
    <div className="container">
      <TextCycle items={oneItem} />
    </div>
  ))
  .add('no items', () => (
    <div className="container">
      <TextCycle items={[]} />
    </div>
  ))
  .add('react elements', () => (
    <div className="container">
      <TextCycle items={reactElements} />
    </div>
  ))
  .add('demo gif', () => (
    <div className="demo">
      <h1 className="large bg title">Our app is perfect for</h1>
      <TextCycle className="large" bgClassName="bg" items={demoItems} />
    </div>
  )).autoTest(() => require('./TextCycle.test.jsx'));
