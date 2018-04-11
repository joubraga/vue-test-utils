<template>
    <div id="wrapper">
        <div class="list" v-if="pokes.length === 0">
            Nenhum item a exibir
        </div>

        <table class="poke-list" v-if="pokes.length > 0">
            <tbody>
                <tr v-for="poke in pokes">
                    <td> {{ poke.name }} </td>
                </tr>
            </tbody>
        </table>

        <a href="" @click.prevent="getPokes()"> Listar </a>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        methods: {
            getPokes () {
                axios.get('/poke/all').then((response) => {
                    this.pokes = response.data.pokes
                })
            }
        },
        data () {
            return {
                pokes: []
            }
        }
    }
</script>
