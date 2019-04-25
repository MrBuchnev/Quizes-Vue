import EventBus from '../../EventBus';

export default {
    props: {
        test: {
            type: Object,
            required: true,
            default: () => ({}),
        },

        userName: {
            type: String,
            required: true,
            default: '',
        },

        testResults: {
            type: Array,
            required: true,
            default: () => [],
        },
    },

    computed: {
        numberOfCorrectAnswers () {
            return this.testResults.filter(answer => answer).length;
        },
    },

    methods: {
        backToLanding () {
            EventBus.$emit('back-to-landing');
        },
    },
};
