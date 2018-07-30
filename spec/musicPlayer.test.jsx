import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';
import 'jest-styled-components'

import MusicPlayer from '../client/src/components/musicPlayer';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

Enzyme.configure({ adapter: new Adapter() });

describe('<MusicPlayer />', () => {
  it('shallow renders correctly', () => {
    const wrapper = shallow(
      <MusicPlayer />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('MusicPlayer contains an artist component', () => {
    const wrapper = mount(
      <MusicPlayer />
    );
    expect(wrapper).toMatchSnapshot();
  });

it('Should load the page with the music initially not be playing', () => {
    const wrapper = shallow(
      <MusicPlayer />
    );
    const playState = wrapper.state().play;
    expect(playState).toEqual(false);
  });

it('Should load the page with the modal not showing', () => {
    const wrapper = shallow(
      <MusicPlayer />
    );
    const modalState = wrapper.state().showModal;
    expect(modalState).toEqual(false);
  });
});
// import puppeteer from 'puppeteer';

// const pageUrl = 'http://localhost:6969/';

// let page;
// let browser;
// const width = 1280;
// const height = 720;

// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//     args: [`--window-size=${width},${height}`]
//   });
//   page = await browser.newPage();
//   await page.setViewport({ width, height });
// });

// afterAll(() => {
//   browser.close();
// });