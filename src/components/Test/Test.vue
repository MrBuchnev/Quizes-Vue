<template>
    <div class="test">
        <div class="test__wrapper">
            <div v-for="(item, index) in test.data" :key="index">
                <div
                    v-if="item.id === currentQuestionId"
                    :key="item.id"
                    class="test__form">
                    <h1 class="test__heading">{{ item.question }}</h1>

                    <ul class="test__answers">
                        <li
                            v-for="(answer, index) in item.answers"
                            :key="index"
                            class="test__answer">
                            <button
                                @click="selectAnswer(answer.isCorrect, answer.id)"
                                class="test__button test__button--answer"
                                :class="getSelectedAnswerClass(answer.id)">
                                {{ answer.value }}
                            </button>
                        </li>
                    </ul>

                    <div class="test__progress-bar">
                        <p v-if="noAnswerError" class="test__error">Please select an answer</p>
                        <div
                            v-for="(item, index) in test.data"
                            :key="item.id"
                            class="test__progress-bar-part"
                            :class="getProgressBarPartBackground(index)"
                            :style="getProgressBarPartWidth(test.data.length)">
                        </div>
                    </div>

                    <button class="test__button test__button--submit" @click="goToNextQuestion()">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Test.js"></script>
<style lang="scss" src="./Test.scss" scoped></style>
