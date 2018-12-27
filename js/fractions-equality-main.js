// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const EqualityLabScreen = require( 'FRACTIONS_EQUALITY/view/EqualityLabScreen' );
  const FractionsScreen = require( 'FRACTION_MATCHER/view/FractionsScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const fractionsEqualityTitleString = require( 'string!FRACTIONS_EQUALITY/fractions-equality.title' );
  const screenGameString = require( 'string!FRACTIONS_EQUALITY/screen.game' );

  // constants
  const tandem = Tandem.rootTandem;

  const simOptions = {
    credits: {
      //TODO fill in proper credits, all of these fields are optional, see joist.AboutDialog
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( () => {
    const sim = new Sim( fractionsEqualityTitleString, [
      new EqualityLabScreen(),
      new FractionsScreen( tandem.createTandem( 'fractionsScreen' ), {
        name: screenGameString
      } )
    ], simOptions );
    sim.start();
  } );
} );