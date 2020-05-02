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
import { ScientificActivity } from 'components/ScientificActivity';
import { Footer } from 'components/Footer';
import { News } from 'components/News';
import { NewsItem } from 'components/News/NewsItem';

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
                    <Route path='/applicants' exact component={Applicants}/>
                    <Route path='/student' exact component={Student}/>
                    <Route path='/articles/scientific' exact component={ScientificActivity}/>
                    <Route path='/news' exact component={News} />
                    <Route path='/news/:id' exact component={NewsItem} />
                </Switch>
                <Footer />
                { hasError && <Alert style={{ position: 'absolute' }} color='danger'>{error}</Alert> }
            </Route>
        </Switch>
    );
}