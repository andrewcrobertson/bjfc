<script lang="ts">
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/Tabs';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import PanelGuardian from './components/PanelGuardian';
  import PanelEmergency from './components/PanelEmergency';
  import PanelContact from './components/PanelContact';
  import PanelTransaction from './components/PanelTransaction';
  import PanelTransfer from './components/PanelTransfer';
  import players from './data';
  export let code: string = null;

  const member = players[code];
  const emergencyContacts = member.emergencyContact === null ? [] : [member.emergencyContact];
  const contacts = member.contact === null ? [] : [member.contact];
  pageTitle.set(`${member.firstName} ${member.lastName}`);
</script>

<Tabs class="max-w-6xl mx-auto xl:pt-24 xl:pb-12">
  <TabList>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Guardians</Tab>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Emergency</Tab>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Contact</Tab>
  </TabList>
  <TabPanel>
    <PanelGuardian guardians={member.guardians} />
  </TabPanel>
  <TabPanel>
    <PanelEmergency contacts={emergencyContacts} />
  </TabPanel>
  <TabPanel>
    <PanelContact {contacts} />
  </TabPanel>
</Tabs>

<Tabs class="max-w-6xl mx-auto xl:pb-24">
  <TabList>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Transactions</Tab>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Transfers</Tab>
  </TabList>
  <TabPanel>
    <PanelTransaction records={member.transactions} />
  </TabPanel>
  <TabPanel>
    <PanelTransfer records={member.transfers} />
  </TabPanel>
</Tabs>
