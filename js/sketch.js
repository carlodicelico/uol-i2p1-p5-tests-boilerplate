/**
 * Game Project
 *
 * Regarding code style, I'm in the habit of following Standard JS
 * (https://standardjs.com/), and regarding semicolons, specifically,
 * please see https://standardjs.com/rules.html#semicolons.
*/

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict'

const Pinguino = (function(p5) {
    'use strict'
    
    // s is the sketch instance
    function initialize(s) {
        s.createCanvas(1024, 576)
        s.noStroke()
        s.noFill()
    }
    
    // Return the p5 instance bound to the #pinguino div
    return new p5(function(s) {
        
        s.setup = function() {
            initialize(this)
        }
        
        s.draw = function() {
           
        }
        
    }, 'pinguino')
})(p5)