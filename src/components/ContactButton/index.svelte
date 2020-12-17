<script lang="ts">
  import EmailButton from '@this/components/EmailButton';
  import EmptyButton from '@this/components/EmptyButton';
  import PhoneButton from '@this/components/PhoneButton';

  let rootClass = '';
  export { rootClass as class };
  export let type = null;
  export let value = null;
  export let colour = 'gray';
</script>

{#if type === 'Phone'}
  <PhoneButton class={rootClass} phone={value} {colour} />
{:else if type === 'Email'}
  <EmailButton class={rootClass} email={value} {colour} />
{:else}
  <EmptyButton class={rootClass} />
{/if}
