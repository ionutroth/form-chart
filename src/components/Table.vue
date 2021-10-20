<template>
    <div class="d-flex justify-content-center">
        <b-table striped hover :items="items" dark class=" m-3 w-75 border border-success shadow-lg"></b-table>
    </div>
</template>

<script>
    export default {
        name: 'Table',
        data(){
            return {
                items: this.$store.state.listTable
            }
        }
        
    }
</script>

<style scoped>

</style>