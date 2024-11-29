import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { HeartIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ProfileCard = () => {
  return (
    <Card className="flex w-screen h-screen">
      <div className="w-1/3 bg-blue-500 flex flex-col items-center justify-center">
        <img src="/api/placeholder/300/300" alt="Swetlana Varma" className="rounded-full w-32 h-32" />
        <Button className="mt-4 ">Book session</Button>
      </div>
      <div className="w-2/3 p-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Swetlana Varma</h2>
              <p className="text-gray-500">Licensed Therapist</p>
            </div>
            <div className="space-x-2">
              <button className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200">
                <HeartIcon className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200">
                <PhoneIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">About me</h3>
              <p>Hello, I'm Swetlana, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 10+ years of experience, I specialize in evidence-based practices to help clients achieve personal growth and wellness.</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </div>
            <div>
              <h3 className="text-lg font-medium flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
                <span>Credentials</span>
              </h3>
              <ul className="space-y-1 mt-2">
                <li>Ph.D. in Clinical Psychology - Harvard University</li>
                <li>M.A. in Counseling - University of California, Berkeley</li>
                <li>Licensed Professional Counselor (LPC) - State of DEF</li>
                <li>Certified Cognitive Behavioral Therapist (CBT)</li>
                <li>Member, American Psychological Association (APA)</li>
                <li>10+ years of experience in individual and group therapy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
                <span>Available on</span>
              </h3>
              <ul className="space-y-1 mt-2">
                <li>In-person</li>
                <li>Video/Voice call</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default function Home() {
  return (
    <>
      <ProfileCard />
    </>
  );
}