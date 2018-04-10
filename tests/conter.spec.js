import { mount } from 'vue-test-utils'
import Counter from '../src/Components/Counter'
import expect from 'expect'

describe('Testando Contador', () => {
    let counter = mount(Counter)
    it('valor inicial do contador', () => {
        expect(counter.vm.count).toBe(0)
    })

    it('Valor após clicar no botão de incremento de contagem', () => {
        counter.find('button.increment').trigger('click')
        expect(counter.vm.count).toBe(1)
    })
})