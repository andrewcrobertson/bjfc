<script lang="ts">
  import { Tabs, TabList, TabPanel, Tab } from '@this/components/Tabs';
  import CardGeneral from './components/CardGeneral';
  import CardActive from './components/CardActive';
  import CardTransfer from './components/CardTransfer';
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
</script>

<Tabs class="max-w-6xl mx-auto xl:py-24">
  <TabList class="">
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Active</Tab>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Recent</Tab>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Transfer</Tab>
    <Tab class="focus:outline-none inline-block rounded-t py-2 px-4" selectedClass="border-b border-gray-300">Other</Tab>
  </TabList>
  <TabPanel class="flex flex-wrap -m-4 sm:p-4">
    {#each team.membersRegisteredThisSeason as { footyWebNumber, initials, familyName, firstName, gender, paidThisSeason }}
      <CardActive {initials} {familyName} {firstName} {gender} {paidThisSeason} url="/members/{footyWebNumber}" />
    {:else}
      <p class="p-4">There are no active players</p>
    {/each}
  </TabPanel>
  <TabPanel class="flex flex-wrap -m-4 sm:p-4">
    {#each team.membersRegisteredLastSeason as { footyWebNumber, initials, familyName, firstName, gender }}
      <CardGeneral {initials} {familyName} {firstName} {gender} url="/members/{footyWebNumber}" />
    {:else}
      <p class="p-4">There are no recent players</p>
    {/each}
  </TabPanel>
  <TabPanel class="flex flex-wrap -m-4 sm:p-4">
    {#each team.membersTransferred as { footyWebNumber, initials, familyName, firstName, gender, club }}
      <CardTransfer {initials} {familyName} {firstName} {gender} {club} url="/members/{footyWebNumber}" />
    {:else}
      <p class="p-4">There are no transferred players</p>
    {/each}
  </TabPanel>
  <TabPanel class="flex flex-wrap -m-4 sm:p-4">
    {#each team.membersOther as { footyWebNumber, initials, familyName, firstName, gender }}
      <CardGeneral {initials} {familyName} {firstName} {gender} url="/members/{footyWebNumber}" />
    {:else}
      <p class="p-4">There are no other players</p>
    {/each}
  </TabPanel>
</Tabs>
