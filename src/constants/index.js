import { width as deviceWidth } from '../style';

const BAR_PASSWORD_STRENGTH_DISPLAY = {
  touched: false,
  scoreLimit: 100,
  variations: {
    digits: /\d/,
    lower: /[a-z]/,
    upper: /[A-Z]/,
    nonWords: /\W/,
  },
  minLength: 5,
  labelVisible: true,
  levels: [
    {
      label: 'Pathetically weak',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      label: 'Extremely weak',
      labelColor: '#ff3e00',
      activeBarColor: '#ff3e00',
    },
    {
      label: 'Very weak',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      label: 'Weak',
      labelColor: '#ff6900',
      activeBarColor: '#ff6900',
    },
    {
      label: 'So-so',
      labelColor: '#f4d744',
      activeBarColor: '#f4d744',
    },
    {
      label: 'Average',
      labelColor: '#f3d331',
      activeBarColor: '#f3d331',
    },
    {
      label: 'Fair',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      label: 'Strong',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      label: 'Very strong',
      labelColor: '#0af56d',
      activeBarColor: '#0af56d',
    },
    {
      label: 'Unbelievably strong',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  wrapperStyle: {},
  barContainerStyle: {},
  barStyle: {},
  labelStyle: {},
  barColor: '#f1f3f4',
  width: deviceWidth - 20,
};

const BOX_PASSWORD_STRENGTH_DISPLAY = {
  touched: false,
  scoreLimit: 100,
  variations: {
    digits: /\d/,
    lower: /[a-z]/,
    upper: /[A-Z]/,
    nonWords: /\W/,
  },
  minLength: 5,
  labelVisible: true,
  levels: [
    {
      label: 'Pathetically weak',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      label: 'Extremely weak',
      labelColor: '#ff3e00',
      activeBarColor: '#ff3e00',
    },
    {
      label: 'Very weak',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      label: 'Weak',
      labelColor: '#ff6900',
      activeBarColor: '#ff6900',
    },
    {
      label: 'So-so',
      labelColor: '#f4d744',
      activeBarColor: '#f4d744',
    },
    {
      label: 'Average',
      labelColor: '#f3d331',
      activeBarColor: '#f3d331',
    },
    {
      label: 'Fair',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      label: 'Strong',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      label: 'Very strong',
      labelColor: '#0af56d',
      activeBarColor: '#0af56d',
    },
    {
      label: 'Unbelievably strong',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  wrapperStyle: {},
  boxContainerStyle: {},
  boxStyle: {},
  labelStyle: {},
  boxColor: '#f1f3f4',
  width: deviceWidth - 20,
  boxSpacing: 2,
};

const CIRCULAR_PASSWORD_STRENGTH_DISPLAY = {
  labelVisible: true,
  minLength: 5,
  variations: {
    digits: /\d/,
    lower: /[a-z]/,
    upper: /[A-Z]/,
    nonWords: /\W/,
  },
  minValue: 0,
  scoreLimit: 100,
  easeDuration: 500,
  levels: [
    {
      label: 'Pathetically weak',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      label: 'Extremely weak',
      labelColor: '#ff3e00',
      activeBarColor: '#ff3e00',
    },
    {
      label: 'Very weak',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      label: 'Weak',
      labelColor: '#ff6900',
      activeBarColor: '#ff6900',
    },
    {
      label: 'So-so',
      labelColor: '#f4d744',
      activeBarColor: '#f4d744',
    },
    {
      label: 'Average',
      labelColor: '#f3d331',
      activeBarColor: '#f3d331',
    },
    {
      label: 'Fair',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      label: 'Strong',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      label: 'Very strong',
      labelColor: '#0af56d',
      activeBarColor: '#0af56d',
    },
    {
      label: 'Unbelievably strong',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  wrapperStyle: {},
  outerCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {},
};

const TEXT_PASSWORD_STRENGTH_DISPLAY = {
  touched: false,
  scoreLimit: 100,
  variations: {
    digits: /\d/,
    lower: /[a-z]/,
    upper: /[A-Z]/,
    nonWords: /\W/,
  },
  minLength: 5,
  labelVisible: true,
  levels: [
    {
      label: 'Pathetically weak',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      label: 'Extremely weak',
      labelColor: '#ff3e00',
      activeBarColor: '#ff3e00',
    },
    {
      label: 'Very weak',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      label: 'Weak',
      labelColor: '#ff6900',
      activeBarColor: '#ff6900',
    },
    {
      label: 'So-so',
      labelColor: '#f4d744',
      activeBarColor: '#f4d744',
    },
    {
      label: 'Average',
      labelColor: '#f3d331',
      activeBarColor: '#f3d331',
    },
    {
      label: 'Fair',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      label: 'Strong',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      label: 'Very strong',
      labelColor: '#0af56d',
      activeBarColor: '#0af56d',
    },
    {
      label: 'Unbelievably strong',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  wrapperStyle: {},
  labelStyle: {},
};

const PASSWORD_INPUT = {
  defaultPassword: '',
  containerWrapperStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  inputWrapperStyle: {},
  inputStyle: {},
  placeholderStyle: {},
  meterType: 'bar',
  inputProps: {
    placeholder: 'Password',
    secureTextEntry: true,
  },
  // Required only to return score from the Input Component
  passwordProps: {
    minLength: 5,
    scoreLimit: 100,
    levels: [
      {
        label: 'Pathetically weak',
        labelColor: '#ff2900',
        activeBarColor: '#ff2900',
      },
      {
        label: 'Extremely weak',
        labelColor: '#ff3e00',
        activeBarColor: '#ff3e00',
      },
      {
        label: 'Very weak',
        labelColor: '#ff5400',
        activeBarColor: '#ff5400',
      },
      {
        label: 'Weak',
        labelColor: '#ff6900',
        activeBarColor: '#ff6900',
      },
      {
        label: 'So-so',
        labelColor: '#f4d744',
        activeBarColor: '#f4d744',
      },
      {
        label: 'Average',
        labelColor: '#f3d331',
        activeBarColor: '#f3d331',
      },
      {
        label: 'Fair',
        labelColor: '#f2cf1f',
        activeBarColor: '#f2cf1f',
      },
      {
        label: 'Strong',
        labelColor: '#14eb6e',
        activeBarColor: '#14eb6e',
      },
      {
        label: 'Very strong',
        labelColor: '#0af56d',
        activeBarColor: '#0af56d',
      },
      {
        label: 'Unbelievably strong',
        labelColor: '#00ff6b',
        activeBarColor: '#00ff6b',
      },
    ],
  },
};

export {
  BAR_PASSWORD_STRENGTH_DISPLAY,
  BOX_PASSWORD_STRENGTH_DISPLAY,
  CIRCULAR_PASSWORD_STRENGTH_DISPLAY,
  TEXT_PASSWORD_STRENGTH_DISPLAY,
  PASSWORD_INPUT,
};
