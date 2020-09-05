<template>
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
            <div class="font-bold text-xl mb-2">4 retters Nytårs Menu</div>
            <p class="text-gray-700 text-base mb-2">
                <span class="font-bold">Jordskokke suppe & Kammusling</span><br />
                Cremet suppe af jordskok med ristet kammusling, urteolie & brødcroutons.
            </p>
            <p class="text-gray-700 text-base mb-2">
                <span class="font-bold">Røget dyrekølle</span><br />
                Røget dyrekølle med creme af blå kornblomst fra Thise mejeri, syltede rødløg & rugchips.
            </p>
            <p class="text-gray-700 text-base mb-2">
                <span class="font-bold">Tournedoes af Dansk Kalvemørbrad</span><br />
                Tournedoes af Dansk Kalvemørbrad serveret med pommes Anna, Timan sauce & variation af gulerod.
            </p>
            <p class="text-gray-700 text-base mb-2">
                <span class="font-bold">Lime/Lakrids cheescake</span><br />
                Cheesecake toppet med lime & lakridscreme, pyntet med physalis & mango coulis.
            </p>
            <p class="text-gray-700 text-base mb-2">
                <span class="font-bold">Pris per kuvert 399,-</span>
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <router-link to="/order" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bestil</router-link>
            <router-link to="/" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">4 retters Menu</router-link>
            <router-link to="/born" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Børne Menu</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: "MenuCard",
}
</script>

<style>

</style>