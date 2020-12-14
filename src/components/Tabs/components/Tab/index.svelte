<script>
  import { getContext } from 'svelte';
  import { TABS } from '../Tabs/index.svelte';
  let rootClass = '';
  export { rootClass as class };
  export let selectedClass = '';

  const tab = {};
  const { registerTab, selectTab, selectedTab } = getContext(TABS);

  registerTab(tab);
</script>

<button class="{rootClass} {$selectedTab === tab ? selectedClass : ''}" on:click={() => selectTab(tab)}>
  <slot />
</button>
