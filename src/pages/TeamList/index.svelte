<script lang="ts">
  import Card from './components/Card';
  import teams from './data';

  let open = false;
</script>

<!-- <div class="flex flex-auto flex-col items-center h-full py-2">
  <div class="flex flex-col w-4/5 space-y-2">
    {#each teams as { code, shortName, name }}
      <a class="flex flex-col px-1 bg-green-600 shadow hover:shadow-lg focus:outline-none focus:shadow-lg font-bold py-5" href="/teams/{code}">{shortName}</a>
    {/each}
  </div>
</div> -->

<div class="max-w-6xl mx-auto px-5 py-24 ">
  <div class="flex flex-wrap -m-4">
    {#each teams as { code, shortName, name }}
      <Card {code} {name} url="/teams/{code}" />
    {/each}
  </div>
</div>
