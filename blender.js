var Blender = function(poop) {
    $('body').append($('<img src="splatter.png" style="display:none" id="tmp-splatter" />'))
    this.usable_ht = $(window).height()
    this.usable_wd = $(window).width()
    this.random_btw = function(from, to) {
        return Math.floor(Math.random()*(to-from+1)+from)
    }
    this.poop = poop
    var self = this

    $('#tmp-splatter').load(function() {
        self.usable_ht -= $(this).height()
        self.usable_wd -= $(this).width()
    })
    $('#blend-button').click(function() {
        self.blend()
    })
}
Blender.prototype.blend = function() {
    $('#poop-text').text('')
    var self = this
    $('#blender').effect("shake", {
        times: 40
      , distance: 40
    }, 150, function() {
        self.splatter()
    })
}
Blender.prototype.splatter = function() {
    if(this.poop.num_poops === 0) return
    var el = $('<img src="splatter.png" />').css({
        position: 'absolute'
      , top: this.random_btw(0, this.usable_ht)
      , left: this.random_btw(0, this.usable_wd)
    }).appendTo($('body'))
    var top_poop = $('#blender .blender-poop').last()
    top_poop.remove()

    if(--this.poop.num_poops > 0) this.blend()
}
