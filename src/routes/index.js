import { HeaderOnlyLayout } from '~/components/Layouts';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    // { path: '/profile', component: Profile, layout: HeaderOnlyLayout },
    { path: '/upload', component: Upload, layout: null },
    { path: '/@:nickname', component: Profile },
];
export const privateRoutes = [];
