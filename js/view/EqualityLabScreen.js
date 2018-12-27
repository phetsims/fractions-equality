// Copyright 2018, University of Colorado Boulder

/**
 * Equality Lab screen for Fractions: Equality
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const EqualityLabModel = require( 'FRACTIONS_COMMON/intro/model/EqualityLabModel' );
  const EqualityLabScreenView = require( 'FRACTIONS_COMMON/intro/view/EqualityLabScreenView' );
  const FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  const fractionsEquality = require( 'FRACTIONS_EQUALITY/fractionsEquality' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenEqualityLabString = require( 'string!FRACTIONS_EQUALITY/screen.equalityLab' );

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

  return fractionsEquality.register( 'EqualityLabScreen', EqualityLabScreen );
} );
