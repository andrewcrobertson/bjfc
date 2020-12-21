<script lang="ts">
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/Tabs';
  import AvatarHeading from '@this/components/AvatarHeading';
  import { background } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelTransferred from './components/PanelTransferred';
  import PanelHistorical from './components/PanelHistorical';
  import type { IState } from './state';
  export let state: IState = null;

  const code = state.code;
  const ageGroupCode = state.ageGroupCode;
  const name = state.name;
  const playersTransferred = state.playersTransferred;
  const playersArchived = state.playersArchived;
  const colour = background[state.teamGender];

  pageTitle.set('Team (Archived)');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading class="flex items-center space-x-2" {colour} initials={ageGroupCode} text={name} />
    <div class="flex justify-end items-center text-sm py-1">
      <a class="text-sm border border-gray-300 px-3 py-1 mr-2" href="/teams/{code}/players">Current</a>
      <a class="text-sm border border-gray-300 px-3 py-1" href="/teams/{code}/officials">Officials</a>
    </div>
  </div>
  <Tabs class="w-full">
    <TabList>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Transferred</Tab>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Historical</Tab>
    </TabList>
    <TabPanel>
      <PanelTransferred class="mt-2" players={playersTransferred} />
    </TabPanel>
    <TabPanel>
      <PanelHistorical class="mt-2" players={playersArchived} />
    </TabPanel>
  </Tabs>
</div>
