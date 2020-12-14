<script lang="ts">
  import BadgeCheckIcon from '@this/icons/BadgeCheckIcon';
  import CurrencyDollarIcon from '@this/icons/CurrencyDollarIcon';
  import CardGeneral from './components/CardGeneral';
  import CardActive from './components/CardActive';
  import CardTransfer from './components/CardTransfer';
  import TabInactiveButton from './components/TabInactiveButton';
  import TabActiveButton from './components/TabActiveButton';
  import teams from './data';
  export let code: string = null;

  const handleTabChange = ({ detail }: any) => {
    activeTab = detail.tabId;
    console.log(activeTab);
  };

  let activeTab = 'active';
  const team = teams[code];
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <ul class="list-reset flex border-b">
    <li class="-mb-px mr-1">
      {#if activeTab === 'active'}
        <TabActiveButton tabId="active" on:changeTab={handleTabChange}>Active</TabActiveButton>
      {:else}
        <TabInactiveButton tabId="active" on:changeTab={handleTabChange}>Active</TabInactiveButton>
      {/if}
    </li>
    <li class="mr-1">
      {#if activeTab === 'recent'}
        <TabActiveButton tabId="recent" on:changeTab={handleTabChange}>Recent</TabActiveButton>
      {:else}
        <TabInactiveButton tabId="recent" on:changeTab={handleTabChange}>Recent</TabInactiveButton>
      {/if}
    </li>
    <li class="mr-1">
      {#if activeTab === 'transfer'}
        <TabActiveButton tabId="transfer" on:changeTab={handleTabChange}>Transfer</TabActiveButton>
      {:else}
        <TabInactiveButton tabId="transfer" on:changeTab={handleTabChange}>Transfer</TabInactiveButton>
      {/if}
    </li>
    <li class="mr-1">
      {#if activeTab === 'other'}
        <TabActiveButton tabId="other" on:changeTab={handleTabChange}>Other</TabActiveButton>
      {:else}
        <TabInactiveButton tabId="other" on:changeTab={handleTabChange}>Other</TabInactiveButton>
      {/if}
    </li>
  </ul>
  <div class="flex flex-wrap -m-4 sm:p-4">
    {#if activeTab === 'active'}
      {#each team.membersRegisteredThisSeason as { footyWebNumber, initials, familyName, firstName, gender, paidThisSeason }}
        <CardActive {initials} {familyName} {firstName} {gender} {paidThisSeason} url="/members/{footyWebNumber}" />
      {:else}
        <p class="p-4">There are no active players</p>
      {/each}
    {/if}
    {#if activeTab === 'recent'}
      {#each team.membersRegisteredLastSeason as { footyWebNumber, initials, familyName, firstName, gender }}
        <CardGeneral {initials} {familyName} {firstName} {gender} url="/members/{footyWebNumber}" />
      {:else}
        <p class="p-4">There are no recent players</p>
      {/each}
    {/if}
    {#if activeTab === 'transfer'}
      {#each team.membersTransferred as { footyWebNumber, initials, familyName, firstName, gender, club }}
        <CardTransfer {initials} {familyName} {firstName} {gender} {club} url="/members/{footyWebNumber}" />
      {:else}
        <p class="p-4">There are no transferred players</p>
      {/each}
    {/if}
    {#if activeTab === 'other'}
      {#each team.membersOther as { footyWebNumber, initials, familyName, firstName, gender }}
        <CardGeneral {initials} {familyName} {firstName} {gender} url="/members/{footyWebNumber}" />
      {:else}
        <p class="p-4">There are no other players</p>
      {/each}
    {/if}
  </div>
</div>
