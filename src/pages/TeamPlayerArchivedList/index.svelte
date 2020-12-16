<script lang="ts">
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/Tabs';
  import AvatarHeading from '@this/components/AvatarHeading';
  import { background } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelTransferred from './components/PanelTransferred';
  import PanelHistorical from './components/PanelHistorical';
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
  const colour = background[team.teamGender];

  pageTitle.set('Team');
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading class="flex items-center space-x-2" {colour} initials={team.ageGroupCode} text={team.name + ' (Archived)'} />
    <div class="flex justify-end items-center text-sm mr-2 py-1">
      <a class="text-sm border border-gray-300 px-3 py-3 mr-2" href="/teams/{code}/players">Current</a>
      <a class="text-sm border border-gray-300 px-3 py-3" href="/teams/{code}/officials">Officials</a>
    </div>
  </div>
  <Tabs class="w-full">
    <TabList>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Transferred</Tab>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Historical</Tab>
    </TabList>
    <TabPanel>
      <PanelTransferred class="mt-2" members={team.playersTransferred} />
    </TabPanel>
    <TabPanel>
      <PanelHistorical class="mt-2" members={team.playersArchived} />
    </TabPanel>
  </Tabs>
</div>
