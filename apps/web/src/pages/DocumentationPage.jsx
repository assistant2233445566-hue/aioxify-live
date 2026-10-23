import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Key, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/layout/PageHero';

const sections = [
  {
    icon: Key,
    title: "Authentication",
    body: "Create a project key in the Aioxify platform. Send it as Bearer on every request. Rotate keys from the dashboard. Sandbox keys never touch production data.",
  },
  {
    icon: Code,
    title: "Chat and voice agents",
    body: "POST /v1/agents/sessions starts a conversation. Voice agents for healthcare, property management, and support use the same session model with HIPAA or tenancy policies attached to the agent, not the prompt.",
  },
  {
    icon: Share2,
    title: "Workflows and KYC",
    body: "Webhooks fire when KYC clears, a ticket is escalated, or a work order is filed. Map those events into Slack, QuickBooks Online, your EHR, or your PMS without writing a custom bus.",
  },
];

const DocumentationPage = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <PageHero
          kicker="Docs"
          title="Platform documentation"
          subtitle="Enough to connect chat, voice, OpenAI-backed reasoning, and automations to the stack you already run."
        />

        <div className="space-y-6 mb-12">
          {sections.map((section) => (
            <div key={section.title} className="x-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <section.icon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <pre className="x-card p-6 rounded-xl overflow-x-auto text-sm text-primary mb-10">{`curl https://api.aioxify.com/v1/agents/sessions \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"agent":"support","message":"Reset my portal password"}'`}</pre>

        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link to="/platform">Back to the platform</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/toolkit">Grab the starter kit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
