import { useEffect, useState } from 'react'
import {  Outlet } from 'react-router-dom'
import Split from "react-split";
import LeftSidebar from './components/LeftSidebar';
import PlaybackControls from './components/PlaybackControls';
const MainLayout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (

    <div className='h-screen bg-black text-white flex flex-col'>


      {!isMobile ? (
        <Split direction="horizontal" className="flex-1 flex h-full overflow-hidden p-2" gutterSize={8}
          sizes={[20, 80, 20]}      // default widths (percent)
          minSize={[10, 40]}     // matches your constraints
          maxSize={[30, 9999]} >

          {/* LEFT SIDEBAR */}
          <div className="h-full">
            <LeftSidebar />
          </div>

          {/* MAIN OUTLET CONTENT */}
          <div className="h-full overflow-auto">
            <Outlet />
          </div>

        
        </Split>) : (
          <Split direction="horizontal" className="flex-1 flex h-full overflow-hidden py-1" gutterSize={8}  sizes={[20, 80]} minSize={[10, 40]}>
              <div  className="h-full overflow-auto">
            <LeftSidebar />
          </div>
          <div className="h-full overflow-auto">
              <Outlet />
            </div>
          </Split>
           

      )
       
      }
     <PlaybackControls />

      




    </div>

  )
}

export default MainLayout