// Copyright 2018-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const EqualityLabScreen = require( 'FRACTIONS_EQUALITY/view/EqualityLabScreen' );
  const FractionsScreen = require( 'FRACTIONS_EQUALITY/view/FractionsScreen' );
  const FractionsScreen2 = require( 'FRACTIONS_EQUALITY/view/FractionsScreen2' );
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
      leadDesign: 'Ariel Paul',
      softwareDevelopment: 'Jonathan Olson, Sam Reid, Martin Veillette',
      team: 'Mike Dubson, Trish Loeblein, Amanda McGarry, Kathy Perkins, Vincent Davis, Michael Moorer, Dusty Cole',
      qualityAssurance: 'Steele Dalton, Megan Lai, Liam Mulhall, Laura Rea, Jacob Romero, Katie Woessner, and Kelly Wurtz',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( () => {
    const sim = new Sim( fractionsEqualityTitleString, [
      new EqualityLabScreen(),
      new FractionsScreen( tandem.createTandem( 'fractionsScreen' ), {
        name: screenGameString
      } ),
      new FractionsScreen2( tandem.createTandem( 'fractionsScreen2' ), {
        name: screenGameString
      } )
    ], simOptions );
    sim.start();
  } );
} );