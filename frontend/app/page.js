

// export default function Home() {
//   return (
//    <>
//    <h1>Start of assignment</h1>
//    </>
//   );
// }

"use-client"

import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProfileCard = () => {
  return (
    <Card className="flex flex-row w-full max-w-4xl">
      <div className="w-1/3 bg-gray-200 flex items-center justify-center">
        <img src="/api/placeholder/300/300" alt="Profile" className="rounded-full w-32 h-32" />
      </div>
      <div className="w-2/3 p-6">
        <CardHeader>
          <h2 className="text-2xl font-bold">Swetlana Varnna</h2>
          <p className="text-gray-500">Licensed Therapist</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <h3 className="text-lg font-medium">About me</h3>
              <p>Hello, I'm Swetlana, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 10+ years of experience, I specialize in evidence-based practices to help clients achieve personal growth and wellness.</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </div>
            <div>
              <h3 className="text-lg font-medium">Credentials</h3>
              <ul className="space-y-1">
                <li>Ph.D. in Clinical Psychology - Harvard University</li>
                <li>M.A. in Counseling - University of California, Berkeley</li>
                <li>Licensed Professional Counselor (LPC) - State of DEF</li>
                <li>Certified Cognitive Behavioral Therapist (CBT)</li>
                <li>Member, American Psychological Association (APA)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Available on</h3>
              <ul className="space-y-1">
                <li>In-person</li>
                <li>Video/Voice call</li>
              </ul>
            </div>
          </div>
        </CardContent>
        <div className="mt-4">
          <Button>Book session</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;