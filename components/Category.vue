<template>
    <div class="category-container">
        <div class="icon-catecgory">
            <div>    
                <img class="icon-catecgory-img" :src="props.item.icon.url" alt="" />
            </div>
        </div>
        <p class="main-title">
            {{ locale === 'en' ? props.item.en_name :  props.item.km_name}}
        </p>
    </div>
</template>

<script lang="js" setup>

const { locale } = useI18n()

const props = defineProps(['item'])

</script>
