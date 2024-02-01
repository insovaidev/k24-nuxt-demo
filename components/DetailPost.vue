<template>
    <section>


        <FancyBox :options="{
            Carousel: {
                infinite: false,
            },
        }">


            <div class="thumnail" :style="{ 'background-image': 'url(' + url + ')' }">
                <div class="bg-filter"></div>

                <div class="detail-thumnail">
                    <a data-fancybox="gallery"
                        href="https://images.khmer24.co/23-12-20/s-312108-4-bedroom-twin-villa-for-rent-bassac-garden-city-tonle-bassac-phnom-penh-1703038991-86555095-b.jpg">
                        <img src="https://images.khmer24.co/23-12-20/s-312108-4-bedroom-twin-villa-for-rent-bassac-garden-city-tonle-bassac-phnom-penh-1703038991-86555095-b.jpg"
                            alt="" />
                    </a>
                </div>
            </div>

            <div id="gallery-wrap" class="wrap-thumnail">


                <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                    <img src="https://lipsum.app/id/60/200x150" width="100" height="80" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
                    <img src="https://lipsum.app/id/61/200x150" width="100" height="80" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                    <img src="https://lipsum.app/id/62/200x150" width="100" height="80" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
                    <img src="https://lipsum.app/id/63/200x150" width="100" height="80" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
                    <img src="https://lipsum.app/id/64/200x150" width="100" height="80" />
                </a>

                <div class="blur-count-thumnail active" data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
                    5 +
                </div>

            </div>

        </FancyBox>

        <div class="detail">
            <h3 class="detail-main-title">ឡានលក់ប្រញាប់លុយ</h3>
            <span class="sub-title">
                <span class="subtitle-elip">Phnom Penh</span>
                <div class="dot"></div>
                <span>16mn </span>
            </span>
            <h3 class="price">$13,500</h3>
        </div>


    </section>

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
            </li><li>
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
        <p>ID: 1</p>
        <p>Like: 1</p>
        <p>Category: Post</p>

        <div class="description">
            <p>លក់រាយ​ ឬ​ ដុំ​ នឹងសាងយកទាំងអស់ក៍បាន​ មានដូចជាអំពូល​ កុងតាក់​ ឌីសុងទ័រ​ ផ្លែម៉ូទ័រ​ ខ្ចៅ​ សោ​ នឹងមានទំនិញជាច្រេីន​ ក្នុងតំលៃក្រោមទីផ្សារ​ មូលហេតុ​ ជួលឃ្លាំងអោយគេ​ បងប្អូនចាប់អារម្មណ៍​ <a><img src="" /> 0968111xxxClick To Call </a> សូមអរគុណ</p>
        </div>
        <div class="contact">
            <p><span>ព័ត៌មានទំនាក់ទំនង:</span>សូមកុំភ្លេចនិយាយថាអ្នកបានឃើញការផ្សព្វផ្សាយនេះនៅលើ ខ្មែរ២៤។</p>
        </div>
        <div class="phone-number">
            <a href=""> <img src="" alt=""/> 0968111xxx ចុចដើម្បីតេ</a>
        </div>
    
    </section>
</template>

<script setup>

const { locale } = useI18n()

const url = ref('https://images.khmer24.co/23-12-20/s-312108-4-bedroom-twin-villa-for-rent-bassac-garden-city-tonle-bassac-phnom-penh-1703038991-86555095-b.jpg')


// const { data: post, error } = await useAsyncData(
//   'cafes',
//   () => $fetch( `/feed/v1/cafes`, {
//     method: 'GET',
//     baseURL: 'https://api-posts.khmer24.com',
//     params: {
//       page: page.value,
//       search: search.value,
//     }
//   } ), {
//     watch: [
//       page,
//       search
//     ]
//   }
// );




onMounted(() => {
    if (process.client) {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
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

.safty-info > .title {
    justify-content: center;
    display: flex;
    column-gap: 16px;
    align-items: center;
    width: 100%;
}

.safty-info > .title > .safety-detail {
    font-size: 16px; 
}

.list-safty > li {
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
    /* background-image: url('https://images.khmer24.co/23-12-20/s-312108-4-bedroom-twin-villa-for-rent-bassac-garden-city-tonle-bassac-phnom-penh-1703038991-86555095-b.jpg'); */
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
