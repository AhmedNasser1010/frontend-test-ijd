'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

export default function RegistrationDialog({ handleSetActive }: { handleSetActive: (value: boolean) => void }): React.ReactNode {
  const [currentForm, setCurrentForm] = useState<'login' | 'signup'>('login')
  const [loginFormInformation, setLoginFormInformation] = useState({
    email: '',
    password: '',
    remember: false
  })
  const [loginFormIsBasicValid, setLoginFormIsBasicValid] = useState(false)
  const [signupFormInformation, setSignupFormInformation] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  })
  const [signupFormIsBasicValid, setSignupFormIsBasicValid] = useState(false)

  const handleSetCurrentForm = () => {
    setCurrentForm(currentForm === 'login' ? 'signup' : 'login')
  }

  const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'checkbox') {
      setLoginFormInformation({
        ...loginFormInformation,
        [e.target.name]: e.target.checked
      })
    } else {
      setLoginFormInformation({
        ...loginFormInformation,
        [e.target.name]: e.target.value
      })
    }
    setLoginFormIsBasicValid(loginFormInformation.email && loginFormInformation.password ? true : false)
  }

  const handleSignupFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupFormInformation({
      ...signupFormInformation,
      [e.target.name]: e.target.value
    })

    // Basic validation - check if all required fields are filled
    const { name, email, phone, password } = signupFormInformation;
    setSignupFormIsBasicValid(
      name.trim() !== '' &&
      email.trim() !== '' &&
      phone.trim() !== '' &&
      password.trim() !== ''
    );
  }

  const handleLoginFormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log(loginFormInformation)
  }

  const handleSignupFormSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log(signupFormInformation)
  }

  return (
    <div className='fixed top-0 left-0 bg-[#313131A6] flex justify-center items-center w-full h-screen z-1'>
      <div className="relative rounded-[15px] overflow-hidden min-w-[560px]">
        <div className="bg-primary flex justify-center items-center p-[30px]">
          <IoClose className="absolute top-6 left-6 cursor-pointer text-white text-[30px]" onClick={() => handleSetActive(false)} />
          <Image src='/sec-logo.svg' width={202} height={68} alt='logo' aria-hidden />
        </div>
        <div className='px-[50px] py-[40px] bg-white'>

          {/* Login form */}
          {
            currentForm === 'login' &&
            <div>
              <form className='flex flex-col gap-6'>
                <label className='flex flex-col gap-1.5'>
                  <span className='text-[18px] leading-[40px]'>البريد الإلكتروني</span>
                  <input inputMode='email' type="email" className='border-2 border-muted rounded-[10px] p-3' name='email' onChange={handleLoginFormChange} value={loginFormInformation.email} />
                </label>
                <label className='flex flex-col gap-1.5'>
                  <span className='text-[18px] leading-[40px]'>كلمة المرور</span>
                  <input type="password" className='border-2 border-muted rounded-[10px] p-3' name='password' onChange={handleLoginFormChange} value={loginFormInformation.password} />
                </label>
                <div className='flex justify-between items-center mt-[-5px]'>
                  <label className='flex items-center gap-[9px]'>
                    <input type="checkbox" className='w-[18px] h-[18px] rounded-[2px]' name='remember' onChange={handleLoginFormChange} checked={loginFormInformation.remember} />
                    <span className='text-[15px]'>تذكرني</span>
                  </label>

                  <Link href='#' className='text-primary text-[15px] font-bold'>نسيت كلمة المرور؟</Link>
                </div>

                <button onClick={(e) => handleLoginFormSubmit(e)} disabled={!loginFormIsBasicValid} className={`${loginFormIsBasicValid ? 'bg-primary' : 'bg-muted'} text-white text-[20px] leading-[40px] cursor-pointer font-bold rounded-[10px] py-3 mt-[5px]`}>تسجيل دخول</button>
              </form>
            </div>
          }

          {/* Signup form */}
          <div>
            {
              currentForm === 'signup' &&
              <div>
                <form className='flex flex-col gap-6'>
                  <label className='flex flex-col gap-1.5'>
                    <span className='text-[18px] leading-[40px]'>الاسم بالكامل</span>
                    <input
                      type="text"
                      className='border-2 border-muted rounded-[10px] p-3'
                      name='name'
                      onChange={handleSignupFormChange}
                      value={signupFormInformation.name}
                    />
                  </label>
                  <label className='flex flex-col gap-1.5'>
                    <span className='text-[18px] leading-[40px]'>البريد الإلكتروني</span>
                    <input
                      inputMode='email'
                      type="email"
                      className='border-2 border-muted rounded-[10px] p-3'
                      name='email'
                      onChange={handleSignupFormChange}
                      value={signupFormInformation.email}
                    />
                  </label>
                  <label className='flex flex-col gap-1.5'>
                    <span className='text-[18px] leading-[40px]'>رقم الهاتف</span>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center h-full">
                        <Image
                          src='/flag_and_code.svg'
                          width={80}
                          height={24}
                          alt='flag and code'
                          aria-hidden
                          className="object-contain"
                        />
                      </div>
                      <input
                        inputMode='tel'
                        type="tel"
                        className='border-2 border-muted rounded-[10px] p-3 pl-24 w-full'
                        name='phone'
                        onChange={handleSignupFormChange}
                        value={signupFormInformation.phone}
                      />
                    </div>
                  </label>
                  <label className='flex flex-col gap-1.5'>
                    <span className='text-[18px] leading-[40px]'>كلمة المرور</span>
                    <input
                      type="password"
                      className='border-2 border-muted rounded-[10px] p-3'
                      name='password'
                      onChange={handleSignupFormChange}
                      value={signupFormInformation.password}
                    />
                  </label>

                  <button
                    onClick={(e) => handleSignupFormSubmit(e)}
                    disabled={!signupFormIsBasicValid}
                    className={`${signupFormIsBasicValid ? 'bg-primary' : 'bg-muted'} text-white text-[20px] leading-[40px] cursor-pointer font-bold rounded-[10px] py-3 mt-[5px]`}
                  >
                    إنشاء حساب
                  </button>
                </form>
              </div>
            }
          </div>

          <div className='text-[18px] leading-[40px] text-center mt-[13px]'>
            {currentForm === 'login' ? (
              <>
                ليس لديك حساب؟{" "}
                <span className='text-primary pr-[13px] cursor-pointer' onClick={handleSetCurrentForm}>إنشاء حساب جديد</span>
              </>
            ) : (
              <>
                لديك حساب بالفعل؟{" "}
                <span className='text-primary pr-[13px] cursor-pointer' onClick={handleSetCurrentForm}>تسجيل الدخول</span>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}