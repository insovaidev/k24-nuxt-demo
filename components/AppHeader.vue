<template>
   <div class="container">

        <NuxtLink @click="en = !en" class="btn btn-link" :to="switchLocalePath(locale === 'en' ? 'km' : 'en')">
            <img :src="'/'+locale+'.webp'" alt="" />
        </NuxtLink>

        <div class="title"><a href="/" class="t-white">{{ $t('message.khmer24') }}</a></div> 

        
        <button class="search">
            <Icon  class="search-icon" icon="iconamoon:search" />
        </button>
    </div>
</template>


<script setup lang="js">

const { locale } = useI18n()

const switchLocalePath = useSwitchLocalePath()




</script>

<style scoped>



</style>