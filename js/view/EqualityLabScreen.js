// Copyright 2018, University of Colorado Boulder

/**
 * Equality Lab screen for Fractions: Equality
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import FractionsCommonColorProfile from '../../../fractions-common/js/common/view/FractionsCommonColorProfile.js';
import EqualityLabModel from '../../../fractions-common/js/intro/model/EqualityLabModel.js';
import EqualityLabScreenView from '../../../fractions-common/js/intro/view/EqualityLabScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import fractionsEqualityStrings from '../fractions-equality-strings.js';
import fractionsEquality from '../fractionsEquality.js';

const screenEqualityLabString = fractionsEqualityStrings.screen.equalityLab;

class EqualityLabScreen extends Screen {
  constructor() {
    super(
      () => new EqualityLabModel(),
      model => new EqualityLabScreenView( model ),
      {
        name: screenEqualityLabString,
        backgroundColorProperty: FractionsCommonColorProfile.introScreenBackgroundProperty,
        homeScreenIcon: EqualityLabScreenView.createScreenIcon()
      }
    );
  }
}

fractionsEquality.register( 'EqualityLabScreen', EqualityLabScreen );
export default EqualityLabScreen;