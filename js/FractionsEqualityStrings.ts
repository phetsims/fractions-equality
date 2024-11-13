// Copyright 2020-2024, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
import fractionsEquality from './fractionsEquality.js';

type StringsType = {
  'fractions-equality': {
    'title': string;
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'equalityLab': string;
    'equalityLabStringProperty': LocalizedStringProperty;
    'game': string;
    'gameStringProperty': LocalizedStringProperty;
  }
};

const FractionsEqualityStrings = getStringModule( 'FRACTIONS_EQUALITY' ) as StringsType;

fractionsEquality.register( 'FractionsEqualityStrings', FractionsEqualityStrings );

export default FractionsEqualityStrings;
