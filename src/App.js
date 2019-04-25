import Landing from './components/Landing/Landing.vue';
import Test from './components/Test/Test.vue';
import Results from './components/Results/Results.vue';
import EventBus from './EventBus';

import testList from './assets/testList.json';


export default {
    name: 'app',
    components: {
        Landing,
        Test,
        Results
    },

    data () {
        return {
            tests: testList,
            selectedTestId: null,
            userName: '',
            testResults: '',
            showLandingPage: true,
            showTestPage: false,
            showResultsPage: false,
        };
    },

    created () {
        EventBus.$on('show-test-page', payload => {
            this.selectedTestId = payload.testId;
            this.userName = payload.userName;
            this.showLandingPage = false;
            this.showTestPage = true;
            this.showResultsPage = false;
         });

        EventBus.$on('show-results-page', testResults => {
            this.testResults = testResults;
            this.showLandingPage = false;
            this.showTestPage = false;
            this.showResultsPage = true;
         });

        EventBus.$on('back-to-landing', () => {
            this.selectedTestId = '';
            this.userName = '';
            this.testResults = '';
            this.showLandingPage = true;
            this.showTestPage = false;
            this.showResultsPage = false;
         });
    },

    computed: {
        chosenTest () {
            return this.tests.find(test => test.id === this.selectedTestId);
        },
    },
};
