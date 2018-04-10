import { mount } from 'vue-test-utils'
import Pokedex from '../src/Components/Pokedex.vue'
import expect from 'expect'

describe('Testando Pokedex', () => {
    let poke
    beforeEach(() => {
        poke = mount(Pokedex)
    })

    it.only('Teste de exibição inicial', () => {
        expect(poke.find('.list').html()).toContain('Nenhum item a exibir')
    })
})