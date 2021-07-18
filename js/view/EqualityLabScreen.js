// Copyright 2018-2020, University of Colorado Boulder

/**
 * Equality Lab screen for Fractions: Equality
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import fractionsCommonColorProfile from '../../../fractions-common/js/common/view/fractionsCommonColorProfile.js';
import EqualityLabModel from '../../../fractions-common/js/intro/model/EqualityLabModel.js';
import EqualityLabScreenView from '../../../fractions-common/js/intro/view/EqualityLabScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import fractionsEquality from '../fractionsEquality.js';
import fractionsEqualityStrings from '../fractionsEqualityStrings.js';

const screenEqualityLabString = fractionsEqualityStrings.screen.equalityLab;

class EqualityLabScreen extends Screen {
  constructor() {
    super(
      () => new EqualityLabModel(),
      model => new EqualityLabScreenView( model ),
      {
        name: screenEqualityLabString,
        backgroundColorProperty: fractionsCommonColorProfile.introScreenBackgroundProperty,
        homeScreenIcon: new ScreenIcon( EqualityLabScreenView.createScreenIcon(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } )
      }
    );
  }
}

fractionsEquality.register( 'EqualityLabScreen', EqualityLabScreen );
export default EqualityLabScreen;