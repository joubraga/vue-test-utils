import { mount } from 'vue-test-utils'
import Counter from '../src/Components/Counter'
import expect from 'expect'

describe('Testando Contador', () => {
    it('valor inicial do contador', () => {
        let counter = mount(Counter)
        expect(counter.vm.count).toBe(0)
    })
})