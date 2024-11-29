export default function Driving() {
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-green-500 font-bold">
                <div className="rounded-2xl backdrop-blur-xl bg-white/30 p-5 shadow-lg mx-5">
                    <h1 className="text-end text-2xl">
                        آموزش رانندگی خصوصی
                    </h1>
                    <hr className="my-5"/>
                    <ul dir="rtl" className="mt-5 space-y-2 list-disc ms-5">
                        <li>
                            <p>
                        آموزش رانندگی به افرادی که گواهینامه دارند ولی مهارت کافی ندارند
                            </p>
                        </li>
                        <li>
                            <p>
                                آموزش رانندگی در شرایط سخت
                            </p>
                        </li>
                        <li>
                            <p>
                                توسط مربی مجرب با 35 سال سابقه آموزش
                            </p>
                        </li>
                    </ul>
                    <div className="mt-10 text-end bg-gray-500 rounded-xl p-2">
                        <p>
                            برای دریافت اطلاعات بیشتر با شماره زیر تماس حاصل فرمایید
                        </p>
                        <div className="text-center flex justify-between items-center mt-2">
                            <div className="flex justify-between items-start space-x-2">
                                <a href="tel:+989127833195" className="p-2 rounded-full bg-gray-600 hover:shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="size-6">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                            clipRule="evenodd"/>
                                    </svg>  
                                </a>
                                <a href="tel:+989127833195" className="py-2 px-3 rounded-full bg-gray-600 hover:shadow-lg">
                                    ۰۹۱۲۷۸۳۳۲۹۵
                                </a> 
                            </div>
                            {/* <Image src="/eitaa.svg" alt="eitaa" width="30" height="30" className=""/> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}