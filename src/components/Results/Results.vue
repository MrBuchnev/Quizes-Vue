<template>
    <div class="results">
        <div class="results__wrapper">
            <div class="results__form">
                <h1 class="results__heading--big">Thanks, {{ userName }}!</h1>
                <h3 class="results__heading--small">You have successfully completed {{ test.name }}.</h3>
                <p class="results__text">You responded correctly to {{ numberOfCorrectAnswers }} out of {{ test.data.length }} questions.</p>

                <button class="results__button" @click="backToLanding()">Try again!</button>
            </div>
        </div>
    </div>
</template>

<script src="./Results.js"></script>
<style lang="scss" src="./Results.scss" scoped></style>
