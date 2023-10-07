// import React, { Component } from 'react';
import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';
import css from './Section/Section.module.css';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

const initialState = { good: 0, neutral: 0, bad: 0 };
export function App() {
  const [state, setState] = useState(initialState);
  const { good, neutral, bad } = state;
  
  // leaveFeedback = option => {
  //   this.setState(prevState => ({
  //     [option]: prevState[option] + 1,
  //   }));
  // };

  const leaveFeedback = option => {  
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  // countTotalFeedback = () =>
  //   Object.values(this.state).reduce((acc, value) => acc + value, 0);

 const countTotalFeedback = () =>
    Object.values(state).reduce((acc, value) => acc + value, 0);
  
    // countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    // const value = this.countTotalFeedback();
    // return good > 0 ? Math.round((good / value) * 100) : 0;
  // };
  
  const countPositiveFeedbackPercentage = () => {
    const value = countTotalFeedback();
    return good > 0 ? Math.round((good / value) * 100) : 0;
  };
  
  const stateName = Object.keys(state);
  
  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const stateName = Object.keys(this.state)
  
    // return (
    //   <div className={css.wrapper}>
    //     <Section title="Please leave feedback">
    //       <FeedbackOptions
    //         options={stateName}
    //         onLeaveFeedback={this.leaveFeedback}
    //       />
    //     </Section>
    //     <Section title="Statistics">
    //       {this.countTotalFeedback() === 0 ? (
    //         <Notification message="There is no feedback" />
    //       ) : (
    //         <Statistics
    //           good={good}
    //           neutral={neutral}
    //           bad={bad}
    //           total={this.countTotalFeedback()}
    //           positivePercentage={this.countPositiveFeedbackPercentage()}
    //         />
    //       )}
    //     </Section>
  //   </div>
  // );
  
    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateName}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
    </div>
  );
}

