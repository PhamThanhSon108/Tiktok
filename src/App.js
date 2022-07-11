import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';
function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((value) => {
                            const Page = value.component;
                            let Layout = DefaultLayout;
                            if (value.layout) {
                                Layout = value.layout;
                            }
                            if (value.layout === null) {
                                Layout = Fragment;
                            }
                            return (
                                <Route
                                    path={value.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
