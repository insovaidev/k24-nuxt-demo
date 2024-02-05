<template>
        <div>
            <div class="header-filter">
            <button @click="$router.back()" class="back-icon">
                <Icon icon="ion:arrow-back" />
            </button>
            <div class="search-box">
                <Icon  class="search-icon" icon="iconamoon:search" />
                <p>{{ parentCategory }}</p>
            </div>
            <button class="adjust-icon">
                <Icon icon="tabler:adjustments-horizontal" />
            </button>
        </div>

        <div class="main-category sub-category">
            <NuxtLink :to="localePath('/c-' + item.slug)" class="card-link" v-for="item in subCategory.data" :key="item.id">
                <Category :item="item" />
            </NuxtLink>
        </div>

        <div class="main-post">
            <NuxtLink to="/" class="card-link">
                <CardSale />
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
const { locale } = useI18n()
const route = useRoute()
const router = useRouter()
const parentCategory = ref('')

const { data: subCategory, error } = await useFetch(`https://api.khmer24.com/v1.0/categories?parent=${route.params.slug}&lang=${locale}&v=1`)

const pageSize = ref(0);
const postByCategory = useState('postByCategory', () => []);

function load({ loaded }) {
    $fetch(`https://api.khmer24.com/v1.0/feed?lang=${locale}`, {
        params: {
            category: route.params.slug,
            offset: pageSize.value,
            fields: 'thumbnail,photos,location,user,store,renew_date,link,category,is_saved,is_like,total_like,total_comment,condition,highlight_specs'
        }
    }).then(res => {
        pageSize.value = res.limit
        if (res.data) {
            postByCategory.value = postByCategory.value.concat(res.data)
        }
        loaded(postByCategory.value.length, pageSize.value);
    })
}

async function getPost() {
    const { data } = await $fetch(`https://api.khmer24.com/v1.0/feed?lang=${locale}&&fields=thumbnail,photos,location,user,store,renew_date,link,category,is_saved,is_like,total_like,total_comment,condition,highlight_specs&offset=&category=${route.params.slug}`)
    postByCategory.value = data
}

getPost()

onMounted(() => {
    const categories = localStorage.getItem('categories')
    if(categories) {
        const c = JSON.parse(categories).data
        c.map(v => {
            if(v.slug === route.params.slug){
                parentCategory.value = locale.value == 'en' ?  v.en_name : v.km_name
                return
            }       
        });
    }
})

</script>

<style scoped>

.header-filter {
    padding: 0 16px;
    height: 50px;
    background: var(--pr-color);
    display: flex;
    align-items: center;
    column-gap: 16px;
}

.header-filter > .back-icon, .adjust-icon {
    display: flex;
    align-items: center;
    color: white;
    height: 100%;    
    background: transparent;
    border: none;
    font-size: 32px;

}
.search-box { 
    padding: 8px ;
    background: rgba(245, 245, 245, 0.288);
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    height: 80%;
    border-radius: 4px;
    color: white;
    
}
.search-box > p {
    font-weight: 300 !important;
}

</style>

