<template>
    <div>
      <AppHeaderFilter />

    <div class="main-category sub-category">
        <NuxtLink :to="localePath('/c-' + item.slug)" class="card-link" v-for="item in listSubCategory" :key="item.id">
            <Category :item="item" />
        </NuxtLink>
    </div>

    <div class="main-post" >
        <NuxtLink to="/" class="card-link">
            <CardSale  />
        </NuxtLink>
        <NuxtLink to="/" class="card-link" v-for="item in postByCategory" :key="item.id">
            <Card :item="item" />
        </NuxtLink>
        <VueEternalLoading :load="load"></VueEternalLoading> 
    </div>

</div>

</template>

<script setup>
import { VueEternalLoading } from '@ts-pro/vue-eternal-loading';
const localePath = useLocalePath()
const { locale  } = useI18n()

const route = useRoute()

const subCategory = await $fetch(`https://api.khmer24.com/v1.0/categories?parent=${route.params.slug}&lang=${locale}&v=1`)

const listSubCategory = subCategory.data



const pageSize = ref(0);

const postByCategory = useState('postByCategory',()=>[]);

function load({ loaded }){
    $fetch(`https://api.khmer24.com/v1.0/feed?lang=${locale}`, {
        params: {
            category: route.params.slug,
            offset: pageSize.value,
            fields: 'thumbnail,photos,location,user,store,renew_date,link,category,is_saved,is_like,total_like,total_comment,condition,highlight_specs'
        }
        }).then(res=>{
        pageSize.value = res.limit
        if(res.data){
            postByCategory.value = postByCategory.value.concat(res.data)
        }
        loaded(postByCategory.value.length, pageSize.value);
    })
}

async function getPost() {
    const {data} = await $fetch(`https://api.khmer24.com/v1.0/feed?lang=${locale}&&fields=thumbnail,photos,location,user,store,renew_date,link,category,is_saved,is_like,total_like,total_comment,condition,highlight_specs&offset=&category=${route.params.slug}`)
    postByCategory.value = data
}

getPost()



</script>

