// Copyright 2017, University of Colorado Boulder

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
  var Color = require( 'SCENERY/util/Color' );
  var fractionsEquality = require( 'FRACTIONS_EQUALITY/fractionsEquality' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenEqualityLabString = require( 'string!FRACTIONS_EQUALITY/screen.equalityLab' );

  /**
   * @constructor
   */
  function EqualityLabScreen() {

    var options = {
      name: screenEqualityLabString,
      backgroundColorProperty: new Property( Color.WHITE )
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
