// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import fractionsEquality from './fractionsEquality.js';

type StringsType = {
  'fractions-equality': {
    'title': string;
    'titleStringProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'equalityLab': string;
    'equalityLabStringProperty': TReadOnlyProperty<string>;
    'game': string;
    'gameStringProperty': TReadOnlyProperty<string>;
  }
};

const FractionsEqualityStrings = getStringModule( 'FRACTIONS_EQUALITY' ) as StringsType;

fractionsEquality.register( 'FractionsEqualityStrings', FractionsEqualityStrings );

export default FractionsEqualityStrings;
