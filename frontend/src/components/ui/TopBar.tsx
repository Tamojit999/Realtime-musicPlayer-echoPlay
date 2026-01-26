import { SignedOut, UserButton } from '@clerk/clerk-react';

import { Link } from 'react-router-dom';
import SignInOAuthButton from './SignInOAuthButton';
import { buttonVariants } from './button';
import { useAuthStore } from '@/stores/useAuthStore';
import { cn } from '@/lib/utils';
const TopBar = () => {
  const { isAdmin } = useAuthStore();
  return (
    <>
      <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md  z-10">
        <div className="flex gap-2 items-center">
          <img
            src="/new.png"
            alt="EchoPlay logo"
            className="
    h-8
    sm:h-11
    md:h-13
    w-auto
    object-contain
  "
          />
        </div>
        <div className="flex gap-4 items-center">
          {isAdmin && (<Link to="/admin" className={cn(buttonVariants({ variant: 'ghost', className: 'text-white' }))}> Admin </Link>)

          }



          <SignedOut> {/*SignedOut from clerk*/}
            < SignInOAuthButton />
          </SignedOut>

          <UserButton />
        </div>
      </div>
    </>
  )
}

export default TopBar