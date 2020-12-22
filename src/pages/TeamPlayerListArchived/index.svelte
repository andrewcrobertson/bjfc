<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/common/Tabs';
  import { background } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelTransferred from './components/PanelTransferred';
  import PanelHistorical from './components/PanelHistorical';
  import type { IState } from './state';
  export let state: IState = null;

  const initials = state.ageGroupCode;
  const text = state.name;
  const colour = background[state.teamGender];
  const currentHref = `/teams/${state.code}/players`;
  const officialsHref = `/teams/${state.code}/officials`;

  pageTitle.set('Team (Archived)');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading {colour} {initials} {text} />
    <div class="flex justify-end items-center text-sm">
      <a class="border border-gray-300 px-3 py-1 mr-2" href={currentHref}>Current</a>
      <a class="border border-gray-300 px-3 py-1" href={officialsHref}>Officials</a>
    </div>
  </div>
  <Tabs class="w-full">
    <TabList>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Transferred</Tab>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Historical</Tab>
    </TabList>
    <TabPanel>
      <PanelTransferred class="mt-2" players={state.playersTransferred} />
    </TabPanel>
    <TabPanel>
      <PanelHistorical class="mt-2" players={state.playersHistorical} />
    </TabPanel>
  </Tabs>
</div>
