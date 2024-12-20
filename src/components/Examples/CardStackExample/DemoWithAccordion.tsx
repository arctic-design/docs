'use client';
import React from 'react';
import {
  Box,
  Card,
  CardStack,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@arctic-kit/snow'; // Adjust the import path as necessary
import { AccordionChild } from './AccordionChild'; // Adjust the import path as necessary
import { onboardingSteps } from './onboardingData'; // Adjust the import path as necessary

interface DemoWithAccordionProps {
  // Define any additional props if necessary
}

export function DemoWithAccordion(props: DemoWithAccordionProps) {
  const completedSteps = onboardingSteps.filter(
    (step) => step.status === 'completed',
  ).length;

  const handleStepChange = (stepId: string) => {
    console.log(`Active Step Changed to: ${stepId}`);
    // Implement additional logic like saving progress or validating steps
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800, margin: '0 auto', padding: 4 }}>
      <CardStack
        totalItems={onboardingSteps.length}
        completedItems={completedSteps}
        title='User Onboarding steps'
        initialCollapsed={false}
      >
        <Card>
          <CardHeader>
            <CardTitle>User Onboarding</CardTitle>
            <CardDescription>
              Complete the following steps to set up your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AccordionChild
              steps={onboardingSteps}
              onStepChange={handleStepChange}
            />
          </CardContent>
        </Card>
      </CardStack>
    </Box>
  );
}
