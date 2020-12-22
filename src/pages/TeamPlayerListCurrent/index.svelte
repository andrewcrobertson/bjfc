<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/common/Tabs';
  import { background } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelActive from './components/PanelActive';
  import PanelRecent from './components/PanelRecent';
  import type { IState } from './state';
  export let state: IState = null;

  const code = state.code;
  const ageGroupCode = state.ageGroupCode;
  const name = state.name;
  const playersActive = state.playersActive;
  const playersRecent = state.playersRecent;
  const colour = background[state.teamGender];

  pageTitle.set('Team');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading class="flex items-center space-x-2" {colour} initials={ageGroupCode} text={name} />
    <div class="flex justify-end items-center text-sm py-1">
      <a class="text-sm border border-gray-300 px-3 py-1 mr-2" href="/teams/{code}/players/archived">Archived</a>
      <a class="text-sm border border-gray-300 px-3 py-1" href="/teams/{code}/officials">Officials</a>
    </div>
  </div>
  <Tabs class="w-full">
    <TabList>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Active</Tab>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Recent</Tab>
    </TabList>
    <TabPanel>
      <PanelActive class="mt-2" players={playersActive} />
    </TabPanel>
    <TabPanel>
      <PanelRecent class="mt-2" players={playersRecent} />
    </TabPanel>
  </Tabs>
</div>
