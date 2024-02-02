<template>
        <div class="footer-container">
            <a href="" class="like">
                <Icon class="heart-icon" icon="tabler:heart" />
                <!-- <p v-if="like > 0">{{ props.like }}</p>                 -->
            </a>
            <div class="chat-call-button">
                <button class="bt1">
                    <Icon icon="mdi:call" />
                </button>
                <button>
                    <Icon icon="heroicons-solid:chat" />
                </button>
            </div>
        </div>
</template>


<script setup>

const props = defineProps(['like'])

// console.log(like)

</script>
<style scoped>

.footer-container > .like {
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 32px;
    color: gray !important;
}

.footer-container > .like svg {
    font-size: 32px;
}

.footer-container > .like p {
    font-size: 16px;
}
.chat-call-button {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    width: 100%;
    padding: 8px;
    column-gap: 10px;
}

.chat-call-button > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: white;
    width: 50%;
    border-radius: 4px;
    font-size: 32px;
}
.chat-call-button > :nth-child(1) {
    background: var(--active);
}

.chat-call-button > :nth-child(2) {
    background: var(--bg-orange);
}


</style>

