/* eslint-env mocha */
import React from 'react';
import createMockRaf from 'mock-raf';
import {expect} from 'chai';
import {useFakeTimers} from 'sinon';
import {shallow, mount} from 'enzyme';
import TextCarousel, {AnimContainer} from './TextCarousel';

const mockRaf = createMockRaf();
const multipleTestItems = ['One', 'Two', 'Three'];
const visibleElement = (wrapper) => wrapper.find(AnimContainer).first();

describe('TextCarousel', () => {
  let clock;
  beforeEach(function() {
    clock = useFakeTimers();
    global.requestAnimationFrame = mockRaf.raf;
  });

  afterEach(function() {
    clock.restore();
  });

  it('starts with the first item in the list', () => {
    const wrapper = shallow(<TextCarousel items={multipleTestItems}/>);

    expect(visibleElement(wrapper).shallow().text()).to.equal(multipleTestItems[0]);
  });

  it('animates to the second item after duration has elapsed', () => {
    const duration = 1000;
    const wrapper = mount(<TextCarousel items={multipleTestItems} duration={duration}/>);

    clock.tick(duration + 10);
    mockRaf.step();

    expect(visibleElement(wrapper).text()).to.equal(multipleTestItems[1]);
  });
});

module.exports = 'TextCarousel';
