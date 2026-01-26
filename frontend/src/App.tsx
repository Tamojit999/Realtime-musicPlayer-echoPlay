import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AuthCallbackPage from "./pages/Auth-Callback/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";
import AlbumPage from "./pages/Album/AlbumPage";
import AudioPlayer from  "./layout/components/AudioPlayer";
import AdminPage from "./pages/Admin/AdminPage";
import {Toaster} from 'react-hot-toast';
import NotFoundPage from "./pages/404/NotFoundPage";


function App() {
	return (
		<>
		 <AudioPlayer />
			<Routes>
				<Route
					path='/sso-callback'
					element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />}
				/>
				<Route path='/auth-callback' element={<AuthCallbackPage />} />
				<Route path='/admin' element={<AdminPage/>} />
				<Route element={<MainLayout/>}>
				<Route path='/' element={<HomePage />} />
				<Route path='*' element={<NotFoundPage/>} />
				<Route path='/albums/:albumId' element={<AlbumPage />} />
				</Route>
					
			</Routes>
			<Toaster/>
		
		</>
	);
}

export default App;