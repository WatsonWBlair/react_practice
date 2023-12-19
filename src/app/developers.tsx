import TabPanel from '@mui/joy/TabPanel'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import Profile from '@/components/DevelopersTabs/Profile';
import Calendar from '@/components/DevelopersTabs/Calendar';
import Reviews from '@/components/DevelopersTabs/Reviews';
import Tasks from '@/components/DevelopersTabs/Tasks';
import { Avatar, Box, Sheet, Typography } from '@mui/joy';

const devData = [
  {
    id: 0,
    info: {
      fName: 'watson',
      lName: 'blair',
      pronouns: 'he/him'
    },
    tasks: [
      {
        jiraID: 3245,
        name: 'ticket object',
        description: 'JIRA ticket object'
      }
    ],
    scheduling: {
      events: [
        {
          eventID: 0,
          eventStart: new Date(),
          eventEnd: new Date(),
          eventType: 'Meeting'
        }
      ]
    },
    reviews: [
      {
        reviewEventId: 0
      }
    ]
  },
  {
    id: 1,
    info: {
      fName: 'watson',
      lName: 'blair',
      pronouns: 'he/him'
    },
    tasks: [
      {
        jiraID: 3245,
        name: 'ticket object',
        description: 'JIRA ticket object'
      }
    ],
    scheduling: {
      events: [
        {
          eventID: 0,
          eventStart: new Date(),
          eventEnd: new Date(),
          eventType: 'Meeting'
        }
      ]
    },
    reviews: [
      {
        reviewEventId: 0
      }
    ]
  }
];

export default function Developers() {
  // fetch data
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sheet>
        <Tabs>
          <Box>
            <Avatar />
            <Box>
              <TabList>
                {devData.map((person, index) => {
                  return (
                    <Tab key={'TopTabs_' + index} value={person.id}> <Avatar /><Typography>{person.info.fName} {person.info.lName}</Typography></Tab>
                  )
                })}
              </TabList>
            </Box>
          </Box>
          <Box>
            {
              devData.map((person, index) => {
                return (
                  <TabPanel size='lg' value={person.id} keepMounted={false} key={'PersonTabs_' + index}>
                    <Tabs orientation="vertical" defaultValue={0} size='lg'>
                      <TabList>
                        <Tab
                          variant="plain"
                          color="neutral"
                          value={0}>Profile</Tab>
                        <Tab
                          variant="plain"
                          color="neutral"
                          value={1}>Calendar</Tab>
                        <Tab
                          variant="plain"
                          color="neutral"
                          value={2}>Tasks</Tab>
                        <Tab
                          variant="plain"
                          color="neutral"
                          value={2}>Reviews</Tab>
                      </TabList>
                      <TabPanel size='lg' value={0} keepMounted={false}>
                        <Profile data={person.info} />
                      </TabPanel>
                      <TabPanel size='lg' value={1} keepMounted={false}>
                        <Calendar data={person.scheduling} />
                      </TabPanel>
                      <TabPanel size='lg' value={2} keepMounted={false}>
                        <Tasks data={person.tasks} />
                      </TabPanel>
                      <TabPanel size='lg' value={3} keepMounted={false}>
                        <Reviews data={person.reviews} />
                      </TabPanel>
                    </Tabs>
                  </TabPanel>);
              })}

          </Box>
        </Tabs>
      </Sheet>
    </main>
  )
}
