import React from "react";

import { Switch, Route } from "react-router-dom";
import { Store } from "../../pages/Store";
import { Cart } from "../../pages/Cart";
import { Login } from "../../pages/Login";
import { Profile } from "../../pages/Profile";
import { ProfileEdit } from "../../pages/ProfileEdit";
import { Payment } from "../../pages/Payment";
import { Individual } from "../../pages/Individual";

export const RoutesComponents = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/store" component={Store} />
      <Route path="/produts/:id" component={Individual} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/payment/:price" component={Payment} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/edit" component={ProfileEdit} />
    </Switch>
  );
};
