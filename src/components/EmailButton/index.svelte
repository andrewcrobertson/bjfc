<script lang="ts">
  import AtSymbolIcon from '@this/icons/AtSymbolIcon';
  let rootClass = '';
  export { rootClass as class };
  export let email = null;
  export let colour = 'gray';
</script>

{#if email === null}
  <div class="{rootClass} cursor-default inline-flex items-center leading-none text-sm bg-gray-100 border border-gray-300 px-3 py-3">
    <AtSymbolIcon class="inline w-5 h-5 mr-2 text-{colour}-500" />
    Not Listed
  </div>
{:else}
  <a class="{rootClass} inline-flex items-center leading-none text-sm border border-gray-300 px-3 py-3" href="mailto:{email}">
    <AtSymbolIcon class="inline w-5 h-5 mr-2 text-{colour}-500" />
    {email}
  </a>
{/if}
