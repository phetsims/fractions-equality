// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var EqualityLabScreen = require( 'FRACTIONS_EQUALITY/view/EqualityLabScreen' );
  var FractionsScreen = require( 'FRACTION_MATCHER/FractionsScreen' );
  var Tandem = require( 'TANDEM/Tandem' );

  // strings
  var fractionsEqualityTitleString = require( 'string!FRACTIONS_EQUALITY/fractions-equality.title' );
  var screenGameString = require( 'string!FRACTIONS_EQUALITY/screen.game' );

  // constants
  var tandem = Tandem.rootTandem;

  var simOptions = {
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

  SimLauncher.launch( function() {
    var sim = new Sim( fractionsEqualityTitleString, [
      new EqualityLabScreen(),
      new FractionsScreen( tandem.createTandem( 'fractionsScreen' ), {
        // TODO: don't hack like this
        name: screenGameString
      } )
    ], simOptions );
    sim.start();
  } );
} );