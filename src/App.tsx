import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './layout';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NowPlaying, Popular, TopRated, Upcoming, Details, Similar, Credits, Recommendation } from './pages';

function App() {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Routes>
        <Route path="/" element={<NowPlaying />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/similar/:id" element={<Similar />} />
        <Route path="/credits/:id" element={<Credits />} />
        <Route path="/recommendation/:id" element={<Recommendation />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
