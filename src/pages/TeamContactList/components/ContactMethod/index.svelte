<script lang="ts">
  import EmailLabelledIcon from '@this/components/labelledIcon/EmailLabelledIcon';
  import PhoneLabelledIcon from '@this/components/labelledIcon/PhoneLabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let type = null;
  export let value = null;
</script>

{#if type === 'Phone'}
  <PhoneLabelledIcon class={rootClass} iconClass="text-gray-500" text={value} />
{:else if type === 'Email'}
  <EmailLabelledIcon class={rootClass} iconClass="text-gray-500" text={value} />
{/if}
