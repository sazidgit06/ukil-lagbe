import React from 'react'
import img10 from "../../assets/img10.webp"

const Accordion = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='font-bold text-2xl mb-5 mt-5'>কীভাবে ট্রাক লাগবে অ্যাপ থেকে ট্রাক ভাড়া করবেন?</h2>
                <p className='text-sm mb-10'>সহজ এবং দ্রুত ট্রাক ভাড়ার প্রক্রিয়া</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='lg:w-1/2'>
                    <div className="join join-vertical bg-base-100">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-2xl font-semibold">1. অ্যাপটি ডাউনলোড করে সাইন আপ করুন</div>
                            <div className="collapse-content text-sm flex flex-col">গুগল প্লে স্টোর থেকে ট্রাক লাগবে অ্যাপটি ইনস্টল করে অ্যাপে রেজিস্ট্রেশন সম্পন্ন
                                <a href="https://play.google.com/store/games?device=windows">
                                    <button className='bg-[#000000] w-40 rounded-lg cursor-pointer mt-5'>
                                    <div className='flex justify-center gap-2'>
                                        <img className='w-5' src="https://img.icons8.com/fluency/48/google-play-store-new.png" alt="google-play-store-new" />
                                        <div className='text-white'>
                                            <h2 className='text-xs'>Get it on</h2>
                                            <p className='text-lg'>Google play</p>
                                        </div>
                                    </div>
                                </button>
                                </a>
                            </div>

                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">২. লোকেশন সিলেক্ট করুন
                            </div>
                            <div className="collapse-content  text-sm">মালামালের লোড পয়েন্ট এবং আনলোড পয়েন্ট সিলেক্ট করুন।</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">৫. ট্রিপ পাবলিশ করুন

                            </div>
                            <div className="collapse-content  text-sm">অবশেষে ট্রিপটি পাবলিশ করুন। এরপর আপনার প্রয়োজন অনুযায়ী ট্রাকের সাথে ট্রিপটি ট্যাগ হয়ে যাবে। এখন নিশ্চিন্তে মালামাল পরিবহনের পাশাপাশি উপভোগ করুন অ্যাপের অন্যান্য ফিচার ও স্পেশাল অফার।</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">৩. উপযুক্ত ট্রাকের ধরন নির্বাচন করুন
                            </div>
                            <div className="collapse-content  text-sm">মালামালের লোড পয়েন্ট এবং আনলোড পয়েন্ট সিলেক্ট করুন।</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">৪. তারিখ, সময় এবং অন্যান্য তথ্য প্রদান করুন
                            </div>
                            <div className="collapse-content  text-sm">মালামালের লোড পয়েন্ট এবং আনলোড পয়েন্ট সিলেক্ট করুন।</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-2xl font-semibold">২. লোকেশন সিলেক্ট করুন
                            </div>
                            <div className="collapse-content  text-sm">মালামালের লোড পয়েন্ট এবং আনলোড পয়েন্ট সিলেক্ট করুন।</div>
                        </div>

                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <img className='rounded-xl' src={img10} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Accordion
