import { useMultistepForm } from '@/hooks/useMultistepFrom';
import { FaApple, FaFacebookF } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import Input from './Input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import LockIcon from '@/assets/icons/LockIcon';
import EmailIcon from '@/assets/icons/EmailIcon';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const SignIn = () => {
  const { handleSubmit, control } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { step, next, back, isFirstStep, isLastStep } = useMultistepForm([
    <Input
      type="email"
      label="Email Address"
      placeholder="example@gmail.com"
      name="email"
      control={control}
      icon={<EmailIcon size={24} />}
    />,
    <Input
      type="password"
      label="Password"
      placeholder="Your password"
      name="password"
      control={control}
      icon={<LockIcon size={24} />}
    />,
  ]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {step}
        <div className={`${!isFirstStep ? 'flex' : ''}`}>
          {!isFirstStep && (
            <button
              className={`${!isFirstStep ? 'rounded-l-xl' : 'rounded-xl'} w-full space-x-2 border-b border-l border-t border-[#0166FF] py-4 text-sm text-black`}
              onClick={back}
            >
              <span>←</span>
              <span>Go back</span>
            </button>
          )}
          <button
            type={isLastStep ? 'submit' : 'button'}
            className={`${!isFirstStep ? 'rounded-r-xl' : 'rounded-2xl'} w-full border border-transparent bg-[#0166FF] py-4 text-sm text-white`}
            onClick={isLastStep ? undefined : next}
          >
            {isLastStep ? 'Signin' : 'Continue'}
          </button>
        </div>
        <div className="flex items-center gap-4 pt-4">
          <div className="h-[2px] w-full bg-slate-200" />
          <span className="whitespace-nowrap text-sm text-black/50">
            Or Continue With
          </span>
          <div className="h-[2px] w-full bg-slate-200" />
        </div>
      </form>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="rounded-full border p-4">
          <FcGoogle size={24} />
        </div>
        <div className="rounded-full bg-black p-4">
          <FaApple className="text-white" size={24} />
        </div>
        <div className="rounded-full bg-blue-600 p-4 text-white">
          <FaFacebookF size={24} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
