import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.jsx';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { CALENDLY_URL } from '@/lib/contact';

const BookCallDialog = ({
  triggerLabel = 'Book a call',
  className = '',
  variant = 'default',
  size = 'default',
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl w-[min(96vw,56rem)] x-card max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book a free consultation</DialogTitle>
          <DialogDescription>
            Pick a time on Calendly, or{' '}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="underline">
              open the booking page
            </a>
            .
          </DialogDescription>
        </DialogHeader>
        <CalendlyEmbed />
      </DialogContent>
    </Dialog>
  );
};

export default BookCallDialog;
