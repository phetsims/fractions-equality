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
  var FractionsEqualityScreenView = require( 'FRACTIONS_EQUALITY/fractions-equality/view/FractionsEqualityScreenView' );

  /**
   * @constructor
   */
  function FractionsEqualityScreen() {

    var options = {
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new FractionsEqualityModel(); },
      function( model ) { return new FractionsEqualityScreenView( model ); },
      options
    );
  }

  fractionsEquality.register( 'FractionsEqualityScreen', FractionsEqualityScreen );

  return inherit( Screen, FractionsEqualityScreen );
} );