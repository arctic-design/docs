'use client';
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

export function CookieSettingsExample() {
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
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent>
        <List>
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
