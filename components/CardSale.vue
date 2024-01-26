<template>
        <div class="card-container">
            <div class="sale-card-description">
                <p class="question-impresion">Want to see your ads here?</p>
                <p class="promote-title">Make some extra cash by selling this in khmer24. Go on. it's quick and easy.</p>
            </div>
            <button>Start Selling</button>
        </div>
</template>
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