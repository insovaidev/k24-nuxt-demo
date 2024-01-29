<template>
   <div class="container">

        <NuxtLink @click="en = !en" class="btn btn-link" :to="switchLocalePath(locale === 'en' ? 'km' : 'en')">
            <img :src="'/'+locale+'.webp'" alt="" />
        </NuxtLink>

        <div class="title"><a href="/">{{ $t('message.khmer24') }}</a></div> 
        <button class="search">
            <Icon  class="search-icon" icon="iconamoon:search" />
        </button>
    </div>
</template>


<script setup lang="js">

const { locale } = useI18n()

const switchLocalePath = useSwitchLocalePath()


onMounted(()=>{
    if(process.client){
        // console.log(locale.value)
    }
})

</script>

<style scoped>

img {
    width: 100%;
    height: 100%;
}

button {
    object-fit: cover;
    width: 50px; 
    height: 30px;
}
.container {
    padding: 0 15px;
    height: 50px;
    width: 100%;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--pr-color);
}

.title a {
    text-decoration: none;
    font-size: 32px;
    color: rgb(0, 0, 0);
}

.search {
    cursor: pointer;
    color: white;
    outline: none;
    border: none;
    background-color: transparent;
}


.search-icon {
    font-size: 24px; 
    background-color: transparent;
}
</style>