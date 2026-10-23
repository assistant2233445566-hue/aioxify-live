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
import ContactForm from '@/components/ContactForm';

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
      <DialogContent className="sm:max-w-[425px] x-card">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book a free consultation</DialogTitle>
          <DialogDescription>
            Let&apos;s discuss how Aioxify can oxygenate your business. Fill out the form below.
          </DialogDescription>
        </DialogHeader>
        <ContactForm minimal={true} />
      </DialogContent>
    </Dialog>
  );
};

export default BookCallDialog;
