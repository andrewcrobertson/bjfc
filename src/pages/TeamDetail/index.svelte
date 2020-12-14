<script lang="ts">
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/Tabs';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';

  import PanelActive from './components/PanelActive';
  import PanelOther from './components/PanelOther';
  import PanelRecent from './components/PanelRecent';
  import PanelTransfer from './components/PanelTransfer';
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
  pageTitle.set(team.name);
</script>

<Tabs class="max-w-6xl mx-auto xl:py-24">
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
