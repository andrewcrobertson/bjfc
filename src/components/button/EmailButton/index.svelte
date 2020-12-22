<script lang="ts">
  import EmailLabelledIcon from '@this/components/labelledIcon/EmailLabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let email = null;
  export let colour = 'gray';
</script>

{#if email === null}
  <div class="{rootClass} cursor-default inline-flex items-center bg-gray-100 border border-gray-300 px-3 py-3">
    <EmailLabelledIcon iconClass="text-gray-500" text="Not Listed" />
  </div>
{:else}
  <a class="{rootClass} inline-flex items-center border border-gray-300 px-3 py-3" href="mailto:{email}">
    <EmailLabelledIcon iconClass="text-{colour}-500" text={email} />
  </a>
{/if}
