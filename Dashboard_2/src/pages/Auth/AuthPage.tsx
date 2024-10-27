import image from '@/assets/images/auth.png';
import logo from '@/assets/images/logo2.png';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignIn from './components/Signin';

const AuthPage = () => {
  return (
    <div className="poppins-medium flex h-screen">
      <div className="flex flex-1 flex-col justify-between gap-8 p-1 sm:p-4">
        <h1 className="mx-auto mt-2 flex items-center">
          <img src={logo} alt="Logo" width={48} />
          <span>SmartSave</span>
        </h1>
        <div className="mx-auto w-full max-w-[360px] space-y-3 sm:max-w-[400px]">
          <h2 className="poppins-semibold text-center text-2xl">
            Welcome Back
          </h2>
          <p className="text-center text-sm text-neutral-500">
            Welcome Back, Please enter Your details
          </p>
          <Tabs defaultValue="signin" className="md:w-[400px]">
            <TabsList>
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <SignIn />
            </TabsContent>
            <TabsContent value="signup">SignUp.</TabsContent>
          </Tabs>
        </div>
        <footer className="poppins-light mx-auto max-w-[600px] text-pretty text-center text-xs tracking-tight text-neutral-500">
          Join the millions of smart investors who trust us to manage their
          finances. Log in to access your personalized dashboard, track your
          portfolio performance, and make informed investment decisions.
        </footer>
      </div>
      <div className="hidden flex-1 md:block">
        <img
          src={image}
          alt="Auth image"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default AuthPage;
