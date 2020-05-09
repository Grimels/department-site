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
                    <Route path='/applicants/bach' exact component={Applicants}/>
                    <Route path='/applicants/magistracy' exact component={Masters}/>
                    <Route path='/student/disciplines' exact component={Student}/>
                    <Route path='/student/methodics' exact component={MethodicalSupport}/>
                    <Route path='/articles/scientific/articles' exact component={ScientificActivity}/>
                    <Route path='/articles/scientific/events' exact component={Events}/>
                    <Route path='/articles/scientific/developments' exact component={ScientificDevelopments}/>
                    <Route path='/news' exact component={News} />
                    <Route path='/news/:id' exact component={NewsItem} />
                </Switch>
                <Footer />
                { hasError && <Alert style={{ position: 'absolute' }} color='danger'>{error}</Alert> }
            </Route>
        </Switch>
    );
}