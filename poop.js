/**
 * Contains the poop class
 *
 * @copyright 2013 Tyke
 */

/**
 * Handles multiple poops in the blender
 *
 * @constructor
 */
var Poop = function() {
    this.num_poops= 0
}

Poop.MAX_POOPS = 10

/**
 * Adds a poop to the blender
 *
 * @param {Event} e Ignored event
 * @param {Object} obj The poop image that was dragged into the blender
 */
Poop.prototype.add = function(e, obj) {
    if (this.num_poops >= Poop.MAX_POOPS) {
        return this.too_many_poops()
    }

    $('#poop-text').text('')
    obj.draggable.remove()
    var new_poop = $('<div class="blender-poop" />').appendTo($('#blender'))

    new_poop.css({
        left: $('#blender').width() / 2 - $(new_poop).width() / 2
      , top: (200 - ($(new_poop).height() * this.num_poops / 4))
      , position: 'absolute'
    })

    this.num_poops++
    this.prepare()
}

/**
 * Displays a nice error message when too many poops are in the blender
 */
Poop.prototype.too_many_poops = function() {
    $('#poop-text').text('That is too many poops in the blender!')
    $('#poop-container').find('.poop').remove()
    this.prepare()
}

/**
 * Puts the poop image back for adding more poops
 */
Poop.prototype.prepare = function() {
    $('#poop-container').append($('<div class="poop" />'))
    $(".poop").draggable({ revert: 'invalid' })
}

/**
 * Kicks off the poop blending party
 */
Poop.prototype.party = function() {
    var self = this
    this.prepare()
    $("#blender").droppable({
        drop: function(a,b) { self.add(a,b) }
    })
}
