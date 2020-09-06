<template>
    <div class="flex items-center justify-center py-4 px-2">
        <div class="max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-2xl">
            <div class="flex flex-wrap bg-gray-100">
                <div class="w-1/2 pr-2 pb-2">
                    <img class="w-full h-full rounded shadow-lg" src="https://madenimitliv.dk/wp-content/uploads/2018/02/DSC_0030-1024x788.jpg" alt="Lækker mad">
                </div>
                <div class="w-1/2 pl-2 pb-2">
                    <img class="w-full h-full rounded shadow-lg" src="https://bt.bmcdn.dk/media/cache/resolve/image_1240/image/3/36601/9127320-junk.jpg" alt="Lækker mad">
                </div>
                <div class="w-1/2 pr-2 pt-2">
                    <img class="w-full h-full rounded shadow-lg" src="https://media-cdn.tripadvisor.com/media/photo-s/0f/6b/d9/a6/laekker-mad.jpg" alt="Lækker mad">
                </div>
                <div class="w-1/2 pl-2 pt-2">
                    <img class="w-full h-full rounded shadow-lg" src="https://media.madetmere.dk/wp-content/uploads/2015/10/Mad-med-omtanke-4.jpg" alt="Lækker mad">
                </div>
            </div>
            <form id="order" @submit.prevent="handleSubmit" class="w-full pt-6">
                <div v-show="this.current === 1" class="md:flex md:items-center mb-6">
                    <div class="md:w-2/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="adults">4 retters Nytårsmenu á 399,-</label>
                    </div>
                    <div class="md:w-1/3">
                        <input
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="number" 
                            name="adults" 
                            id="adults" 
                            v-model="adults"
                            min="1"
                            max="50"
                            >
                    </div>
                </div>
                <div v-show="this.current === 1" class="md:flex md:items-center mb-6">
                    <div class="md:w-2/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="children">Børnelasagne á 69,-</label>
                    </div>
                    <div class="md:w-1/3">
                        <input
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight 
                                    focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="number" 
                            name="children" 
                            id="children" 
                            v-model="children"
                            min="1"
                            max="50"
                            >

                    </div>
                </div>
                <div v-show="this.current === 1" class="md:flex md:items-center mb-6">
                    <div class="md:w-2/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="total">I alt: </label>
                    </div>
                    <div class="md:w-1/3">
                        <input
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-32 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="number" 
                            name="total" 
                            id="total" 
                            v-model="total"
                            readonly
                            >
                    </div>
                </div>

                <div v-show="this.current === 2">
                    <label for="name">Fulde Navn:</label>
                    <input type="text" name="name" id="name" v-model="name">

                    <label for="email">E-mail:</label>
                    <input type="email" name="email" id="email" v-model="email">

                    <label for="confirm_email">Gentag E-mail:</label>
                    <input type="email" name="confirm_email" id="confirm_email" v-model="confirm_email">

                    <label for="phone">Telefon nummer:</label>
                    <input type="number" name="phone" id="phone" v-model="phone">        
                </div>
                <div class="px-6 pt-4 pb-4" v-show="isLast()">
                    <div class="text-right">                       
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Bestil
                        </button>
                    </div>
                </div>
            </form>
            <div class="px-6 pt-4 pb-2" v-show="!isLast()">
                <div>                               
                    <button @click="navigatePrevious" v-show="!isFirst() && !isLast()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Tilbage
                    </button>
                    <button @click="navigateNext" v-show="!isLast()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Næste
                    </button> 
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex';
import FirstStep from './order/FirstStep';
import SecondStep from './order/SecondStep';
import ThirdStep from './order/ThirdStep';
import FourthStep from './order/FourthStep';

export default {
    name: "Order",

    components: {
        FirstStep,
        SecondStep,
        ThirdStep,
        FourthStep,
    },

    data (){
        return {
            component: FirstStep,
            last: 3,
            current: 1,

            adults: '2',
            children: '0',
            
            name: '',
            email: '',
            confirm_email: '',
            phone: '',
        }
    },

    mounted() { // Bruges ikke
        this.$store.dispatch('fetchAuthUser');
    },

    computed: { // Hent probs fra Store
        total: {
            get() {
                return (this.adults * 399) + (this.children * 69);
            }
        },
    },

    methods: {
        isFirst() {
            return this.component === FirstStep
        },
        isLast() {
            return this.current === this.last
        },
        navigateNext() {
            this.current++;
        },
        navigatePrevious() { // ændre som Next
            this.current--;
        }, 
        handleSubmit:function() {
            alert('submitted to the backend!'+this.adults);
        },
    }
}


</script>

<style>

</style>