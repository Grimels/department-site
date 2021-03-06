import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Alert } from 'styled/Alert';

import { useSelector } from 'react-redux';
import { StoreState } from 'store';

import { Admin } from 'components/Admin';
import { NavBar } from 'components/NavBar';
import { HomePage } from 'components/HomePage';
import { AboutDepartment } from 'components/AboutDepartment';
import { Applicants } from 'components/Applicants';
import { Student } from 'components/Student';
import { Events, ScientificActivity, ScientificDevelopments } from 'components/ScientificActivity';
import { Footer } from 'components/Footer';
import { News } from 'components/News';
import { NewsItem } from 'components/News/NewsItem';
import { MethodicalSupport } from 'components/Student/MethodicalSupport';
import { Masters } from 'components/Applicants/Masters';
import { AboutSpeciality } from 'components/AboutSpeciality';
import { DefendedDissertations } from 'components/ScientificActivity/DefendedDissertations';
import { BussinessEducation, CompletedProjects, ManagementConsulting } from 'components/OurServices';

export const Routes = () => {
    const { hasError, error } = useSelector((state: StoreState) => state.errorReducer);
    return (
        <Switch>
            <Route path='/admin' component={Admin}/>
            <Route path='/'>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/department' exact component={AboutDepartment}/>
                    <Route path='/speciality' exact component={AboutSpeciality}/>
                    <Route path='/applicants/bach' exact component={Applicants}/>
                    <Route path='/applicants/magistracy' exact component={Masters}/>
                    <Route path='/student/disciplines' exact component={Student}/>
                    <Route path='/student/methodics' exact component={MethodicalSupport}/>
                    <Route path='/scientific/articles' exact component={ScientificActivity}/>
                    <Route path='/scientific/events' exact component={Events}/>
                    <Route path='/scientific/developments' exact component={ScientificDevelopments}/>
                    <Route path='/scientific/dissertations' exact component={DefendedDissertations}/>
                    <Route path='/services/consulting' exact component={ManagementConsulting}/>
                    <Route path='/services/projects' exact component={CompletedProjects}/>
                    <Route path='/services/training' exact component={BussinessEducation}/>
                    <Route path='/news' exact component={News} />
                    <Route path='/news/:id' exact component={NewsItem} />
                </Switch>
                <Footer />
                { hasError && <Alert style={{ position: 'absolute' }} color='danger'>{error}</Alert> }
            </Route>
        </Switch>
    );
}