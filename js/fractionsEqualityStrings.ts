// Copyright 2020-2021, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import fractionsEquality from './fractionsEquality.js';

type StringsType = {
  'fractions-equality': {
    'title': string;
  };
  'screen': {
    'equalityLab': string;
    'game': string;
  }
};

const fractionsEqualityStrings = getStringModule( 'FRACTIONS_EQUALITY' ) as StringsType;

fractionsEquality.register( 'fractionsEqualityStrings', fractionsEqualityStrings );

export default fractionsEqualityStrings;
