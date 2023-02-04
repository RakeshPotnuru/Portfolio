import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Navigation from './common/components/Navigation/Navigation';
import Footer from './common/components/Footer/Footer';
import CampaignBanner from './pages/Misc/CampaignBanner';
import { LoadingSpinner } from './common/components/UIElements/loadingAnimations';

/**
 * Lazy loading of components
 */
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Blogs = lazy(() => import('./pages/Blogs/Blogs'));
const Work = lazy(() => import('./pages/Work/Work'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/404/404'));
const ProfileRedirect = lazy(() =>
  import('./features/ProfileRedirect/ProfileRedirect')
);
const Profiles = lazy(() => import('./pages/Profiles/Profiles'));
const AllProjects = lazy(() => import('./pages/Work/projects/AllProjects'));
const ProjectItem = lazy(() => import('./pages/Work/projects/ProjectItem'));
const Events = lazy(() => import('./pages/Events/Events'));
const PrivacyPolicy = lazy(() => import('./pages/Misc/PrivacyPolicy'));
// const Stats = lazy(() => import('./pages/Misc/Stats'));

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <CampaignBanner />
        <Navigation />
        <React.Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />

            <Route path="/work" element={<Work />} />

            <Route path="/work/projects" element={<AllProjects />} />
            <Route path="/work/projects/:repoName" element={<ProjectItem />} />

            <Route path="/profiles/:profile" element={<ProfileRedirect />} />
            <Route path="/profiles" element={<Profiles />} />

            <Route path="/events" element={<Events />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* <Route path="/stats" element={<Stats />} /> */}

            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
