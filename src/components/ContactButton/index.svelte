<script lang="ts">
  import EmailButton from '@this/components/EmailButton';
  import EmptyButton from '@this/components/EmptyButton';
  import PhoneButton from '@this/components/PhoneButton';
  export let type = null;
  export let value = null;
  export let colour = 'gray';
</script>

{#if type === 'Phone'}
  <PhoneButton class="mb-2" phone={value} {colour} />
{:else if type === 'Email'}
  <EmailButton class="mb-2" email={value} {colour} />
{:else}
  <EmptyButton class="mb-2" />
{/if}
