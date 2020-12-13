<script lang="ts">
  import teams from './data';
  export let code: string = null;

  const team = teams[code];
</script>

<div class="flex flex-auto flex-col items-center h-full py-2">
  <div class="flex flex-col w-4/5 space-y-2">
    {#each team.members as { footyWebNumber, familyName, firstName, dateOfBirth, gender }}
      <a
        class="flex flex-col px-1 bg-green-600 shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-5"
        href="/members/{footyWebNumber}">{familyName},
        {firstName}</a>
    {/each}
  </div>
</div>
