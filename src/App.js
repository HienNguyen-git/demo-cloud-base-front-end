import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllStories = React.lazy(() => import("./pages/AllStories"));
const NewStory = React.lazy(() => import("./pages/NewStory"));
const StoryDetail = React.lazy(() => import("./pages/StoryDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="stories" />
          </Route>
          <Route path="/stories" exact>
            <AllStories />
          </Route>
          <Route path="/stories/:storyID">
            <StoryDetail />
          </Route>
          <Route path="/new-story">
            <NewStory />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
