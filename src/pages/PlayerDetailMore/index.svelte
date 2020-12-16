<script lang="ts">
  import AvatarHeading from '@this/components/AvatarHeading';
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/Tabs';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelTransaction from './components/PanelTransaction';
  import PanelTransfer from './components/PanelTransfer';
  import players from './data';
  export let code: string = null;

  const player = players[code];
  const footyWebNumber = player.footyWebNumber;
  const colour = 'gray';
  pageTitle.set('Player');
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading class="flex items-center space-x-2" {colour} initials={player.initials} text="{player.firstName} {player.lastName} (More)" />
    <div class="flex justify-end items-center text-sm mr-2 py-1">
      <a class="text-sm border border-gray-300 px-3 py-1" href="/players/{footyWebNumber}/">Main</a>
    </div>
  </div>
  <Tabs class="max-w-6xl mx-auto xl:pb-24">
    <TabList>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Transactions</Tab>
      <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Transfers</Tab>
    </TabList>
    <TabPanel>
      <PanelTransaction records={player.transactions} />
    </TabPanel>
    <TabPanel>
      <PanelTransfer records={player.transfers} />
    </TabPanel>
  </Tabs>
</div>
