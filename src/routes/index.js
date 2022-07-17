import { HeaderOnlyLayout } from '~/components/Layouts';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import routesConfig from '~/config/routes.js';
export const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: '/profile', component: Profile, layout: HeaderOnlyLayout },
    { path: routesConfig.upload, component: Upload, layout: null },
    { path: routesConfig.frofile, component: Profile },
];
export const privateRoutes = [];
