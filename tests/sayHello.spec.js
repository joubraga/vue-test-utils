import { mount } from 'vue-test-utils'
import SayHello from '../src/Components/SayHello'
import expect from 'expect'

describe('Testando Say Hello', () => {
    let sayHello

    beforeEach(() => {
        sayHello = mount(SayHello)
    })

    it('Testando mensagem inicial', () => {
        expect(sayHello.find('h1').html()).toContain('Hello World, <strong> Jonathan </strong>')
    })

    it('Testando nome alterado via Formulario', () => {
        sayHello.setData({newName: 'Foo'})
        sayHello.find('form').trigger('submit')
        expect(sayHello.find('h1').html()).toContain('Foo')
    })

})