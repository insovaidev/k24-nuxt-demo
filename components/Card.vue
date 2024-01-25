<template>
    <div class="card-container">
        <div class="card-image-cotainer">
            <!-- ... -->
            <!-- <img src="https://images.khmer24.co/23-12-08/s-customer-service-executive-indonesian-malaysian-base-in-sihanoukville--929082170202057317848138-b.jpg" alt=""> -->
            <img :src="props.item.data.thumbnail" alt="">
            
            <!-- <img src="https://images.khmer24.co/23-07-21/s-2017-lexus-nx200t-f-sport--141100168991739319697334-c.jpg" alt=""> -->
            
            <div class="more">
                <Icon  class="" icon="mingcute:more-2-fill" />
            </div>
            
            <div class="view-icon-centainer">
                <div class="delivery">
                    <Icon  class="icon" icon="uil:bus-school" />
                    <span>Free Delivery</span>
                </div>
                
                <div class="view">
                    <Icon  class="icon" icon="ph:image-bold" />
                    <span class="count">10</span>
                </div>
            </div>
        </div>

        <div class="description">
            <p class="main-title">fdsfsdf</p>
            <span class="sub-title">
                <span>16mn</span><span class="dot"></span><span>Sangkat Bei, Krong Preah Sihanouk, Preah Sihanouk</span> 
            </span>
            <span class="sub-title">
                <span >New</span><span class="dot"></span><span >2019</span><span class="dot"></span><span>Tax Paper</span> 
            </span>
            <p class="price">$4,000</p>
            <span class="like"></span>
        </div>
    </div>
</template>

<script setup>


const props = defineProps(['item'])




</script>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    max-width: 300px;
    height: 350px;
    background: var(--bg-whtie);
    overflow: hidden;

}
.card-container > .card-image-cotainer {
    object-fit: contain;
    position: relative;
    height: 220px;
    background: var(--bg-whtie);
}
.card-container > .card-image-cotainer > img {
    width: 100%; 
    height: 220px;
}

.card-container > .card-image-cotainer > .more {
    color: white;
    font-size: x-large;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    right: 5px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: absolute;
    background-color: #3333;
}

.card-container > .card-image-cotainer > .view-icon-centainer {
    bottom: 0px;
    right: 5px;
    gap: 10px;
    position: absolute;
    padding:2px 4px;
    border-radius: 6px;
    display: flex;
    justify-items: center;
    align-items: center;
    color: white;
    height: 40px;
}

.card-container > .card-image-cotainer > .view-icon-centainer > .delivery, .view {
    display: flex;
    font-size: 12px !important;
    gap: 5px;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 3px 6px;
    border-radius: 6px;
    background:rgba(0, 0, 0, 0.24)
}

.card-container > .card-image-cotainer > .view-icon-centainer > .delivery > .icon, .view  > .icon {
    font-size: 20px;
}


.card-container > .card-image-cotainer > .view-icon-centainer > .view {
    color: white;
    background:rgba(0, 0, 0, 0.103)

}

.card-container > .description {
    flex: 1;
}

</style>

