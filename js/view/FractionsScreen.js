// Copyright 2019, University of Colorado Boulder

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
  const MatchingGameModel = require( 'FRACTIONS_COMMON/matching/model/MatchingGameModel' );
  const MatchingGameScreenView = require( 'FRACTIONS_COMMON/matching/view/MatchingGameScreenView' );
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
        () => new MatchingGameModel( false, true ),
        model => new MatchingGameScreenView( model ),
        _.extend( {
          name: fractionsTitleString,
          homeScreenIcon: MatchingGameScreenView.createIntroHomeIcon(),
          tandem: tandem
        }, options )
      );
    }
  }

  return fractionsEquality.register( 'FractionsScreen', FractionsScreen );
} );