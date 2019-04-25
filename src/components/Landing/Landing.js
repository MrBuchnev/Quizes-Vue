import EventBus from '../../EventBus';

export default {
    props: {
        tests: {
            type: Array,
            required: true,
            default: () => [],
        },
    },

    data () {
        return {
            errorMessage: '',
            inputValue: '',
            selectValue: '',
        };
    },

    methods: {
        checkForm () {
            this.errorMessage = '';
            if (this.inputValue.length > 0 && this.selectValue) {
                return this.proceedToTest();
            }

            this.errorMessage = 'Please check if the form is filled correctly';
        },

        proceedToTest () {
            const payload = {
                userName: this.inputValue,
                testId: this.selectValue
            };
            EventBus.$emit('show-test-page', payload);
        },
    },
};
