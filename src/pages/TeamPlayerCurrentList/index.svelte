<script lang="ts">
  import AvatarHeading from '@this/components/AvatarHeading';
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/Tabs';
  import { background } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelActive from './components/PanelActive';
  import PanelRecent from './components/PanelRecent';
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
  const colour = background[team.teamGender];

  pageTitle.set('Team');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading class="flex items-center space-x-2" {colour} initials={team.ageGroupCode} text={team.name} />
    <div class="flex justify-end items-center text-sm mr-2 py-1">
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
      <PanelActive class="mt-2" players={team.playersActive} />
    </TabPanel>
    <TabPanel>
      <PanelRecent class="mt-2" players={team.playersRecent} />
    </TabPanel>
  </Tabs>
</div>
