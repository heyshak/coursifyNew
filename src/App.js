import React, { Component } from "react";
import AskYourDoubts from "./components/AskYourDoubts/AskYourDoubts";
import DoubtFaster from "./components/DoubtFaster/DoubtFaster";
import Experts from "./components/Experts/Experts";
import ExploreOurSubject from "./components/ExploreOurSubjects/ExploreOurSubject";
import FreeAccessBook from "./components/FreeAccessBook/FreeAccessBook";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import JeeMain from "./components/JeeMain/JeeMain";
import LiveClasses from "./components/LiveClasses/LiveClasses";
import Navigationbar from "./components/NavigationBar/Navigationbar";
import Neet from "./components/Neet/Neet";
import StateBoards from "./components/StateBoards/StateBoards";
import StudentReview from "./components/StudentReview/StudentReview";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigationbar />
        <AskYourDoubts />
        <DoubtFaster />
        <HowItWorks />
        <LiveClasses />
        <JeeMain />
        <Neet />
        <ExploreOurSubject />
        <FreeAccessBook />
        <StateBoards />
        <Experts />
        <StudentReview />
      </div>
    );
  }
}
