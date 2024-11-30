import React from 'react';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { 
  Share2, 
  MapPin ,
  ArrowLeft,
  GraduationCap,
  IdCard ,
  Users,
  Briefcase} from 'lucide-react';
import Image from 'next/image';

const ProfileCard = () => {
  return (
    <Card className="flex w-screen h-screen ">
      <div className="w-1/3 bg-blue-500 flex flex-col items-center justify-center relative">
      <button className="absolute top-7 left-7 text-white font-medium text-xl flex items-center space-x-2">
      <ArrowLeft /> <span>Back</span>
      </button>

        <div className="bg-white w-2/3 p-8 rounded-xl text-center flex flex-col items-center mb-6 relative">
          <div className="absolute top-4 right-4">
            <a href="#" className="text-blue-400 hover:text-gray-600">
              <Share2 size={24} />
            </a>
          </div>
          <Image
            src="/ProfileImg.png"
            alt="Swetha Varma"
            className='rounded-xl mb-6'
            width={192}
            height={192}
          />
          <div>
            <h2 className="text-3xl font-bold">Swetha Varma</h2>
            <p className="text-gray-500 text-lg">Consultant Clinical Psychologist</p>
            <p className="text-sm font-bold">10+ Years of experience</p>
            <p className="text-sm font-semibold mt-1">Starts at 1,200 <span className='text-sm text-gray-500'>/Session</span></p>
            <div className="flex items-center justify-center mt-2 text-gray-600">
              <MapPin size={16} className="mr-1" />
              <span>Block A2, Delhi</span>
            </div>
          </div>
        </div>
        <Button className="w-2/3 text-lg">Book session</Button>
      </div>

  
      <div className="w-2/3 overflow-y-auto  relative mt-2 p-7">
        <div className="p-8 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-medium">About me</h3>

            </div>
            <p className="mt-2 text-lg">Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 10 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices.            <a href="#" className="text-blue-500 underline text-lg">Read more</a></p>

          </div>
          
          <div>
            <h3 className="text-2xl font-medium">Credentials</h3>
            <ul className="space-y-2 mt-3 text-lg">
              <li className="flex items-center">
                <GraduationCap className="mr-2 text-blue-500" /> Ph.D. in Clinical Psychology - Harvard University
              </li>
              <li className="flex items-center">
                <GraduationCap className="mr-2 text-blue-500" /> M.A. in Counseling - University of California, Berkeley
              </li>
              <li className="flex items-center">
                <IdCard className="mr-2 text-blue-500" /> Licensed Professional Counselor (LPC) - State of DEF
              </li>
              <li className="flex items-center">
                <IdCard className="mr-2 text-blue-500" /> Certified Cognitive Behavioral Therapist (CBT)
              </li>
              <li className="flex items-center">
                <Users className="mr-2 text-blue-500" /> Member, American Psychological Association (APA)
              </li>
              <li className="flex items-center">
                <Briefcase className="mr-2 text-blue-500" /> 10+ years of experience in individual and group therapy
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium">Available on</h3>
            <ul className="space-y-2 mt-3 text-lg">
              <li>In-person</li>
              <li>Video/Voice call</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium">Treatment Approach</h3>
            <p className="mt-2 text-lg">I employ a holistic approach combining evidence-based techniques like Cognitive Behavioral Therapy (CBT), Mindfulness, and Positive Psychology to help clients achieve their mental health goals.</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium">Client Testimonials</h3>
            <div className="mt-4 space-y-4">
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                "Swetha helped me understand my anxiety and provided practical strategies to manage it. Her compassionate approach made a huge difference in my life."
              </blockquote>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                "A truly empathetic therapist who listens without judgment and offers constructive guidance."
              </blockquote>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium">Professional Journey</h3>
            <p className="mt-2 text-lg">With over a decade of experience, I've worked with diverse populations, helping individuals overcome various psychological challenges. My approach is rooted in empathy, evidence-based practices, and a deep commitment to personal growth.</p>
          </div>

          <div>
            <h3 className="text-2xl font-medium">Research Interests</h3>
            <ul className="space-y-2 mt-3 text-lg">
              <li>• Cognitive Behavioral Interventions</li>
              <li>• Stress Management Techniques</li>
              <li>• Mental Health in Urban Environments</li>
              <li>• Psychological Resilience</li>
            </ul>
          </div>
        </div>
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