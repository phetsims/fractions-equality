// Copyright 2019-2020, University of Colorado Boulder

/**
 * Main entry point for the 'Fraction Matcher sim.
 *
 * @author Anton Ulyanov (Mlearner)
 * @author Andrew Zelenkov (Mlearner)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import fractionMatcherStrings from '../../../fraction-matcher/js/fractionMatcherStrings.js';
import MatchingGameModel from '../../../fractions-common/js/matching/model/MatchingGameModel.js';
import MatchingGameScreenView from '../../../fractions-common/js/matching/view/MatchingGameScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import merge from '../../../phet-core/js/merge.js';
import fractionsEquality from '../fractionsEquality.js';

const fractionsTitleString = fractionMatcherStrings.fractionsTitle;

class FractionsScreen extends Screen {
  /**
   * @param {Tandem} tandem
   * @param {Object} [options]
   */
  constructor( tandem, options ) {
    super(
      () => new MatchingGameModel( false, true ),
      model => new MatchingGameScreenView( model ),
      merge( {
        name: fractionsTitleString,
        homeScreenIcon: new ScreenIcon( MatchingGameScreenView.createIntroHomeIcon(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        tandem: tandem
      }, options )
    );
  }
}

fractionsEquality.register( 'FractionsScreen', FractionsScreen );
export default FractionsScreen;