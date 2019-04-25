import EventBus from '../../EventBus';

export default {
    props: {
        test: {
            type: Object,
            required: true,
            default: () => ({}),
        },
    },

    data () {
        return {
            currentQuestionId: 1,
            currentAnswerValue: '',
            currentAnswerId: '',
            testAnswers: [],
            answeredQuestions: [],
            noAnswerError: false,
        };
    },

    methods: {
        selectAnswer (answerValue, answerId) {
            this.currentAnswerValue = answerValue;
            this.currentAnswerId = answerId;
            this.noAnswerError = false;
        },

        getSelectedAnswerClass (answerId) {
            return answerId === this.currentAnswerId ? 'bg-blue' : 'bg-light';
        },

        getProgressBarPartWidth (numberOfQuestions) {
            return 'width: calc(100% / ' + numberOfQuestions + ' - 1%)';
        },

        getProgressBarPartBackground (questionIndex) {
            return questionIndex <= this.answeredQuestions.length ? 'bg-blue' : 'bg-light';
        },

        goToNextQuestion () {
            if (this.currentAnswerValue || this.currentAnswerId) {
                this.testAnswers.push(this.currentAnswerValue);
                this.answeredQuestions.push(this.currentAnswerId);
                this.currentAnswerValue = '';
                this.currentAnswerId = '';
                this.currentQuestionId++;
                this.noAnswerError = false;

                const noQuestionsRemaining = !this.test.data.find(question => question.id === this.currentQuestionId);
                if (noQuestionsRemaining) {
                    EventBus.$emit('show-results-page', this.testAnswers);
                }
            }

            else this.noAnswerError = true;
        },
    },
};
