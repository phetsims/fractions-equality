// Copyright 2018-2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import fractionsEqualityStrings from './fractions-equality-strings.js';
import EqualityLabScreen from './view/EqualityLabScreen.js';
import FractionsScreen from './view/FractionsScreen.js';

const fractionsEqualityTitleString = fractionsEqualityStrings[ 'fractions-equality' ].title;
const screenGameString = fractionsEqualityStrings.screen.game;

// constants
const tandem = Tandem.ROOT;

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
    } )
  ], simOptions );
  sim.start();
} );