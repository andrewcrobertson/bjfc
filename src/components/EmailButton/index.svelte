<script lang="ts">
  import AtSymbolIcon from '@this/icons/AtSymbolIcon';
  let rootClass = '';
  export { rootClass as class };
  export let email = null;
  export let label = 'Email';
  export let colour = 'gray';
</script>

{#if email === null}
  <div class="{rootClass} cursor-default px-6 py-3 inline-flex items-center leading-none text-sm bg-gray-100 border border-gray-300">
    <AtSymbolIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />
    {label}: Not Listed
  </div>
{:else}
  <a class="{rootClass} px-6 py-3 inline-flex items-center leading-none text-sm border border-gray-300" href="mailto:{email}">
    <AtSymbolIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />
    {label}:
    {email}
  </a>
{/if}
