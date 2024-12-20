'use client';
import { CodeConfigType, ComponentPropDefs } from '@/types';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  List,
  ListItem,
  ListItemDescription,
  ListItemTitle,
  ListProps,
  Switch,
} from '@arctic-kit/snow';
import { PropsWithChildren, useCallback, useState } from 'react';

const code = `
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  List,
  ListItem,
  ListItemDescription,
  ListItemTitle,
  Switch,
} from '@arctic-kit/snow';
import { useCallback, useState } from 'react';

type ChoiceType = 'strict' | 'functional' | 'performance';

function Demo() {
  const [preferences, setPreferences] = useState<{ [key: string]: boolean }>({
    strict: false,
    functional: true,
    performance: false,
  });

  const onChangeHandler = useCallback((choice: ChoiceType) => {
    setPreferences((prevState) => ({
      ...prevState,
      [choice]: !prevState[choice],
    }));
  }, []);
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent>
        <List {{props}}>
          <ListItem
            suffix={
              <Switch
                checked={preferences.strict}
                onToggle={() => onChangeHandler('strict')}
              />
            }
          >
            <ListItemTitle>Strictly Necessary</ListItemTitle>
            <ListItemDescription>
              These cookies are essential in order to use the website and use
              its features.
            </ListItemDescription>
          </ListItem>
          <ListItem
            suffix={
              <Switch
                checked={preferences.functional}
                onToggle={() => onChangeHandler('functional')}
              />
            }
          >
            <ListItemTitle>Functional Cookies</ListItemTitle>
            <ListItemDescription>
              These cookies allow the website to provide personalized
              functionality.
            </ListItemDescription>
          </ListItem>
          <ListItem
            suffix={
              <Switch
                checked={preferences.performance}
                onToggle={() => onChangeHandler('performance')}
              />
            }
          >
            <ListItemTitle>Performance Cookies</ListItemTitle>
            <ListItemDescription>
              These cookies help to improve the performance of the website.
            </ListItemDescription>
          </ListItem>
        </List>
      </CardContent>
      <CardFooter>
        <Button style={{ width: '100%' }}>Save preferences</Button>
      </CardFooter>
    </Card>
  );
}
`;

const propDefs: ComponentPropDefs[] = [];

type ChoiceType = 'strict' | 'functional' | 'performance';

export function Demo({ children, ...props }: PropsWithChildren<ListProps>) {
  const [preferences, setPreferences] = useState<{ [key: string]: boolean }>({
    strict: false,
    functional: true,
    performance: false,
  });

  const onChangeHandler = useCallback((choice: ChoiceType) => {
    setPreferences((prevState) => ({
      ...prevState,
      [choice]: !prevState[choice],
    }));
  }, []);
  return (
    <Card sx={{ maxWidth: 420 }} size='small'>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent>
        <List {...props}>
          <ListItem
            suffix={
              <Switch
                checked={preferences.strict}
                onToggle={() => onChangeHandler('strict')}
              />
            }
          >
            <ListItemTitle>Strictly Necessary</ListItemTitle>
            <ListItemDescription>
              These cookies are essential in order to use the website and use
              its features.
            </ListItemDescription>
          </ListItem>
          <ListItem
            suffix={
              <Switch
                checked={preferences.functional}
                onToggle={() => onChangeHandler('functional')}
              />
            }
          >
            <ListItemTitle>Functional Cookies</ListItemTitle>
            <ListItemDescription>
              These cookies allow the website to provide personalized
              functionality.
            </ListItemDescription>
          </ListItem>
          <ListItem
            suffix={
              <Switch
                checked={preferences.performance}
                onToggle={() => onChangeHandler('performance')}
              />
            }
          >
            <ListItemTitle>Performance Cookies</ListItemTitle>
            <ListItemDescription>
              These cookies help to improve the performance of the website.
            </ListItemDescription>
          </ListItem>
        </List>
      </CardContent>
      <CardFooter>
        <Button style={{ width: '100%' }}>Save preferences</Button>
      </CardFooter>
    </Card>
  );
}

export const codeConfig: CodeConfigType = {
  component: Demo,
  centered: true,
  maxWidth: 440,
  code,
  propDefs,
};
