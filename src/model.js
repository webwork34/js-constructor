import image from './assets/js.jpg';
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks';
import {css} from './utils';

const text = `Lorem ipsum dolor <a href="#">SOME LINK</a> sit amet consectetur adipisicing elit. 
              Veniam, enim quisquam repudiandae qui ratione adipisci 
              commodi minima ex distinctio dolorum.`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JS', {
    tag: 'h2',
    styles: css({
      background: 'darkred',
      color: '#fff',
      'text-align': 'center',
      padding: '2rem'
    })
  }),

  new ImageBlock(image,  {
    styles: 'padding: 2rem 0;',
    alt: 'js image',
    imageStyles: 'width: 100%'
  }),

  new TextColumnsBlock([
    'Приложение на чистом JS без использовантя библиотек',
    'Узнаешь как работают принципы SOLID и ООП в JS за 1 курс',
    'JS - это очень интересно. Научись создавать любые UI своими руками.'
  ], {
    styles: 'padding: 1rem; background: lightblue; font-weight: bold;'
  }),

  new TextBlock(text, {
    styles: 'background: lightgreen; color: darkblue; padding: 1rem;'
  })
  
];
