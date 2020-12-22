<script lang="ts">
  import split from 'lodash/split';
  import join from 'lodash/join';
  import PhoneLabelledIcon from '@this/components/labelledIcon/PhoneLabelledIcon';
  import ChatAltIcon from '@this/components/icon/ChatAltIcon';
  let rootClass = '';
  export { rootClass as class };
  export let phone = null;
  export let colour = 'gray';

  const sanitisePhone = (phone: string) => join(split(phone, ' '), '');
</script>

<div class="flex">
  {#if phone === null}
    <div class="{rootClass} inline-flex flex-grow items-center bg-gray-100 border border-gray-300 px-3 py-3">
      <PhoneLabelledIcon iconClass="text-gray-500" text="Not Listed" />
    </div>
    <div class="{rootClass} inline-flex items-center bg-gray-100 border border-gray-300 border-l-0 px-6" href="sms:{sanitisePhone(phone)}">
      <ChatAltIcon class="w-5 h-5 text-gray-500" />
    </div>
  {:else}
    <a class="{rootClass} inline-flex flex-grow items-center border border-gray-300 px-3 py-3" href="tel:{sanitisePhone(phone)}">
      <PhoneLabelledIcon iconClass="text-{colour}-500" text={phone} />
    </a>
    <a class="{rootClass} inline-flex items-center border border-gray-300 border-l-0 px-6" href="sms:{sanitisePhone(phone)}">
      <ChatAltIcon class="w-5 h-5 text-{colour}-500" />
    </a>
  {/if}
</div>
