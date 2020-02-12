/* tests for initialization */

describe('Pinguino setup', function() {
    describe('on load', function() {
        it('should be initialized on load', function() {
            expect(Pinguino).to.have.property('_setupDone', true)
        })
    })
})