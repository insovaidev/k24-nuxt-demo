<template>
    <div class="home">
        <div class="main-category">
            <NuxtLink :to="localePath('/c-'+item.slug)" class="card-link" v-for="item in mainCategory" :key="item.id">
                <Category :item="item" />
            </NuxtLink>
        </div>

        <!-- <div class="main-post" >
            <NuxtLink to="/" class="card-link">
                <CardSale  />
            </NuxtLink>
            <NuxtLink to="/" class="card-link" v-for="item in post" :key="item.id">
                <Card :item="item" />
            </NuxtLink>
        </div> -->

    </div>
</template>

<script setup>
import axios from 'axios'

const { locale } = useI18n()

const localePath = useLocalePath()

const getMainCategory  = await axios.get(`https://api.khmer24.com/v1.0/categories?parent=0&lang=${locale}&v=1`)
const mainCategory = getMainCategory.data.data

const getPost  = await axios.get(`https://api.khmer24.com/v1.0/feed?lang=${locale}&fields=thumbnail,photos,location,user,store,renew_date,link,category,is_saved,is_like,total_like,total_comment,condition,highlight_specs&limit=30`)

const post = getPost.data.data

</script>
<style scoped>

</style>

