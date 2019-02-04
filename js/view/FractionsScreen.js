// Copyright 2013-2018, University of Colorado Boulder

/**
 * Main entry point for the 'Fraction Matcher sim.
 *
 * @author Anton Ulyanov (Mlearner)
 * @author Andrew Zelenkov (Mlearner)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const fractionsEquality = require( 'FRACTIONS_EQUALITY/fractionsEquality' );
  const FractionMatcherModel = require( 'FRACTIONS_COMMON/matcher/model/FractionMatcherModel' );
  const FractionMatcherView = require( 'FRACTIONS_COMMON/matcher/view/FractionMatcherView' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const fractionsTitleString = require( 'string!FRACTION_MATCHER/fractionsTitle' );

  class FractionsScreen extends Screen {
    /**
     * @param {Tandem} tandem
     * @param {Object} [options]
     */
    constructor( tandem, options ) {
      super(
        () => new FractionMatcherModel( false, true ),
        model => new FractionMatcherView( model ),
        _.extend( {
          name: fractionsTitleString,
          homeScreenIcon: FractionMatcherView.createIntroHomeIcon(),
          tandem: tandem
        }, options )
      );
    }
  }

  return fractionsEquality.register( 'FractionsScreen', FractionsScreen );
} );