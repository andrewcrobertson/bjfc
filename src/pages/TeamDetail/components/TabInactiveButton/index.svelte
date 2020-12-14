<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte';
  export let tabId = '';
  const dispatch = createEventDispatcher();
</script>

<button class="bg-white inline-block py-2 px-4" on:click={() => dispatch('changeTab', { tabId })}>{tabId}</button>
