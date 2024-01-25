<template>
    <div class="container">
        <div class="language">
            <img src="~/assets/img/icons/kh-flag.webp" alt="">
            <form>
                <select v-model="locale">
                    <option value="en">en</option>
                    <option value="kh">kh</option>
                </select>
            </form>
        </div>
        <div class="title"><a href="/en">{{ $t('Khmer24') }}</a></div>
        <button class="search">
            <Icon  class="search-icon" icon="iconamoon:search" />
        </button>
    </div>
</template>


<script setup lang="js">

const { locale } = useI18n()

import '~/assets/css/header.css'


</script>