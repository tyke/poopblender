var Poop = function() {
    this.num_poops= 0
    this.max_poops = 3
}
Poop.prototype.add = function(e, obj) {
    if(this.num_poops >= this.max_poops) return this.too_many_poops()
    $('#poop-text').text('')
    obj.draggable.remove()
    var new_poop = $('<div class="blender-poop" />').appendTo($('#blender'))
    new_poop.css({
        left: $('#blender').width()/2 - $(new_poop).width()/2
      , top: (200 - $(new_poop).height()*this.num_poops)
      , position: 'absolute'
    })
    this.num_poops++
    this.prepare()
}
Poop.prototype.too_many_poops = function() {
    $('#poop-text').text('That is too many poops in the blender!')
    $('#poop-container').find('.poop').remove()
    this.prepare()
}
Poop.prototype.prepare = function() {
    $('#poop-container').append($('<div class="poop" />'))
    $( ".poop" ).draggable({ revert: 'invalid' })
}
Poop.prototype.party = function() {
    var self = this
    this.prepare()
    $( "#blender" ).droppable({
        drop: function(a,b) { self.add(a,b) }
    })
}
