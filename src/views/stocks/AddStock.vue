<template>
    <div>
        <form @submit.prevent="addStock">
            <div class="form-group">
                <label for="inputName">Name</label>
                <input type="text" class="form-control" id="inputName" v-model="name" aria-describedby="nameHelp">
                <small id="nameHelp" class="form-text text-muted">Input the name.</small>
            </div>
            <div class="form-group">
                <label for="inputPrice">Price</label>
                <input type="number" class="form-control" v-model="price" id="inputPrice">
            </div>
            <button type="submit" class="btn btn-success">Add Stock</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddStock',
    data() {
        return {
            name: '',
            price: ''
        }
    },
    methods: {
        addStock() {
            console.log('SUBMITED')
        }
    }
}
</script>