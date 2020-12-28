<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/common/Tabs';
  import { background } from '@this/utility/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import { getUrlTeamOfficialList, getUrlTeamPlayerListCurrent } from '@this/utility/getUrl';
  import PanelPlayer from './components/PanelPlayer';
  import type { IState } from './state';
  export let state: IState;

  const initials = state.ageGroupCode;
  const text = state.name;
  const colour = background[state.teamGender];
  const currentHref = getUrlTeamPlayerListCurrent(state.code);
  const officialsHref = getUrlTeamOfficialList(state.code);

  pageTitle.set('Team');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading {colour} {initials} {text} />
    <div class="flex justify-end space-x-2 items-center text-sm">
      <a class="border border-gray-300 px-3 py-1" href={currentHref}>Current</a>
      <a class="border border-gray-300 px-3 py-1" href={officialsHref}>Officials</a>
    </div>
  </div>
  <Tabs class="w-full">
    <TabList>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Transferred</Tab>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Historical</Tab>
    </TabList>
    <TabPanel>
      <PanelPlayer class="mt-2" players={state.playersTransferred} emptyMessage="There are no active players" />
    </TabPanel>
    <TabPanel>
      <PanelPlayer class="mt-2" players={state.playersHistorical} emptyMessage="There are no recent players" />
    </TabPanel>
  </Tabs>
</div>
