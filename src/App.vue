<template>
    <div id="app">
        <landing
            v-if="showLandingPage"
            :tests="tests"/>
        <test
            v-if="showTestPage && chosenTest"
            :test="chosenTest"/>
        <results
            v-if="showResultsPage"
            :test="chosenTest"
            :user-name="userName"
            :test-results="testResults"
            @restart-test="restartTest()"/>
    </div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="./styles/main.scss"></style>
