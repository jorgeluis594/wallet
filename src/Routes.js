import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from 'react'

import {
  SignInPage, 
  TransactionsPage, 
  SignUpPage, 
  EditTransactionPage,
  ProfilePage
} from "./components/pages/Pages";

import { UserProvider } from "./contexts/user";

export default function RouteOut(){
    return(
      <Router>
        <UserProvider>
         <Switch>
            <Route path="/signin" exact component={SignInPage}/>
            <Route path="/profile" exact component={ProfilePage}/>
            <Route path="/signup" exact component={SignUpPage}/>
            <Route path="/transactions" exact component={TransactionsPage}/>
            <Route path="/transactions/:id/edit" exact component={EditTransactionPage}/>
        </Switch>
        </UserProvider>
      </Router>
    );
}