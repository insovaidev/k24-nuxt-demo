<template>
    
    <div class="card-container">
        <div class="card-image-cotainer">
            <img class="object-fit_contain" :src="props.item.data.thumbnail" alt="" />

            <div v-if="props.item.data.discount" class="discount">
                <span>{{ props.item.data.discount.type == 'amount' ? '$' : '%'}} {{ props.item.data.discount.type != 'amount' ? props.item.data.discount.amount_saved.toFixed(2) : props.item.data.discount.amount_saved }}</span>    
                <span>OFF</span>
            </div>


            <div class="more">
                <Icon class="" icon="mingcute:more-2-fill" />
            </div>

            <div class="view-icon-centainer">
                <div class="delivery">
                    <Icon class="icon" icon="uil:bus-school" />
                    <span>Free Delivery</span>
                </div>

                <div class="view">
                    <Icon class="icon" icon="ph:image-bold" />
                    <span class="count">10</span>
                </div>
            </div>
        </div>

        <div class="description">
            <p class="main-title card-title">{{ props.item.data.title }}</p>
            <span class="sub-title">
                <span>16mn </span><span class="dot"></span><span class="subtitle-elip"> {{ locale === 'en' ? props.item.data.location.en_name2   :  props.item.data.location.km_name2}}</span>
            </span>
            <span v-if="props.item.data.condition" class="sub-title">
                <span>{{ props.item.data.condition.title }}</span>
                <span v-if="props.item.data.highlight_specs">
                    <span v-for="i in props.item.data.highlight_specs" class="sub-title2">{{ i.display_value }}</span>
                </span>
            </span>
            <span class="price-like-continer">
                <div class="price-continer">
                    <p class="price">$ {{ props.item.data.price }}</p>
                    <p v-if="props.item.data.discount" class="old-price">$ {{ props.item.data.discount.original_price }}</p>
                </div>
                <span class="like">
                    <Icon class="heart-icon" icon="tabler:heart" />
                </span>
            </span>
        </div>
    </div>
</template>

<script setup>

const { locale } = useI18n()
const props = defineProps(['item'])

</script>

<style scoped>

.card-container {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    width: 450px;
    height: 370px;
    background: var(--bg-whtie);
    overflow: hidden;
}

.card-container>.card-image-cotainer {
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    height: 220px;
    width: 100%;
    background: var(--bg-whtie);
}

.card-container>.card-image-cotainer>.object-fit_contain {
    width: 100%;
    height: 220px;
    border: 0;
    object-fit: cover;

}

.card-container>.card-image-cotainer>.more {
    color: white;
    font-size: x-large;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    right: 5px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    position: absolute;
    background-color: #3333;
}

.card-container>.card-image-cotainer>.discount {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    font-size: 12px;
    position: absolute;
    color: white;
    background: var(--bg-orange);
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-bottom-right-radius: 65%;

}

.card-container>.card-image-cotainer>.discount>span:nth-child(2) {
    font-weight: 200;
    font-size: 8px;
}

.card-container>.card-image-cotainer>.view-icon-centainer {
    bottom: 0px;
    right: 5px;
    gap: 10px;
    position: absolute;
    padding: 2px 4px;
    border-radius: 6px;
    display: flex;
    justify-items: center;
    align-items: center;
    color: white;
    height: 40px;
}

.card-container>.card-image-cotainer>.view-icon-centainer>.delivery,
.view {
    display: flex;
    font-size: 12px !important;
    gap: 5px;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 3px 6px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.24)
}

.card-container>.card-image-cotainer>.view-icon-centainer>.delivery>.icon,
.view>.icon {
    font-size: 20px;
}

.card-container>.card-image-cotainer>.view-icon-centainer>.view {
    color: white;
    background: rgba(0, 0, 0, 0.24)
}

.card-container>.description {
    border-top: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 8px;
    flex: 1;
    /* background: lightblue; */
}


.card-container>.description>.card-title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-container>.description>.sub-title {
    gap: 4px;
    display: flex;
    justify-items: start;
    align-items: center;
}

.subtitle-elip {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


.sub-title2::before {
    content: "\2022"; 
    color:gray;
    margin-inline: 5px;
}


.price-like-continer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.heart-icon {
    font-size: 24px;
    color: gray;
}

.price-continer {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: baseline;
}

.old-price {
    font-style: italic;
    color: gray;
    font-size: 15px;
    font-weight: 600;
    text-decoration: line-through;

}
</style>

