import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import SignatureServices from '../components/SignatureServices';
import CulinaryShowcase from '../components/CulinaryShowcase';
import EventEstimator from '../components/EventEstimator';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

export default function Home() {
  return (
    <PageTransition>
      <div className="w-full">
        {/* Hero Section */}
        <Hero />

        {/* Signature Services Overview */}
        <SignatureServices />

        {/* Culinary Showcase with Interactive Tabs */}
        <CulinaryShowcase />

        {/* Interactive Event Estimator Calculator */}
        <EventEstimator />

        {/* The Soukaryam Guarantee / Why Us */}
        <WhyUs />

        {/* Testimonials */}
        <Testimonials />

        {/* Call to Action Banner */}
        <CtaBanner />
      </div>
    </PageTransition>
  );
}
