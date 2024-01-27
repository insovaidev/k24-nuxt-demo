<template>
        <div class="card-container">
            <div class="sale-card-description">
                <p class="question-impresion">{{ $t('new_text_3.ads_new_title') }}</p>
                <p class="promote-title">{{ $t('new_text_3.ads_new_sub_title') }}</p>
            </div>
            <button>{{ $t('new_text_3.start_selling') }}</button>
        </div>
</template>


<!-- {{ locale === 'en' ? props.item.en_name :  props.item.km_name}} -->

<script setup>
    const { locale } = useI18n()

</script>

<style scoped>
.card-container {
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(11,11,171,1) 22%, rgba(0,212,255,1) 100%);
    padding: 16px 25px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    border-radius: 6px;
    width: 450px;
    height: 370px;
    overflow: hidden;

}

.card-container > .sale-card-description {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    line-height: 1.2;
}

.card-container > button {
    font-size: 16px;
    font-weight: 500;
    border: none;
    color: blue;
    padding: 16px 0;
    border-radius: 6px;
    background-color: white;
}

.card-container > button:hover {
    color: black;
    cursor: pointer;
}
.question-impresion {
    font-size: 24px;
}
.promote-title {
    word-wrap: break-word;
    text-align: center; 
}


</style>