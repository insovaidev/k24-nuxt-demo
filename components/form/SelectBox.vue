<template>
    <div class="input-box-container">
        <label for="select">{{ props.label }}</label>
        <input type="select" id="select" v-model="sort" />
    </div>
</template>


<script setup> 

const props = defineProps(['label'])
const sort = defineModel()

</script>
<style scoped>
.input-box-container {
    padding: 0 16px; 
    display: flex;
    flex-direction: column;
    
}

.input-box-container input {
    color: black;
    border-radius: 6px;
    height: 50px;
    padding: 3px 6px;
    /* background: #7a797952; */
    border: 1px solid lightgrey;
    outline: none;

}

.input-box-container input:focus {
    box-shadow: 0px 0px 2px 1px rgba(0,170,255,0.61);
    -webkit-box-shadow: 0px 0px 2px 1px rgba(0,170,255,0.61);
    -moz-box-shadow: 0px 0px 2px 1px rgba(0,170,255,0.61); 
} 


</style>