<script lang="ts">
  export let phone = null;
</script>

{#if phone === null}
  <div class="cursor-default px-6 py-3 inline-flex items-center leading-none text-sm bg-gray-100 border border-gray-300">Ring</div>
{:else}<a class="px-6 py-3 inline-flex items-center leading-none text-sm border border-gray-300" href="tel:{phone}">{phone}</a>{/if}
