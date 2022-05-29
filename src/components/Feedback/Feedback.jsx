import { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

const options = ['good', 'neutral', 'bad'];

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = feedbackName => {
    setState(prevState => {
      return {
        ...prevState,
        [feedbackName]: prevState[feedbackName] + 1,
      };
    });
    console.log(feedbackName);
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const { good, neutral, bad } = state;
  return (
    <div>
      <Section title="Please leave vote">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {!total && <Notification message="No feedback given" />}
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

// class Feedback extends Component {
//     state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//     }

//     onLeaveFeedback = (feedbackName) => {
//         this.setState(prevState => {
//             return {
//                 [feedbackName]: prevState[feedbackName] + 1,
//             }
//         })
//     }

//     countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state
//         return good + neutral + bad
//     }

//     countPositiveFeedbackPercentage = () => {
//         const total= this.countTotalFeedback()
//         const { good} = this.state
//         return Math.round(good / total *100)
//     }

//     render() {
//         const { good, neutral, bad } = this.state
//         const { onLeaveFeedback } = this
//         const total = this.countTotalFeedback()
//         const positivePercentage= this.countPositiveFeedbackPercentage()

//         return (
//             <div>
//                 <Section title='Please leave vote' >
//                     <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
//                 </Section>
//                 <Section title='Statistics'>
//                     {!total && <Notification message='No feedback given'/>}
//                     {total > 0 && <Statistics good={good} neutral={neutral} bad={bad} total={total} percent={positivePercentage}/>}
//                 </Section>
//             </div>
//         )
//     }
// }

export default Feedback;
