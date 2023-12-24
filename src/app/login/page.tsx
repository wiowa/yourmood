'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { createUser } from '../actions/user';
const initialState = {
  email: null,
  password: null,
};
const Login = () => {
  const [state, formAction] = useFormState(createUser, initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className='flex justify-center items-center min-h-screen '>
      <div className='flex flex-col items-center justify-center border-[1px] w-[30%] p-10 rounded-lg'>
        <h1 className='py-10'>Login</h1>
        <form className='flex flex-col w-[80%]' onSubmit={handleSubmit}>
          <Input
            className='mb-2'
            placeholder='Email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className='mb-5'
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type='submit'>Login</Button>
          <Separator />
        </form>
      </div>
    </div>
  );
};

export default Login;
