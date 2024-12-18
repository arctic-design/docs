'use client';
import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@arctic-kit/snow'; // Adjust the import path as necessary
import { Chip } from '@arctic-kit/snow'; // Adjust the import path as necessary
import { OnboardingStep } from './onboardingData'; // Adjust the import path as necessary

interface AccordionChildProps {
  steps: OnboardingStep[];
  activeStepId?: string;
  onStepChange?: (stepId: string) => void;
}

export function AccordionChild({
  steps,
  activeStepId,
  onStepChange,
}: AccordionChildProps) {
  const [currentActiveId, setCurrentActiveId] = useState<string | null>(
    activeStepId || (steps.length > 0 ? steps[0].id : null),
  );

  const handleToggle = (stepId: string) => {
    setCurrentActiveId((prev) => {
      const newActiveId = prev === stepId ? null : stepId;
      if (onStepChange && newActiveId) {
        onStepChange(newActiveId);
      }
      return newActiveId;
    });
  };

  return (
    <Accordion>
      {steps.map((step, index) => (
        <AccordionItem
          key={step.id}
          title={step.title}
          subTitle={step.subTitle}
          titleFooter={step.footerText}
          active={currentActiveId === step.id}
          onToggle={() => handleToggle(step.id)}
          defaultExpanded={currentActiveId === step.id}
          leadingExpandSection={
            <Chip
              color={
                step.status === 'completed'
                  ? 'success'
                  : step.status === 'in-progress'
                    ? 'warning'
                    : undefined
              }
              size='small'
            >
              {step.status.replace('-', ' ').toUpperCase()}
            </Chip>
          }
        >
          {step.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
