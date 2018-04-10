export default {
    template: 
        ` <div>
                <h1>
                    {{ count }}
                    <button @click="count++" class="increment">Incrementa</button>
                </h1>
            </div>
        `,
    data () {
        return {
            count: 0
        }
    }
}
