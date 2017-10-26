var sassInheritance = [
  '@extend',
  '@include'
];

var content = [
  'content'
];

var position = [
  'position',
  'z-index',
  'top',
  'right',
  'bottom',
  'left',

  'flex',
  'flex-grow',
  'flex-shrink',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-wrap',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'order',

  'float',
  'clear'
];

var display = [
  'display',
  'visibility',
  'opacity',

  'transform',
  'transform-origin'
];

var clip = [
  'overflow',
  'overflow-x',
  'overflow-y',

  'clip',
  'clip-path'
];

var animation = [
  'animation',
  'animation-name',
  'animation-duration',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode',
  'animation-play-state',

  'transition',
  'transition-property',
  'transition-duration',
  'transition-timing-function',
  'transition-delay',
];

var boxModel = [
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',

  'box-shadow',

  'outline', // unspecified in 9elements

  'border',
  'border-width',
  'border-style',
  'border-color',
  'border-top',
  'border-top-width',
  'border-top-style',
  'border-top-color',
  'border-right',
  'border-right-width',
  'border-right-style',
  'border-right-color',
  'border-bottom',
  'border-bottom-width',
  'border-bottom-style',
  'border-bottom-color',
  'border-left',
  'border-left-width',
  'border-left-style',
  'border-left-color',

  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',

  'box-sizing',

  'width',
  'min-width',
  'max-width',

  'height',
  'min-height',
  'max-height',

  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left'
];

var background = [
  'background',
  'background-image',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-size',
  'background-repeat',
  'background-attachment',
  'background-origin',
  'background-clip',
  'background-color',

  'filter', // unspecified in 9elements

  'pointer-events',
  'cursor'
];

var typography = [
  'font',
  'font-size',
  'line-height',
  'font-family',
  'font-weight',
  'font-style',
  'font-variant',
  'text-align',
  'text-decoration',
  'text-shadow',
  'text-transform',
  'white-space',
  'vertical-align',
  'list-style',
  'list-style-position',
  'list-style-type',
  'color'
];

var pseudoClasses = [
  ':hover',
  ':focus',
  ':active',
  ':before',
  ':after',
  ':first-child',
  ':nth-child',
  ':last-child'
];

var unspecified = {
  unspecified: 'bottom'
};


module.exports = {
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/properties-order': [
      []
        // .concat(sassInheritance)
        .concat(content)
        .concat(position)
        .concat(display)
        .concat(clip)
        .concat(animation)
        .concat(boxModel)
        .concat(background)
        .concat(typography)
        .concat(pseudoClasses),
      unspecified
    ]
  }
};
