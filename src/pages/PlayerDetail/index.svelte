<script lang="ts">
  import BirthdayLabelledIcon from '@this/components/labelledIcon/BirthdayLabelledIcon';
  import Disability from '@this/components/common/Disability';
  import PlayerStatusLabelledIcon from '@this/components/labelledIcon/PlayerStatusLabelledIcon';
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/common/Tabs';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelContact from './components/PanelContact';
  import PanelOther from './components/PanelOther';
  import type { IState } from './state';
  export let state: IState = null;

  const player = state;
  const contacts = player.contacts;
  const dateOfBirth = player.dateOfBirth;
  const status = player.status;
  const club = player.club;
  const disability = player.disability;
  const colour = personBackground[player.gender ?? personGenderEnum.unknown];

  pageTitle.set('Player');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col sm:flex-row sm:justify-between items-center">
    <AvatarHeading class="space-x-2" {colour} initials={player.initials} text="{player.firstName} {player.lastName}" />
    <!-- <div class="flex justify-between sm:space-x-4">
      <PlayerStatusLabelledIcon iconClass="text-sm text-{colour}-500" status={status} {club} />
      <BirthdayLabelledIcon iconClass="text-sm text-{colour}-500" {dateOfBirth} />
    </div> -->
  </div>
  <!-- {#if disability !== null}
    <Disability iconClass="text-{colour}-500" type={disability.type} notes={disability.notes} />
  {/if} -->
  <Tabs class="container xl:pt-4">
    <TabList>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Contacts</Tab>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Other</Tab>
    </TabList>
    <TabPanel>
      <PanelContact {contacts} />
    </TabPanel>
    <TabPanel>
      <PanelOther transfers={player.clubHistory} transactions={player.transactions} />
    </TabPanel>
  </Tabs>
</div>
