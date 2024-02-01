<template>
        <div class="footer-container">
            <a href="" class="like">
                <Icon class="heart-icon" icon="tabler:heart" />
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

<style scoped>

.footer-container > .like {
    height: 100%;
    font-size: 32px;
    padding: 0 32px;
    color: gray;
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

