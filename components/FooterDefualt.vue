<template>
    <div class="footer-container">
        <div class="nav-item active">
            <Icon class="icon" icon="fa-solid:home" />
            <p>Home</p>
        </div>
        <div class="nav-item ">
            <Icon icon="mdi:notifications" />
            <p>Notification</p>
        </div><div class="nav-item ">
            <div class="camera">
                <Icon icon="mdi:camera-plus" />
            </div>
        </div><div class="nav-item ">
            <Icon icon="bi:chat-dots-fill" />
            <p>Chat</p>
        </div><div class="nav-item ">
            <Icon icon="ic:round-account-circle" />
            <p>Account</p>
        </div>
    </div>
</template>

<style scoped>


.footer-container > .nav-item {
    cursor: pointer;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;    

}

.footer-container > .nav-item > svg 
{
    color: gray;
    font-size: 24px;
}

.footer-container > .active > p, .active > svg   {
    color: var(--active) !important;
}

.footer-container > .icon {
    font-size: 32px;   
}

.camera {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    padding: 6px;
    background-color: var(--bg-orange);
}

.camera > svg {
    color: white;
    font-size: 32px;
}


</style>