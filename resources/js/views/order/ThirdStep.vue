<template>
    <div>
        3
        <label for="adults">4 retters Nytårsmenu á 399,-</label>
        <input type="number" name="adults" id="adults">

        <label for="childs">Børne Lasagne á 69,-</label>
        <input type="number" name="childs" id="childs">
    </div>  
  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "ThirdStep",

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