<template>
    <div v-if="pending">
        Peding...
    </div>

    <div v-if="post">
        <FancyBox :options="{
            Carousel: {
                infinite: false,
            },
        }">

            <div class="thumnail" :style="{ 'background-image': 'url(' + post.photo + ')' }">
                <div class="bg-filter"></div>

                <div class="detail-thumnail">
                    <a data-fancybox="gallery" :href="post.photo">
                        <img :src="post.photo" alt="" />
                    </a>
                </div>
            </div>

            <div v-if="post.photos" id="gallery-wrap" class="wrap-thumnail">
                <a v-for="item in post.photos" data-fancybox="gallery" :href="item">
                    <img :src="item" width="100" height="80" />
                </a>

                <div class="blur-count-thumnail" :class="[post.photos.length > 3 ? 'active' : '']"
                    data-fancybox="gallery" :href="post.photos[0]">
                    {{ post.photos.length }} +
                </div>

            </div>

        </FancyBox>

        <div class="detail">
            <h3 class="detail-main-title">{{ post.title }}</h3>
            <span class="sub-title">
                <span class="subtitle-elip">{{ post.en_name }}</span>
                <div class="dot"></div>
                <span>{{ post.posted_date }}</span>
            </span>
            <h3 class="price">{{ post.price }}</h3>
        </div>

        <section class="safty-info">
            <div class="title">
                <img src="/warranty.webp" alt="" width="24px" height="24px" />
                <div class="safety-detail t-red">
                    <p>ព័ត៌មានសុវត្ថិភាពសម្រាប់អ្នកទិញ</p>
                    <p>Safety Tips for Buyers</p>
                </div>
            </div>

            <div class="list-safty">
                <li>
                    <p>1.</p>
                    <div class="safety-detail">
                        <p>មិនត្រូវធ្វើការផ្ញើប្រាក់ទៅមុន មុនពេលទទួលទំនិញ</p>
                        <p>Do note sent money before receiving the goods</p>
                    </div>
                </li>
                <li>
                    <p>2.</p>
                    <div class="safety-detail">
                        <p>មិនត្រូវធ្វើការផ្ញើប្រាក់ទៅមុន មុនពេលទទួលទំនិញ</p>
                        <p>Do note sent money before receiving the goods</p>
                    </div>
                </li>
                <li>
                    <p>3.</p>
                    <div class="safety-detail">
                        <p>មិនត្រូវធ្វើការផ្ញើប្រាក់ទៅមុន មុនពេលទទួលទំនិញ</p>
                        <p>Do note sent money before receiving the goods</p>
                    </div>
                </li>
            </div>

        </section>
        <section class="detail-description">
            <h3>{{ $t('message.description') }}</h3>
            <p>ID: {{ post.id }}</p>
            <p>Like: 1</p>  
            <p>Category: {{ post.category.en_name }}</p>

            <div class="description">
                <p>{{ post.description }}</p>
            </div>
            <div class="contact">
                <p><span>ព័ត៌មានទំនាក់ទំនង:</span>សូមកុំភ្លេចនិយាយថាអ្នកបានឃើញការផ្សព្វផ្សាយនេះនៅលើ ខ្មែរ២៤។</p>
            </div>
            <div class="phone-number">
                <a href=""> <img src="" alt="" /> 0968111xxx ចុចដើម្បីតេ</a>
            </div>
        </section>
        <div v-if="relatePost" class="main-post" >
        <NuxtLink :to="localePath({ name: 'title-adid-id', params: { title: cleanText(item.data.title), id: item.data.id }})" class="card-link" v-for="item in relatePost" :key="item.id">
            <Card :item="item" />
        </NuxtLink> 
    </div> 

    <FooterChat :like="post.total_like ? post.total_like : 0"/>
    
    </div>



</template>

<script setup>
const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()
const post = ref(null)
const pending = ref(false)
const relatePost = ref(null)

const getPost = () => {
    pending.value = true
    $fetch(`/feed/${route.params.id}`, {
        method: 'GET',
        baseURL: 'https://api-posts.khmer24.com',
        params: {
            lang: locale.value,
            fields: 'photo,photos,thumbnails,thumbnail,renew_date,posted_date,link,highlight_specs,specs,description,category,views,total_like,total_comment,location,user,store,phone',
            functions: 'save,chat,like,comment,apply_job,shipping'
        }
    }).then((res) => {
        post.value = res.data
        pending.value = false
    });
}

const getRelatePost = () => {
    $fetch(`/feed/${route.params.id}/relates`,{
        method: 'GET',
        baseURL: 'https://api-posts.khmer24.com',
        params: {
            lang: locale.value,
            fields: 'thumbnail,photos,user,store,renew_date,link,category,is_saved,is_like,total_like,total_comment'
        }
    }).then(res=>{
        if(res.data){
            relatePost.value = res.data
            console.log(relatePost.value)
        }
    })

}
    

getPost()
getRelatePost()


onMounted(() => {
    if (process.client) {
        Fancybox.bind("[data-fancybox]", {
        });

    }
})

</script>

<style scoped>
.detail-description {
    background: white;
    padding: 16px;
}

.safty-info {
    padding: 8px 12px;
    background-color: #fffbf6;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    padding-bottom: 32px;
}

.safty-info>.title {
    justify-content: center;
    display: flex;
    column-gap: 16px;
    align-items: center;
    width: 100%;
}

.safty-info>.title>.safety-detail {
    font-size: 16px;
}

.list-safty>li {
    display: flex;
    column-gap: 16px;
    justify-content: flex-start;
    align-items: center;
    font-weight: 300;
}

.dot {
    height: 3px !important;
    width: 3px !important;
    background-color: gray;
    border-radius: 50%;
}

.detail {
    padding: 0 16px;
    margin: 10px 0;
}

.detail-main-title {
    font-size: 24px;
    margin: 10px 0;

}


.detail>.sub-title {
    display: flex;
    column-gap: 5px;
    align-items: center;
    margin: 10px 0;
}

.detail-location-date {}

.detail-price {}


.wrap-thumnail {
    position: relative;
    max-width: 300px;
    height: 80px;
    overflow: hidden;
}


.wrap-thumnail a {
    object-fit: contain;
}

.blur-count-thumnail {
    display: none;
}

.blur-count-thumnail.active {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    height: 80px;
    width: 100px;
    right: 0;
    background: rgba(0, 0, 0, 0.452);
    background-blend-mode: color;
}

.thumnail {
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.bg-filter {
    position: absolute;
    top: 0;
    left: 0;
    height: 600px;
    display: flex;
    justify-content: center;
    backdrop-filter: saturate(180%) blur(50px);
    width: 100%;
}

.detail-thumnail {
    display: flex;
    justify-content: center;
    color: white;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 600px;
    text-align: center;
    object-fit: contain;

}

.detail-thumnail>a {
    width: 100%;
    height: 100%;
}

.detail-thumnail>a>img {
    height: 100%;
}
</style>
