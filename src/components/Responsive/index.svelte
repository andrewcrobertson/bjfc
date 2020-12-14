<script lang="ts">
  import config from '@this/tailwind.config';

  $: width = 0;
  $: small = width <= sm;
  const sm = parseInt(config.theme.screens.sm.replace('px', ''));
</script>

<svelte:window bind:outerWidth={width} />

{#if small}
  <slot name="sm" />
{:else}
  <slot name="else" />
{/if}
