// Copyright 2018, University of Colorado Boulder

/**
 * TODO: doc
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var EqualityLabModel = require( 'FRACTIONS_COMMON/intro/model/EqualityLabModel' );
  var EqualityLabScreenView = require( 'FRACTIONS_COMMON/intro/view/EqualityLabScreenView' );
  var FractionsCommonColorProfile = require( 'FRACTIONS_COMMON/common/view/FractionsCommonColorProfile' );
  var fractionsEquality = require( 'FRACTIONS_EQUALITY/fractionsEquality' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenEqualityLabString = require( 'string!FRACTIONS_EQUALITY/screen.equalityLab' );

  /**
   * @constructor
   */
  function EqualityLabScreen() {

    var options = {
      name: screenEqualityLabString,
      backgroundColorProperty: FractionsCommonColorProfile.introScreenBackgroundProperty
    };

    Screen.call( this,
      function() { return new EqualityLabModel(); },
      function( model ) { return new EqualityLabScreenView( model ); },
      options
    );
  }

  fractionsEquality.register( 'EqualityLabScreen', EqualityLabScreen );

  return inherit( Screen, EqualityLabScreen );
} );
