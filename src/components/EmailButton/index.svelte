<script lang="ts">
  import AtSymbolIcon from '@this/icons/AtSymbolIcon';
  let rootClass = '';
  export { rootClass as class };
  export let email = null;
  export let colour = 'gray';
</script>

{#if email === null}
  <div class="{rootClass} cursor-default inline-flex items-center text-sm bg-gray-100 border border-gray-300 px-3 py-3">
    <AtSymbolIcon class="w-5 h-5 mr-2 text-gray-500" />
    Not Listed
  </div>
{:else}
  <a class="{rootClass} inline-flex items-center text-sm border border-gray-300 px-3 py-3" href="mailto:{email}">
    <AtSymbolIcon class="w-5 h-5 mr-2 text-{colour}-500" />
    <span class="truncate">{email}</span>
  </a>
{/if}
