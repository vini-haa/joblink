import React from 'react';
import RegisterLogin from './components/RegisterLogin';
import CandidateProfile from './components/CandidateProfile';
import JobSearch from './components/JobSearch';
import JobApplication from './components/JobApplication';
import CounselingServices from './components/CounselingServices';
import SkillDevelopment from './components/SkillDevelopment';
import NetworkingEvents from './components/NetworkingEvents';
import JobNotifications from './components/JobNotifications';
import FeedbackEvaluations from './components/FeedbackEvaluations';
import PostEmploymentSupport from './components/PostEmploymentSupport';

const App = () => {
    return (
        <div>
            <h1>JobLink</h1>
            <RegisterLogin />
            <CandidateProfile />
            <JobSearch />
            <JobApplication />
            <CounselingServices />
            <SkillDevelopment />
            <NetworkingEvents />
            <JobNotifications />
            <FeedbackEvaluations />
            <PostEmploymentSupport />
        </div>
    );
};

export default App;
