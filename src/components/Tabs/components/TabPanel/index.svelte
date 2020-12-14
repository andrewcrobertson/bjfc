<script lang="ts">
  import { getContext } from 'svelte';
  import { TABS } from '../Tabs/index.svelte';
  let rootClass = '';
  export { rootClass as class };

  const panel = {};
  const { registerPanel, selectedPanel } = getContext(TABS);

  registerPanel(panel);
</script>

{#if $selectedPanel === panel}
  <slot class={rootClass} />
{/if}
