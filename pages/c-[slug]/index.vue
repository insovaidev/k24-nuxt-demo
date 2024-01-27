<template>
    <div class="main-category sub-category">
        <NuxtLink :to="localePath('/c-' + item.slug)" class="card-link" v-for="item in listSubCategory" :key="item.id">
            <Category :item="item" />
        </NuxtLink>
    </div>
</template>

<script setup>
import axios from 'axios'

const localePath = useLocalePath()

const route = useRoute()

const subCategory = await axios.get(`https://api.khmer24.com/v1.0/categories?parent=${route.params.slug}&lang=en&v=1`)

const listSubCategory = subCategory.data.data

const { locale,  } = useI18n()

console.log(locale)

</script>

<style scoped>



</style>



<!--  
    
 -->