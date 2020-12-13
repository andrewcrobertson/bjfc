<script lang="ts">
  import members from './data';
  export let code: string = null;

  const member = members[code];
</script>

<div class="p-2">
  <h1 class="font-medium">{member.familyName}, {member.firstName}</h1>
  <p>{member.dateOfBirth}</p>

  <h2 class="text-sm font-medium pt-3">Guardians</h2>
  {#each member.guardians as { familyName, firstName, contacts }}
    <h3 class="pt-3">{familyName}, {firstName}</h3>
    {#each contacts as { type, value }}
      <p>{type}: {value}</p>
    {/each}
  {/each}

  <h2 class="text-sm font-medium pt-3">Emergency Contact</h2>
  <h3 class="pt-3">{member.emergencyContact.name}</h3>
  {#each member.emergencyContact.contacts as { type, value }}
    <p>{type}: {value}</p>
  {/each}

  <h2 class="text-sm font-medium pt-3">Transactions</h2>
  {#each member.transactions as { transactionDate, product, lineItemTotal, transactionStatus }}
    <h3 class="pt-3">{product}</h3>
    <p>{transactionDate} ${lineItemTotal} ({transactionStatus})</p>
  {/each}

  <h2 class="text-sm font-medium pt-3">Transfers</h2>
  {#each member.transfers as { applicationDate, sourceClub, destinationClub }}
    <h3 class="pt-3">{sourceClub} -&gt; {destinationClub}</h3>
    <p>{applicationDate} (Approved)</p>
  {/each}
</div>
