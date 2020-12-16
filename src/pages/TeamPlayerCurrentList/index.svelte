<script lang="ts">
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/Tabs';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelActive from './components/PanelActive';
  import PanelRecent from './components/PanelRecent';
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
  pageTitle.set(team.name);
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <Tabs class="w-full">
    <TabList>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Active</Tab>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Recent</Tab>
    </TabList>
    <TabPanel>
      <PanelActive members={team.playersActive} />
    </TabPanel>
    <TabPanel>
      <PanelRecent members={team.playersRecent} />
    </TabPanel>
  </Tabs>
</div>
