<script lang="ts">
  import { differenceInYears, parseISO } from 'date-fns';
  import BirthdayLabelledIcon from '@this/components/labelledIcon/BirthdayLabelledIcon';
  import StatusLabelledIcon from '@this/components/labelledIcon/StatusLabelledIcon';
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/common/Tabs';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelContacts from './components/PanelContacts';
  import PanelOther from './components/PanelOther';
  import type { IState } from './state';
  export let state: IState = null;

  const player = state;
  const contacts = player.contacts;
  const status = player.status;
  const disability = player.disability;
  const transactions = player.transactions;
  const clubHistory = player.clubHistory;
  const age = differenceInYears(new Date(), parseISO(player.dateOfBirth));
  const colour = personBackground[player.gender ?? personGenderEnum.unknown];

  pageTitle.set('Player');
</script>

<div class="container mx-auto xl:py-10">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading {colour} initials={player.initials} text="{player.firstName} {player.lastName}" />
    <div class="flex flex-col text-sm space-y-1">
      <StatusLabelledIcon class="self-end" iconClass="text-{colour}-500" {status} text={player.statusInfo} />
      <BirthdayLabelledIcon class="self-end" iconClass="text-{colour}-500" label="{player.dateOfBirth} (age: {age})" />
    </div>
  </div>
  <Tabs class="container xl:pt-4">
    <TabList>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Contacts</Tab>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Other</Tab>
    </TabList>
    <TabPanel>
      <PanelContacts {contacts} />
    </TabPanel>
    <TabPanel>
      <PanelOther {colour} {disability} {clubHistory} {transactions} />
    </TabPanel>
  </Tabs>
</div>
