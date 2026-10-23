import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import SolutionsPage from '@/pages/SolutionsPage';
import SolutionDetailPage from '@/pages/SolutionDetailPage';
import PlatformPage from '@/pages/PlatformPage';
import DocumentationPage from '@/pages/DocumentationPage';
import AboutPage from '@/pages/AboutPage';
import AiChatbotsPage from '@/pages/AiChatbotsPage';
import AiAutomationPage from '@/pages/AiAutomationPage';
import IndustriesPage from '@/pages/IndustriesPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import ToolkitPage from '@/pages/ToolkitPage';
import ClientStoriesPage from '@/pages/ClientStoriesPage';
import CaseStudyPage from '@/pages/CaseStudyPage';
import ChatbotPage from '@/pages/ChatbotPage';
import RobotsPage from '@/pages/RobotsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ParticleField from '@/components/animations/ParticleField';

function App() {
  return (
    <div className="min-h-screen flex flex-col oxygen-flow-bg relative">
      <ParticleField />
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:audience" element={<SolutionDetailPage />} />
            <Route path="/ai-chatbots" element={<AiChatbotsPage />} />
            <Route path="/ai-automation" element={<AiAutomationPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/toolkit" element={<ToolkitPage />} />
            <Route path="/client-stories" element={<ClientStoriesPage />} />
            <Route path="/client-stories/:slug" element={<CaseStudyPage />} />
            <Route path="/chatbot-full" element={<ChatbotPage />} />
            <Route path="/robots" element={<RobotsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}

export default App;