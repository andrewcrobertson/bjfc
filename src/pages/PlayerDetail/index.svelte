<script lang="ts">
  import AvatarHeading from '@this/components/AvatarHeading';
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/Tabs';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelContact from './components/PanelContact';
  import PanelOther from './components/PanelOther';
  import type { IState } from './state';
  export let state: IState = null;

  const player = state;
  const contacts = player.contacts;
  const colour = personBackground[player.gender ?? personGenderEnum.unknown];

  pageTitle.set('Player');
</script>

<div class="container mx-auto xl:py-10">
  <AvatarHeading class="flex items-center space-x-2" {colour} initials={player.initials} text="{player.firstName} {player.lastName}" />
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
