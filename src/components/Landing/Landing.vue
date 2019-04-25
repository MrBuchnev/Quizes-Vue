<template>
    <div class="landing">
        <div class="landing__wrapper">
            <div class="landing__form">
                <h1 class="landing__heading">Technical Task</h1>
                <p class="landing__error-message">{{ errorMessage }}</p>
                <input
                    type="text" 
                    class="landing__input"
                    placeholder="Enter your name"
                    maxlength="10"
                    v-model="inputValue">
                <select class="landing__select" v-model="selectValue">
                    <option value="" class="landing__select--disabled">Select test</option>
                    <option
                        v-for="test in tests"
                        :key="test.id"
                        :value="test.id">
                        {{ test.name }}
                    </option>
                </select>
                <button class="landing__button" @click="checkForm()">Start</button>
            </div>
        </div>
    </div>
</template>

<script src="./Landing.js"></script>
<style lang="scss" src="./Landing.scss" scoped></style>
