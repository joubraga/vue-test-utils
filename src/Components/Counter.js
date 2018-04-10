export default {
    template: 
        ` <div>
                <h1>
                    {{ count }}
                    <button @click="count++" class="increment">Incrementa</button>
                    <button @click="count--" class="decrement">Decrementar</button>
                </h1>
            </div>
        `,
    data () {
        return {
            count: 0
        }
    }
}
