<template>
    <div>
        <button @click="navigatePrevious" v-show="!isFirst()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Tilbage
        </button>
        <button @click="navigateNext" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            {{ nextButtonText() }}
        </button>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    props: [
        'swapComponent',
    ],
    methods: {
        nextButtonText() {
            if (this.$route.name === 'order.fourthStep')
            {
                return 'Bestil';
            }

            return 'Næste';
        },
        isFirst() {
            return this.$route.name === 'order'
        },
        navigateNext() {
            if (this.$route.name === 'order.payment') {
                submit();
            } else if (this.$route.name === 'order.confirm') {
                this.$router.push('/order/payment');
            } else if (this.$route.name === 'order.details') {
                this.$router.push('/order/confirm');
            } else if (this.$route.name === 'order') {
                //this.$router.push('/order/details');
                swapComponent("SecondStep");
            }
        },
        navigatePrevious() {
            if (this.$route.name === 'order.payment') {
                this.$router.push('/order/confirm');
            } else if (this.$route.name === 'order.confirm') {
                this.$router.push('/order/details');
            } else if (this.$route.name === 'order.details') {
                this.$router.push('/order');
            }
        }, 
        submit() {
            alert('submitted to the backend!');
        },
    }

}
</script>

<style>

</style>