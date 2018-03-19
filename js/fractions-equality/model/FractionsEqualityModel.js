// Copyright 2018, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var fractionsEquality = require( 'FRACTIONS_EQUALITY/fractionsEquality' );

  /**
   * @constructor
   */
  function FractionsEqualityModel() {
    //TODO
  }

  fractionsEquality.register( 'FractionsEqualityModel', FractionsEqualityModel );

  return inherit( Object, FractionsEqualityModel, {

    // @public resets the model
    reset: function() {
      //TODO reset things here
    },

    //TODO Called by the animation loop. Optional, so if your model has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle model animation here.
    }
  } );
} );