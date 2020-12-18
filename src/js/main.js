import './slider';
import modals from '../js/modules/modals';
import tabs from '../js/modules/tabs';
import forms from '../js/modules/forms';
import changeModalState from '../js/modules/changeModalState';
import timer from '../js/modules/timer';
import images from '../js/modules/images';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let modalState = {};
  const dedline = '01-01-2021';
  // const dedline = '2021-01-01';

  changeModalState(modalState);
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs(
    '.decoration_slider',
    '.no_click',
    '.decoration_content > div > div',
    'after_click'
  );
  tabs(
    '.balcon_icons',
    '.balcon_icons_img',
    '.big_img > img',
    'do_image_more',
    'inline-block'
  );
  forms(modalState);
  timer('.container1', dedline);
  images();
});
