<script lang="ts">
  import StandardLayout from '@this/layouts/StandardLayout';
  import endsWith from 'lodash/endsWith';
  import { stores } from '@sapper/app';

  const { page } = stores();
  const isPdf = endsWith($page.path, '/contact');
</script>

<svelte:head>
  <meta name="author" content="Tykto" />
  <meta name="description" content="BJFC" />
  <meta name="keywords" content="BJFC" />
  <meta name="robots" content="index, follow" />
  <title>BJFC</title>
</svelte:head>

{#if isPdf}
  <slot />
{:else}
  <StandardLayout>
    <slot />
  </StandardLayout>
{/if}
