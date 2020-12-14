<script lang="ts">
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/Tabs';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelOfficial from './components/PanelOfficial';
  import PanelActive from './components/PanelActive';
  import PanelOther from './components/PanelOther';
  import PanelRecent from './components/PanelRecent';
  import PanelTransfer from './components/PanelTransfer';
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
  pageTitle.set(team.name);
</script>

<Tabs class="max-w-6xl mx-auto xl:pt-24 xl:pb-12">
  <TabList>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Coaches</Tab>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Team Manager/Trainer</Tab>
  </TabList>
  <TabPanel>
    <PanelOfficial
      officials={[{ role: 'Coach', official: team.headCoach }, { role: 'Assistant Coach', official: team.assistantCoach }]} />
  </TabPanel>
  <TabPanel>
    <PanelOfficial
      officials={[{ role: 'Team Manager', official: team.teamManager }, { role: 'Trainer', official: team.trainer }]} />
  </TabPanel>
</Tabs>

<Tabs class="max-w-6xl mx-auto xl:pb-24">
  <TabList>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Active</Tab>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Recent</Tab>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Transfer</Tab>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Other</Tab>
  </TabList>
  <TabPanel>
    <PanelActive members={team.membersRegisteredThisSeason} />
  </TabPanel>
  <TabPanel>
    <PanelRecent members={team.membersRegisteredLastSeason} />
  </TabPanel>
  <TabPanel>
    <PanelTransfer members={team.membersTransferred} />
  </TabPanel>
  <TabPanel>
    <PanelOther members={team.membersOther} />
  </TabPanel>
</Tabs>
