<template>
    <div>
        <label for="name">Fulde Navn:</label>
        <input type="text" name="name" id="name" v-model="name">

        <label for="email">E-mail:</label>
        <input type="email" name="email" id="email" v-model="email">

        <label for="confirm_email">Gentag E-mail:</label>
        <input type="email" name="confirm_email" id="confirm_email" v-model="confirm_email">

        <label for="phone">Telefon nummer:</label>
        <input type="number" name="phone" id="phone" v-model="phone">        
    </div>  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "SecondStep",

    data() {
        return {
            name: '',
            email: '',
            confirm_email: '',
            phone: '',
        }
    },

    computed: {
        ...mapGetters({
            children: 'children',
            adults: 'adults',
        })
    },
}
</script>

<style>

</style>