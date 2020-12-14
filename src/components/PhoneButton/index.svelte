<script lang="ts">
  import PhoneIcon from '@this/icons/PhoneIcon';
  let rootClass = '';
  export { rootClass as class };
  export let phone = null;
  export let label = 'Phone';
  export let colour = 'gray';
</script>

{#if phone === null}
  <div class="{rootClass} cursor-default px-6 py-3 inline-flex items-center leading-none text-sm bg-gray-100 border border-gray-300">
    <PhoneIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />
    {label}: Not Listed
  </div>
{:else}
  <a class="{rootClass} px-6 py-3 inline-flex items-center leading-none text-sm border border-gray-300" href="tel:{phone}">
    <PhoneIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />
    {label}:
    {phone}
  </a>
{/if}
