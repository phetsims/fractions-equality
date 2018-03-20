// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var fractionsEquality = require( 'FRACTIONS_EQUALITY/fractionsEquality' );
  var FractionsEqualityModel = require( 'FRACTIONS_EQUALITY/fractions-equality/model/FractionsEqualityModel' );
  var EqualityLabScreenView = require( 'FRACTIONS_EQUALITY/fractions-equality/view/EqualityLabScreenView' );

  // strings
  var screenEqualityLabString = require( 'string!FRACTIONS_EQUALITY/screen.equalityLab' );

  /**
   * @constructor
   */
  function EqualityLabScreen() {

    var options = {
      name: screenEqualityLabString,
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new FractionsEqualityModel(); },
      function( model ) { return new EqualityLabScreenView( model ); },
      options
    );
  }

  fractionsEquality.register( 'EqualityLabScreen', EqualityLabScreen );

  return inherit( Screen, EqualityLabScreen );
} );