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
            <div class="px-6 py-4">
                <keep-alive>
                    <component v-bind:is="component" />
                </keep-alive>
            </div>
            <div class="px-6 pt-4 pb-2">
                <div>
                    <button @click="navigatePrevious" v-show="!isFirst()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Tilbage
                    </button>
                    <button v-on:click="navigateNext" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        {{ nextButtonText() }}
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
            component: FirstStep
        }
    },

    mounted() { // Bruges ikke
        this.$store.dispatch('fetchAuthUser');
    },

    computed: { // Hent probs fra Store
        
    },

    methods: {
        swapComponent(){ //Bruges ikke
            if (this.component === FirstStep) {
                this.component = SecondStep;
            } else {
                this.component = FirstStep;
            }
        },
        nextButtonText() {
            if (this.component === FourthStep)
            {
                return 'Bestil';
            }

            return 'Næste';
        },
        isFirst() {
            return this.component === FirstStep
        },
        navigateNext() {
            if (this.component === FirstStep) {
                this.component = SecondStep;
            } else if (this.component === SecondStep) {
                this.component = ThirdStep;
            } else if (this.component === ThirdStep) {
                this.component = FourthStep;
            }

        },
        navigatePrevious() { // ændre som Next
            if (this.$route.name === 'order.payment') {
                this.$router.push('/order/confirm');
            } else if (this.$route.name === 'order.confirm') {
                this.$router.push('/order/details');
            } else if (this.$route.name === 'order.details') {
                this.$router.push('/order');
            }
        }, 
        submit() { // Her skal betaling ske
            alert('submitted to the backend!');
        },
    }
}


</script>

<style>

</style>