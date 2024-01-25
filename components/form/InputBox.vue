<template>
    <div class="input-box-container">
        <label for="input">{{ props.label }}</label>
        <input type="text" id="input" v-model="search" />
    </div>
</template>

<script setup> 
import '~/assets/css/form.css'


const props = defineProps(['label'])
const search = defineModel()

</script>